<?php
namespace App\Blocks;

use zkd\Module\Gutenberg\Block;
use zkd\Module\Gutenberg\Gutenberg;

class Footercontact extends Block
{
  /**
   * Current version of the block
   *
   * @var string
   */
  protected $version = '1.0.0';

  /**
   * Constructor
   *
   *
   */
  public function __construct(string $id, Gutenberg $instance)
  {
    $this->init($id, array(
      'manager' => $instance,
      'title' => __('Stopka - informacje kontaktowe', 'zkd')
    ));
  }

  /**
   * Overwrite this function in child if you would
   * like to modify the data.
   *
   * @param array $block RAW block data from ACF.
   * @param array $data  Parsed block data.
   *
   * @return array
   */
  protected function filter(array $data, array $block = array()): array
  {
    return $data;
  }
}
