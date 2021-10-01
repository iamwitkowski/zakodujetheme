<section class="history" id="o-nas">
  <div class="wrapper">
    <div class="row">
      <div class="history__info">
        <div class="">{{$contact['company_name']}}</div>
        <div style="display: flex; align-content: center; align-items: center;" class=""> @icon('map-pin', ['class' => 'button__icon']){{$contact['city']}}</div>
        <div style="display: flex; align-content: center; align-items: center;" class="">@icon('mail', ['class' => 'button__icon']){{$contact['email']}}</div>
      </div>
      <div class="col-1-2 --left">
        <span class="section__intro --orange">Historia</span>
        <h2 class="history__title">
          {{$history_section['title']}}
        </h2>
      </div>
      <div class="col-1-2 --right">
        <div class="history__content">
          <div class="row">
            <div class="history__text">
              <div class="js-text">
                <?php echo $history_section['desc'];?>
              </div>
              <div class="button --green-light js-expand-button">Rozwiń  @icon('chevron-down', ['class' => 'button__icon --chevron'])</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="history__images">
      <img src="{{$history_section['image1']}}" alt=""/>
      <img src="{{$history_section['image2']}}" alt=""/>
    </div>
  </div>
</section>
