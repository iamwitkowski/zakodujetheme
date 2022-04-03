<section class="block block-contact {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
     <div class="row">

      <div class="block-contact__box --map">
        <iframe src="https://snazzymaps.com/embed/372648" width="100%" height="100%" style="border:none;"></iframe>
      </div>

      <div class="block-contact__box --black">
        <h3>Poznajmy się</h3>
        {!! $data->mail !!}
        {!! $data->phone !!}
        {!! $data->adress !!}
      </div>

      <div class="block-contact__box --light">
        @php
          dynamic_sidebar( 'fp-widget' );
        @endphp
      </div>

    </div>
</section>
