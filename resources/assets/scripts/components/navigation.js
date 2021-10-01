/**
 * Handle the mobile navigation toggler.
 *
 *
 */
export const handleNavigationToggler = () => {
  const toggler = document.querySelector('[data-main-navigation-toggler]');
  const menu = document.querySelector('[data-main-navigation-menu]');
  const menuItem = document.querySelector('.site-header__menu li a');

  if (toggler && menu) {
    toggler.addEventListener('click', e => {
      toggler.classList.toggle('--active');
      menu.classList.toggle('--active');
    });

  }
};
