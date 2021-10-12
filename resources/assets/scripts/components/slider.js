import Swiper from "swiper";

export const featuredSlider = new Swiper(document.querySelector('.featured .swiper-container'), {
  slidesPerView: 'auto',
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
