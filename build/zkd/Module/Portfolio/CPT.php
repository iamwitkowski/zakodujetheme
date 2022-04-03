<?php
/**
 * Portfolio register CPT
 *
 * @author MW
 */
namespace zkd\Module\Portfolio;

class CPT
{
  /**
   * @action init
   *
   * @author MW
   *
   */
  public function createCPT()
  {
    register_post_type(
        'ExampleCPT',
        array(
          'labels' => array(
            'name' => __('Portfolio', 'zkd'),
            'singular_name' => __('Portfolio', 'zkd'),
          ),
          'public'  => true,
          'show_ui' => true,
          'has_archive' => true,
          'menu_icon' => 'dashicons-portfolio',
          'supports' => array('title', 'editor', 'thumbnail'),
          'show_in_rest' => true,
          'publicly_queryable'  => true,
        )
    );
  }
}
