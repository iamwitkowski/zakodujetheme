<section class="block block-caffles {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <div class="wrapper">
    <div class="row">
      @foreach($data->caffle as $caffle)
        <div class="block-caffles__item ui__glassed ui__rounded ui__blue">
          <h3>{!! $caffle['title'] !!}</h3>
          <div class="block-caffles__item--price">{{$caffle['price']}}<span>PLN/miesięcznie</span></div>
          <div class="block-caffles__item--content">
            {!! $caffle['content'] !!}
          </div>
          @if(!empty($caffle['button']))
            <a href="{!! $caffle['button']!!}" class="button ui__glassed ui__rounded --white">Zamów!</a>
          @endif
        </div>
      @endforeach
    </div>
  </div>
</section>
