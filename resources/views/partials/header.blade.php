@php
/**
 * Template: Header
 *
 *
 */
do_action('get_header')
@endphp

<header class="site-header">
  <div class="site-header__wrapper wrapper">
    <div class="site-header__logo" itemscope itemtype="http://schema.org/Organization">
      <a href="{!! home_url( '/' ) !!}" itemprop="url" aria-label="{!! get_bloginfo('name') !!}">
        {!! $site_logo !!}
      </a>
    </div>

    <button class="site-header__toggler" type="button" data-main-navigation-toggler>
      <span></span>
      <span></span>
      <span></span>
    </button>

    @if (has_nav_menu('primary_navigation'))
      <nav class="site-header__nav" data-main-navigation-menu>
        @php
          wp_nav_menu(array(
            'theme_location' => 'primary_navigation',
            'container'      => false,
            'items_wrap'     => '<ul itemscope itemtype="http://www.schema.org/SiteNavigationElement" class="site-header__menu %2$s">%3$s</ul>',
            'depth'          => 2,
          ));
        @endphp
      </nav>
    @endif
  </div>
</header>
