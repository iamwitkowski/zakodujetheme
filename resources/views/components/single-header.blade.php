<header class="single-header" style="background-image: url({{ the_post_thumbnail_url() }})">
  <div class="wrapper">
    <div class="single-header__categories">
      @php
        $categories = get_the_category();
      @endphp
      @foreach($categories as $cat)
        <a href="{!! get_category_link($cat) !!}" class="post-tile__data --category">{!! $cat->name !!}</a>
      @endforeach
    </div>
    <h1 class="single-header__heading">
      {!! App::title() !!}
    </h1>
    <a class="button --circle" href="https://www.facebook.com/sharer/sharer.php?u={!! get_the_permalink() !!}" target="_blank">
      @icon('share')
    </a>
  </div>
</header>

@include('components.single-header-sticky')
