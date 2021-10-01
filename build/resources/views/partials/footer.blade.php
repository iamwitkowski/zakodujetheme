@php
/**
 * Template: Footer
 *
 *
 */
$copyrights = get_field('s_footer_copyrights', 'options');
@endphp


  <footer class="site-footer">
    @if (!empty($copyrights))
      <div class="copyrights-footer">
        <div class="wrapper">
          <p>{!! $copyrights !!}</p>
        </div>
      </div>
    @endif
  </footer>




@php wp_footer(); @endphp
@php do_action('get_footer');@endphp

