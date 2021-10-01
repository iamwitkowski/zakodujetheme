<section class="contact" id="kontakt">
  <div class="wrapper">
    <div class="contact__info">
      <span class="section__intro --orange">Współpraca</span>
      <h2 class="contact__title">
        {{$contact['title']}}
      </h2>
        <h5>{{$contact['company_name']}}</h5>
        <div class="contact__adress">
          @icon('map-pin', ['class' => 'button__icon --margin'])<p>{{$contact['adress']}}</p>
        </div>
        <div class="contact__mail" style="margin-bottom: 6rem;">
          @icon('mail', ['class' => 'button__icon'])<p>{{$contact['email']}}</p>
        </div>
      <h5>Sprzedaż detaliczna</h5>
        <div class="contact__mail">
          @icon('mail', ['class' => 'button__icon'])<p>{{$contact['sales_mail']}}</p>
        </div>
      <h5>Sprzedaż hurtowa</h5>
        <div class="contact__mail" style="margin-bottom: 0;">
          @icon('phone', ['class' => 'button__icon'])<p>{{$contact['phone']}}</p>
        </div>
        <div class="contact__mail">
          @icon('mail', ['class' => 'button__icon'])<p>{{$contact['wholesale_mail']}}</p>
        </div>
      <h5>Sprzedaż towarów paszowych</h5>
        <div class="contact__mail">
          @icon('mail', ['class' => 'button__icon'])<p>{{$contact['forage_mail']}}</p>
        </div>
    </div>
    <div class="contact__map">
      <figure>
        <?php echo $contact['map']; ?>
      </figure>
    </div>
  </div>
</section>
