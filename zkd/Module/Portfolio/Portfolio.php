<?php
/**
 * Module: Portfolio
 *
 * Module responsible for portfolio
 *
 * @author MW
 */
namespace zkd\Module\Portfolio;

use function zkd\createClass;

class Portfolio
{
  private $cpt;

  public function __construct()
  {
    $this->cpt = createClass('zkd\\Module\\Portfolio\\CPT');
  }
}
