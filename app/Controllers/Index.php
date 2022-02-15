<?php
  /**
   * App: Index Data
   *
   *
   */

	namespace App\Controllers;

  use Sober\Controller\Controller;

	class Index extends Controller
	{
	  /* get: Blog Intro
	   *
	   */
    public function blogIntro() {
      if (function_exists('get_field')) {
        $id = get_option( 'page_for_posts' );
        $intro = get_field('intro_text',$id );
      }
      return $intro;
    }
	}
