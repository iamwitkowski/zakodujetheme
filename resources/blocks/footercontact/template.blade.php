<section class="block block-contact-footer {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <div>
    <h4>Zadzwoń</h4>
    <p>{!! $data->phone !!}</p>
    <h4>Wyślij wiadmość</h4>
    <p>{!! $data->mail !!}</p>
    <h4>Dane firmy</h4>
    {!! $data->company_data !!}
  </div>
</section>
