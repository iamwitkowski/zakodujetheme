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
  /**
   * Get: Hero
   *
   *
   * @return array
   */
  public function heroSection(): array
  {
    if (function_exists('get_field')) {
      $hero = array(
        "title" => get_field('hero_title'),
        "desc" => get_field('hero_desc'),
        "video" => get_field('hero_video'),
      );
    }
    return $hero;
  }

  /**
   * Get: History
   *
   *
   * @return array
   */
  public function historySection(): array
  {
    if (function_exists('get_field')) {
      $history = array(
        "title" => get_field('history_title'),
        "desc" => get_field('history_desc'),
        "image1" => get_field('history_image1'),
        "image2" => get_field('history_image2'),
      );
    }
    return $history;
  }

  /**
   * Get: Slider
   *
   *
   * @return array
   */
  public function sliderComponent(): array
  {
    if (function_exists('get_field')) {
      $slider = array(
        "slides" => get_field('slides')
      );
    }
    return $slider;
  }

  /**
   * Get: Products
   *
   *
   * @return array
   */
  public function products(): array
  {
    if (function_exists('get_field')) {
      $products = array(
        "products" => get_field('products'),
        "title" => get_field('products_title'),
      );
    }
    return $products;
  }

  /**
   * Get: Cooperation
   *
   *
   * @return array
   */
  public function coop(): array
  {
    if (function_exists('get_field')) {
      $coop = array(
        "title" => get_field('coop_title'),
        "desc" => get_field('coop_desc'),
        "image1" => get_field('coop_image1'),
        "image2" => get_field('coop_image2'),
      );
    }
    return $coop;
  }


  /**
   * Get: Contact
   *
   *
   * @return array
   */
  public function contact(): array
  {
    if (function_exists('get_field')) {
      $contact = array(
        "title" => get_field('contact_title'),
        "company_name" => get_field('company_name'),
        "city" => get_field('city'),
        "phone" => get_field('phone'),
        "adress" => get_field('adress'),
        "email" => get_field('email'),
        "sales_mail" => get_field('sales_mail'),
        "wholesale_mail" => get_field('wholesale_mail'),
        "forage_mail" => get_field('forage_mail'),
        "map" => get_field('map'),
      );
    }
    return $contact;
  }

}
