<section class="block block-offer {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <div class="wrapper">
    <h2>Oferta</h2>
   <div class="block-offer__content">
     {!! $data->content !!}
    </div>
  </div>
</section>
