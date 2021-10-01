<?php
/**
 * Gutenberg: Block Interface
 *
 * This is interface used for creating new blocks. The three
 * functions are needed here to work properly.
 *
 * 
 */
namespace zkd\Module\Gutenberg;

interface BlockInterface
{
  /**
   * Initialize
   *
   * 
   * @return void
   */
  public function create(): void;

  /**
   * Render
   *
   * 
   * @return void
   */
  public function render(array $block): void;
}
