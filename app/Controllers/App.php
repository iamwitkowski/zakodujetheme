<?php
/**
 * App: Main
 *
 *
 */
namespace App\Controllers;

use Sober\Controller\Controller;

class App extends Controller
{
  /**
   * Get: Current Title
   *
   *
   * @return bool
   */
  public static function title(): string
  {
    return zkd('utils')->getTitle();
  }

  /**
   * Check: Sidebar Displaying
   *
   *
   * @return bool
   */
  public static function displaySidebar(): bool
  {
    return zkd('utils')->isSidebarActive();
  }

  /**
   * Get: Site Logo
   *
   *
   * @return array
   */
  public function siteLogo(): string
  {
    if (function_exists('get_field')) {
      $logoStandard = get_field('s_logo', 'option');
      $logoRetina = get_field('s_logo_retina', 'option');

      if (empty($logoStandard)) {
        return get_bloginfo('name');
      }

      $srcset = '';
      if (!empty($logoStandard) && !empty($logoRetina)) {
        $srcset = 'srcset="' . $logoStandard . ' 1x, ' . $logoRetina . ' 2x"';
      }

      return '<img src="' . $logoStandard . '" ' . $srcset . ' />';
    }
    return '';
  }

  public function featured() {
    if (function_exists('get_field')) {
      $id = get_option( 'page_for_posts' );
      $featured = get_field('featured_post',$id );
    }
    return $featured;
  }
}
