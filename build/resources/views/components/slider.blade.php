<section class="slider" id="galeria">
  <div class="wrapper">
    <div class="swiper-container slider__container">
      <div class="swiper-wrapper">
        @foreach($slider_component['slides'] as $slides)
          <div class="swiper-slide slider__single">
            <img src="{{$slides['image']}}" />
          </div>
        @endforeach
      </div>
    </div>
    <div class="slider__navigation">
      <div class="button --orange swiper-button-prev">@icon('slider-left', ['class' => 'button__icon'])</div>
      <div class="button --orange swiper-button-next">@icon('slider-right', ['class' => 'button__icon'])</div>
    </div>
  </div>
</section>



