<?php

namespace zkd\Sage;

use function zkd\createClass;

class Init
{
  /**
   * @var \zkd\Sage\Setup
   */
  private $setup;

  /**
   * @var \zkd\Sage\Blade
   */
  private $blade;

  public function __construct()
  {
    $this->setup = createClass('zkd\\Sage\\Setup');
    $this->blade = createClass('zkd\\Sage\\Blade');
  }
}
