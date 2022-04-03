<?php

namespace zkd;

use zkd\Core\Singleton;

class Init extends Singleton
{
  public $public = array();

  public $private = array();

  public function __construct()
  {
    $this->addPrivate('Sage\\Init');

    $this->addPrivate('Core\\ACF');
    $this->addPublic('Core\\Utils', 'utils');
    $this->addPublic('Core\\Environment', 'env');

    $this->addPrivate('Admin\\Dashboard');
    $this->addPrivate('Admin\\Notices');
    $this->addPrivate('Admin\\Menu');

    $this->addPrivate('Theme\\Setup');
    $this->addPrivate('Theme\\Security');
    $this->addPrivate('Theme\\Settings');
    $this->addPrivate('Theme\\Customizer');
    $this->addPublic('Theme\\Widgets', 'widgets');

    $this->addPublic('Module\\Cookies', 'cookies');
    $this->addPublic('Module\\Schema\\Schema', 'schema');
    $this->addPublic('Module\\Gutenberg\\Gutenberg', 'gutenberg');
    $this->addPrivate('Module\\Media\\Media');

    $this->addPublic('Module\\Portfolio\\Portfolio', 'Portfolio');
  }

  public function addPublic(string $name, string $label = '')
  {
    $class = 'zkd\\' . $name;
    $index = !empty($label) ? $label : $name;
    $this->public[$index] = new $class();
    doc()->addDocHooks($this->public[$index]);
  }

  public function addPrivate(string $name, string $label = '')
  {
    $class = 'zkd\\' . $name;
    $index = !empty($label) ? $label : $name;
    $this->private[$index] = new $class();
    doc()->addDocHooks($this->private[$index]);
  }
}
