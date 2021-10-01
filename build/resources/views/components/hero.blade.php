<section class="hero">
  <video class="hero__video" width="100%" height="100%" autoplay loop muted>
    <source src="{{$hero_section['video']}}" type="video/mp4" />
  </video>
  <div class="wrapper">
    <h1 class="hero__title">
      {{$hero_section['title']}}
    </h1>
    <div class="hero__desc">
      <?php echo $hero_section['desc']; ?>
    </div>
    <div class="hero__buttons">
      <a href="#o-nas" class="button --green">O nas   @icon('arrow-right', ['class' => 'button__icon'])</a>
      <a href="#wspolpraca" class="button --orange">Współpraca  @icon('arrow-right', ['class' => 'button__icon'])</a>
    </div>
  </div>
</section>
