@php
  /**
   * Template: Footer
   *
   *
   */
  $widgets = zkd('widgets')->getFooterIds();
  $copyrights = get_field('s_footer_copyrights', 'options');


@endphp

<footer class="site-footer">
  <div class="row">
    <div class="col-xl-2 col-lg-3 col-md-4"></div>
    @if (!empty($copyrights))
      <div class="site-footer__content col-xl-10 col-lg-9">
        @if (!empty($widgets))
          <div class="site-footer__mobile-menu">
            @foreach ($widgets as $key => $widget)
              @php dynamic_sidebar($widget) @endphp
            @endforeach
          </div>
        @endif
        <div class="copyrights-footer">
          <p>{!! $copyrights !!}</p>
        </div>
        @endif
      </div>
</footer>




@php wp_footer(); @endphp



@php do_action('get_footer');@endphp

