@php
  /**
   * Template: Footer
   *
   *
   */
  $widgets = zkd('widgets')->getFooterIds();
  $copyrights = get_field('s_footer_copyrights', 'options');
@endphp

@if (!empty($widgets))
  <footer class="site-footer">
    <div class="wrapper">
      <div class="row">
        @foreach ($widgets as $key => $widget)
          <div class="site-footer__widget --widget-{!! $key !!}">
            @php dynamic_sidebar($widget) @endphp
          </div>
        @endforeach
      </div>
    </div>
  </footer>
@endif

@if (!empty($copyrights))
  <div class="copyrights-footer">
    <div class="wrapper">
      {!! $copyrights !!}
    </div>
  </div>
@endif

@php wp_footer(); @endphp
@php do_action('get_footer');@endphp

