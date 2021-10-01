<section class="products" id="produkty">
  <div class="wrapper">
    <div class="products__intro">
      <span class="section__intro --orange">Produkty</span>
      <h2 class="products__title">{{$products['title']}}</h2>
    </div>
    <div class="row">
      @foreach($products['products'] as $key => $product)
        <div class="products__item">
          <figure>
            <img src="{{$product['image']}}" alt="" />
          </figure>
          <h3 class="products__name">{{$product['name']}}</h3>
          <div class="js-text product"><?php echo $product['desc'];?></div>
          <div class="button --green js-expand-button" data-attr="{{$key}}">@icon('plus')</div>
        </div>
      @endforeach
    </div>
  </div>
</section>
