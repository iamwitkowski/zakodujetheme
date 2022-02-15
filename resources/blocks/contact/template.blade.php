<section class="block block-contact {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <div class="wrapper">
    <h2>Skontaktuj się</h2>
    <div class="row">
      <div class="block-contact__box">
        @icon('phone')
        {!! $data->phone !!}
      </div>

      <div class="block-contact__box">
        @icon('message')
        {!! $data->mail !!}
      </div>

      <div class="block-contact__box">
        @icon('adress')
        {!! $data->adress !!}
      </div>
    </div>
  </div>
</section>
