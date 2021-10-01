<?php
/**
 * Theme: Menu
 *
 * @author Sage
 */
namespace zkd\Theme;

class Menu
{
  /**
   * @var integer The ID of the menu, corresponding to the wp_terms table.
   */
  private $id;

  /**
   * @var integer The ID of the menu, corresponding to the wp_terms table.
   */
  private $ID;

  private $locations;

  /**
   * @var array|null Array of menu items you can to iterate through.
   */
  private $items = null;

  /**
   * Initialize a menu
   *
   * @param string $slug menu slug
   * @param array $options An array of options, right now only `depth` is supported
   */
  public function __construct(string $slug, array $options = array())
  {
    if ('' === $slug || ' ' === $slug) {
      throw new \Exception('Menu slug cannot be empty');
    }
    $this->locations = get_nav_menu_locations();
    $this->init($this->getFromLocation($slug));
  }

  /**
   * Initialize Class
   *
   * @param int $menuId
   */
  private function init(int $menuId): void
  {
    $menu = wp_get_nav_menu_items($menuId);
    if ($menu) {
      _wp_menu_item_classes_by_context($menu);
      if (is_array($menu)) {
        $menu = $this->orderChildren($menu);
      }
      $this->items = $menu;
      $this->id = $this->ID;
    }
  }

  /**
   * Find ID of the menu item based on location name
   *
   * @param string $slug
   * @return integer
   */
  private function getFromLocation(string $slug): int
  {
    if (!isset($this->locations[$slug])) {
      throw new \Exception(sprintf('Not found any menu in %s location', $slug));
    }
    $this->ID = $this->locations[$slug];
    return $this->locations[$slug];
  }

  /**
   * Reorder menu children in way how they are set up in admin area
   *
   * @param array $items
   * @return array
   */
  protected function orderChildren(array $items): array
  {
    $index = array();
    $menu = array();
    foreach ($items as $item) {
      if (isset($item->ID)) {
        $menuItem = new MenuItem($item);
        $index[$item->ID] = $menuItem;
      }
    }
    foreach ($index as $item) {
      if (isset($item->parent) && $item->parent && isset($index[$item->parent])) {
        $index[$item->parent]->addChild($item);
      } else {
        $menu[] = $item;
      }
    }
    return $menu;
  }

  /**
   * Get menu items
   *
   * @return array|null Array of menu items objects. Null if no items could be found.
   */
  public function getItems(): ?array
  {
    return $this->items;
  }
}
