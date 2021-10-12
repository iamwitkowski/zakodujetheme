<?php
/**
 * Starter
 *
 * This is main functions.php file for out starter WordPress.
 * Please add here functions only if you really need this and
 * do not remove the Bootstrap loading.
 */
require dirname(__FILE__).'/inc/bootstrap.php';
/**
 * Do not edit anything above in this file unless you know what you're doing.
 * You can put anything under this comment.
 */


 // add_filter( 'use_block_editor_for_post', '__return_false' );


  function zkd_acf_orphans($value, $post_id, $field)
  {
    if ( class_exists( 'iworks_orphan' ) )
    {
      $orphan = new \iworks_orphan();
      $value = $orphan->replace( $value );
    }
    return $value;
  }

  add_filter('acf/format_value/type=textarea', 'zkd_acf_orphans', 10, 3);
  add_filter('acf/format_value/type=wysiwyg', 'zkd_acf_orphans', 10, 3);
