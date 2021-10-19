<?php

  namespace zkd\Module\Widget;

  use \WP_Widget;

  class Categories extends WP_Widget
  {

    public function __construct()
    {
      parent::__construct(
        'zkd_categories_widget',
        esc_html__('Social Media Widget', 'zkd'),
        [
          'description' => esc_html__('Widget used in sidebar to display social media icons', 'zkd'),
        ]
      );
    }


  }
