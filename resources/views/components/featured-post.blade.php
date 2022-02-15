<section class="featured wrapper">
  <div class="featured__accent"></div>
  <div class="featured__accent --green"></div>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        @foreach($featured as $featured_post)
          @php
          global $post;
          $id = $featured_post['post'];
          $title = get_the_title($id);
          $thumb = get_the_post_thumbnail_url($id);
          $author_id = $post->post_author;
          $author_name = get_the_author_meta( 'display_name', $author_id );
          $post_date = get_the_date('d M Y', $id);
          $categories = get_the_category($id);
          @endphp
          <div class="swiper-slide featured__single">
            <div class="wrapper">
              <div class="featured__content ui__glassed ui__rounded">
                  @foreach($categories as $cat)
                  <a href="{!! get_category_link($cat) !!}" class="post-tile__data --category">{!! $cat->name !!}</a>
                  @endforeach
                  <h3>
                    <a href="{!! get_the_permalink($id) !!}}">
                    {!! $title !!}
                    </a>
                  </h3>
                <span class="post-tile__data --author">{!! $author_name !!}</span>
                <span class="post-tile__data --date">{!! $post_date !!}</span>
                    <span class="post-tile__data --read-time">Przeczytasz w <strong>2 minuty</strong></span>
              </div>
              <div class="featured__image ui__rounded" style="background-image: url({{$thumb}});"></div>
            </div>
          </div>
        @endforeach
      </div>
      <div class="swiper-navigation">
        <button class="swiper-button-prev ui__glassed  --white">@icon('arrow')</button>
        <button class="swiper-button-next ui__glassed  --white">@icon('arrow')</button>
      </div>
    </div>
  </div>
</section>
