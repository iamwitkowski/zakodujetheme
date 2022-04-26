<?php
/**
 * App: FrontPage
 *
 *
 */
namespace App\Controllers;

use Sober\Controller\Controller;

class FrontPage extends Controller
{
  /* get: Blog Intro
   *
   */
  public function getHeroImage() {
    if (function_exists('get_field')) {
      $image = get_field('hero_image','option' );
    }
    return $image;
  }


}
