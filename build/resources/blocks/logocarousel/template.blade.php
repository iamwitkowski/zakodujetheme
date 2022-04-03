<section class="block block-logo-carousel {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <div class="wrapper">
    <div class="row">
      @foreach($data->logotypes as $logotypes)
        <figure class="block-logo-carousel__item">
          <img src="{{$logotypes['logo']}}" />
        </figure>
      @endforeach
    </div>
  </div>
</section>
