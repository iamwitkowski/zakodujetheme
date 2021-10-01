<?php
/**
 * Module: Uploads
 *
 * 
 */
namespace zkd\Module\Media;

class Media
{

  /**
   * @var Submodules\Sizes
   */
  private $sizes;

  /**
   * @var Submodules\Names
   */
  private $names;

  /**
   * @var Submodules\WEBP
   */
  private $webp;

  /**
   * Constructor
   */
  public function __construct()
  {
    $this->sizes = createClass('zkd\\Module\\Media\\Submodules\\Sizes');
    $this->names = createClass('zkd\\Module\\Media\\Submodules\\Names');
    $this->webp = createClass('zkd\\Module\\Media\\Submodules\\WEBP');
  }
}
