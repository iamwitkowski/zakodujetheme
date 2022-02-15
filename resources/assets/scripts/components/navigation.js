/**
 * Handle the mobile navigation toggler.
 *
 *
 */
export const handleNavigationToggler = () => {
  const toggler = document.querySelector('[data-main-navigation-toggler]');
  const menu = document.querySelector('[data-main-navigation-menu]');

  if (toggler && menu) {
    toggler.addEventListener('click', e => {
      toggler.classList.toggle('--active');
      menu.classList.toggle('--active');
    });

  }

  window.addEventListener("scroll", changeMenu);
  function changeMenu() {
    var y = window.scrollY;
    if (y >= 150) {
      document.querySelector(".site-header").classList.add("stick");
    }
    if (y <= 150) {
      document.querySelector(".site-header").classList.remove("stick");
    }
  }


  window.addEventListener("scroll", showSticky);
  function showSticky() {
    var y = window.scrollY;
    if (y >= 500) {
      document.querySelector(".single-header-sticky").style.top = "50px";
    }
    else {
      document.querySelector(".single-header-sticky").style.top = "-100px";
    }
  }


  let processScroll = () => {
    let docElem = document.documentElement,
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
      scrollPercent = scrollTop / scrollBottom * 100 + '%';

    // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

    document.querySelector(".single-header-sticky__progressbar").style.setProperty("--scrollAmount", scrollPercent);
  }

  document.addEventListener('scroll', processScroll);


};
