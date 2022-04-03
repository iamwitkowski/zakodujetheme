@php
$categories = get_categories();

@endphp

<section class="block block-categories ui__rounded {{ join(' ', $block->classList) }}" id="{{ $block->anchor }}" data-block="{{ $block->id }}">
  <h4>Kategorie</h4>
  @foreach($categories as $category)
    <?php
    $cat_id = $category->term_id;
    $posts = $category->count;
    $term = 'category_'.$cat_id;
    $image = get_field('icon', $term );
    ?>
  <div class="block-categories__item">
    <img class="" src="{!!$image!!}" />
    <div class="block-categories__item--header">
      <a href="{!! get_category_link($cat_id) !!}">
        <span class="block-categories__category-title">{!! $category->name  !!}</span>
      </a>
      <span>Liczba wpisów: {!! $posts !!}</span>
    </div>
  </div>


  @endforeach
</section>

