<?php
/**
 * Module: Cookies Bar
 *
 * This module creates support for displaying cookie bar in theme.
 * You can set cookie message in the system options.
 *
 * 
 */
namespace zkd\Module;

class Cookies
{
  /**
   * Mode of cookie bar
   * It could be disabled | shortcode | footer
   *
   * @var null|null
   */
  private $mode = null;

  /**
   * Lifetime of Cookie Bar in days
   *
   * @var int
   */
  private $lifetime = 30;

  /**
   * Returns Cookie Bar mode
   *
   * @author author
   * @return string
   */
  private function getMode(): ?string
  {
    return $this->mode;
  }

  /**
   * Set: Mode
   *
   * @action wp
   *
   * 
   * @return void
   */
  public function setMode(): void
  {
    $mode = get_field('s_cookies_display_type', 'options');
    if (in_array($mode, array('disabled', 'shortcode', 'footer'), true) && '' !== get_field('s_cookies_message', 'options')) {
      $this->mode = $mode;
    } else {
      $this->mode = 'disabled';
    }
  }

  /**
   * Prints Cookie message with shortcode
   *
   * @shortcode cookie_bar
   *
   * @author author
   * @return string
   */
  public function printShortcode(): string
  {
    if ('shortcode' === $this->getMode()) {
      return $this->print();
    }
    return '';
  }

  /**
   * Prints Cookie message in footer
   *
   * @action wp_footer
   *
   * @author author
   * @return void
   */
  public function printFooter(): void
  {
    if ('footer' === $this->getMode()) {
      echo $this->print();
    }
  }

  /**
   * Prints Cookie Bar when it is required
   *
   * 
   * @return string
   */
  private function print(): string
  {
    if ($this->show()) {
      ob_start(); ?>
        <div class="cookie-bar alert alert-dismissible fade show component" role="alert">
          <div class="cookie-bar__message"><?php the_field('s_cookies_message', 'options'); ?></div>
          <button type="button" class="cookie-bar__close close" data-dismiss="alert">&times;</button>
        </div>
      <?php return ob_get_clean();
    }
    return '';
  }

  /**
   * Function checks if Cookie Bar should be displayed
   *
   * 
   * @return bool
   */
  private function show(): bool
  {
    if (!empty($_COOKIE['zkd_cookie_bar']) && 'hide' === $_COOKIE['zkd_cookie_bar']) {
      return false;
    }
    return true;
  }

  /**
   * Function closes Cookie Bar
   *
   * @action wp_ajax_dismiss_cookie_bar
   * @action wp_ajax_nopriv_dismiss_cookie_bar
   *
   * 
   * @return void
   */
  public function dismissCookieBar(): void
  {
    $result = setcookie('zkd_cookie_bar', 'hide', time() + 3600 * 24 * $this->lifetime, '/');
    wp_send_json_success($result);
    wp_die();
  }
}
