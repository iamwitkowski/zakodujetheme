<!doctype html>

<html {!! get_language_attributes() !!}>
  @include('partials.head')

  <body {!! body_class() !!}>
    @php do_action('zkd_after_opening_body_tag') @endphp

    <!--[if IE]>
    <div class="alert alert-warning">
      You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
    </div>
    <![endif]-->

    @include('partials.header')
    @yield('content')
    @include('partials.footer')

    @php do_action('zkd_before_closing_body_tag') @endphp

  </body>

</html>
