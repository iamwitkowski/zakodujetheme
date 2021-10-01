<?php
/**
 * Module: Gutenberg
 *
 * Module created for using Gutenberg Editor with easier way.
 *
 * 
 */
namespace zkd\Module\Gutenberg;

use function App\sage;
use function zkd\createClass;

class Gutenberg
{
  /**
   * List of created blocks
   *
   * @var array
   */
  private $blocks;

  /**
   * Function initializes the blocks created in /resources/blocks directory.
   *
   * @action after_setup_theme
   */
  public function init()
  {
    $path = get_template_directory() . '/blocks';
    if (file_exists($path)) {
      $blocks = array_diff(scandir($path), array('..', '.'));
      if (!empty($blocks)) {
        foreach ($blocks as $blockID) {
          $blockName = \CaseConverter\CaseString::kebab($blockID)->pascal();
          $blockClass = "App\\Blocks\\{$blockName}";
          $blockPath = "{$path}/{$blockID}/src/{$blockName}.php";

          if (file_exists($blockPath)) {
            require_once $blockPath;
            $this->blocks[$blockID] = createClass($blockClass, array($blockID, $this));
          }
        }
      }
    }
  }

  /**
   * Wrap Core Blocks
   *
   * We would like to wrap default blocks into new div.
   * Some of them shouldn't be added so we can add them
   * to exceptions array.
   *
   * @filter render_block 10 2
   *
   * 
   * @return string
   */
  public function wrapCoreBlocks($content, $block): string
  {
    if (!empty($block['blockName'])) {
      // Don't wrap some blocks
      $exceptions = array('column', 'block', 'table', 'spacer');
      foreach ($exceptions as $exception) {
        if (false !== strpos($block['blockName'], $exception)) {
          return $content;
        }
      }

      // Wrap default blocks
      $allowed = array('core');
      foreach ($allowed as $item) {
        if (false !== strpos($block['blockName'], $item)) {
          return '<section class="block block-core block-core--'.str_replace('core/', '', $block['blockName']).'">' . $content . '</section>';
        }
      }
    }

    return $content;
  }

  /**
   * Allow Unfiltered HTML
   *
   * Enable unfiltered_html capability for Administrators and Editors.
   * Disabling that will break Gutenberg for multisites because standard
   * administrators don't have unfiltered_html privileges. Only
   * super administrator has that.
   *
   * @filter map_meta_cap 1 3
   *
   * @param  array  $caps    The user's capabilities.
   * @param  string $cap     Capability name.
   * @param  int    $user_id The user ID.
   * @return array  $caps    The user's capabilities, with 'unfiltered_html' potentially added.
   */
  public function allowUnfilteredHTML(array $caps, string $cap, int $user_id): array
  {
    if ('unfiltered_html' === $cap && (user_can($user_id, 'editor') || user_can($user_id, 'administrator'))) {
      $caps = array('unfiltered_html');
    }
    return $caps;
  }

  /**
   * Get instance class of block
   *
   * @param string $name
   * @return null|object
   */
  public function get(string $name): ?object
  {
    if (isset($this->blocks[$name])) {
      return $this->blocks[$name];
    }
    return null;
  }
}
