
<article class="post-tile ui__rounded ui__glassed">
  <header class="post-tile__header">
      @php
        $categories = get_the_category();
      @endphp
    @foreach($categories as $cat)
      <a href="{!! get_category_link($cat) !!}" class="post-tile__data --category">{!! $cat->name !!}</a>
    @endforeach
    <h4 class="post-tile__heading">
      <a href="{!! get_the_permalink() !!}">
        {!! get_the_title() !!}
      </a>
    </h4>
    <span class="post-tile__data --date">{!! get_the_date('d M Y', $post->ID) !!}</span>
    <div class="post-tile__data --excerpt">
      {!! the_excerpt(); !!}
    </div>
    <a class="button --shadow --circle" href="https://www.facebook.com/sharer/sharer.php?u={!! get_the_permalink() !!}" target="_blank">

    </a>
  </header>
  <a href="{!! get_the_permalink() !!}">
    <figure class="post-tile__thumbnail ui__rounded">
      @php
        the_post_thumbnail('thumbnail');
      @endphp
    </figure>
  </a>
</article>
