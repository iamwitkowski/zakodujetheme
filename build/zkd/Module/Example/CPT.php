<?php
/**
 * Example CPT for theme development
 *
 * @author MW
 */
namespace zkd\Module\Example;

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
            'name' => __('Przykładowy CPT', 'zkd'),
            'singular_name' => __('Przykładowe CPT', 'zkd'),
          ),
          'public'  => true,
          'show_ui' => true,
          'has_archive' => true,
          'menu_icon' => 'dashicons-admin-users',
          'supports' => array('title', 'editor', 'thumbnail'),
          'show_in_rest' => true,
          'publicly_queryable'  => true,
        )
    );
  }
}
