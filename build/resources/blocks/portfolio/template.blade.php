<section class="block block-portfolio {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}" style="background-image: url({{$data->background}});">
  <div class="row">
    <div class="wrapper">
      <h2 class="block-portfolio__title">{{$data->text}}</h2>
      @if(!empty($data->link))
        <h4 class="block-portfolio__subtitle">Zobacz nasze realizacje</h4>
        <a href="{!! $data->link !!}" class="button ui__rounded --white">Portfolio</a>
      @endif
    </div>
  </div>
</section>
