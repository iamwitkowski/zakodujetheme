<?php
/**
 * Module: Offer
 *
 * Module responsible for offer
 *
 * @author MW
 */
namespace zkd\Module\Example;

use function zkd\createClass;

class Example
{
  private $cpt;

  public function __construct()
  {
    $this->cpt = createClass('zkd\\Module\\Example\\CPT');
  }
}
