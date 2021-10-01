<section class="cooperation" id="wspolpraca">
  <div class="wrapper">
    <div class="row">
      <div class="col-1-2">
        <span class="section__intro">Współpraca</span>
        <h2 class="cooperation__title">{{$coop['title']}}</h2>
        <div class="cooperation__desc js-text">
          <?php echo $coop['desc']; ?>
        </div>
        <a class="button --brown js-expand-button">Rozwiń  @icon('chevron-down-brown', ['class' => 'button__icon --chevron'])</a>
      </div>
      <div class="col-1-2">
        <div class="cooperation__images">
            <img src="{{$coop['image1']}}" alt="" />
            <img src="{{$coop['image2']}}" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
