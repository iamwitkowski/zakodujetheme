<?php
/**
 * Theme: Menu Item
 *
 * @author Sage
 */
namespace zkd\Theme;

class MenuItem
{
  /**
   * @var int ID of the menu item.
   */
  public $ID;

  /**
   * @var int ID of the menu item.
   */
  public $id;

  /**
   * @var int Title of the menu item.
   */
  public $title = '';

  /**
   * @var int Title of the menu item.
   */
  public $name = '';

  /**
   * @var int Slug of the menu item.
   */
  public $slug = '';

  /**
   * @var int Url of the menu item.
   */
  public $url = '';

  /**
   * @var int Url of the menu item.
   */
  public $link = '';

  /**
   * @var string HTML class attribute.
   */
  public $class = '';

  /**
   * @var array Array of class names.
   */
  public $classes = array();

  /**
   * @var string|null = Parent of the menu item.
   */
  public $parent = null;

  /**
   * @var bool Whether the menu item has a `menu-item-has-children` CSS class.
   */
  public $hasChildren = false;

  /**
   * @var array Array of children of a menu item. Empty if there are no child menu items.
   */
  public $children = array();

  /**
   * @var integer = Depth of the menu item.
   */
  public $level = 0;

  /**
   * @var bool Whether the menu item links to the currently displayed page.
   */
  public $isCurrent = false;

  /**
   * @var bool Whether the menu item refers to the parent item of the currently displayed page.
   */
  public $isParent = false;

  /**
   * @var bool Whether the menu item refers to an ancestor (including direct parent) of the currently displayed page.
   */
  public $isAncestor = false;

  /**
   * @var WP_Post Object of the original WordPress data.
   */
  private $data;

  public function __construct(\WP_Post $item)
  {
    $this->data = $item;
    $this->parent = $this->data->menu_item_parent;
    $this->setId($this->data->ID);
    $this->setTitle($this->data->title);
    $this->setSlug($this->data->title);
    $this->setUrl($this->data->url);
    $this->setClasses($this->data->classes);
    $this->addClass('menu-item-' . $this->ID);
    $this->createHTMLClass($this->classes);
    $this->isCurrent = $this->data->current;
    $this->isParent = $this->data->current_item_parent;
    $this->isAncestor = $this->data->current_item_ancestor;
  }

  /**
   * Add a new `zkd\Theme\MenuItem` object as a child of this menu item
   *
   * @param MenuItem $item
   * @return void
   */
  public function addChild(MenuItem $item): void
  {
    if (!$this->hasChildren) {
      $this->addClass('menu-item-has-children');
      $this->hasChildren = true;
    }
    $this->children[] = $item;
    $item->level = $this->level + 1;
    if (count($this->children)) {
      $this->updateChildLevels();
    }
  }

  /**
   * Update level of depth for the children of menu item
   *
   * @return boolean
   */
  public function updateChildLevels(): bool
  {
    if (is_array($this->children)) {
      foreach ($this->children as $child) {
        $child->level = $this->level + 1;
        $child->updateChildLevels();
      }
      return true;
    }
    return false;
  }

  /**
   * Set the public ID for the menu item
   *
   * @param integer $id
   * @return void
   */
  public function setId(int $id): void
  {
    $this->ID = $id;
    $this->id = $id;
  }

  /**
   * Set the public label for the menu item
   *
   * @param string|null $title
   * @return void
   */
  public function setTitle(?string $title): void
  {
    if (!isset($title)) {
      $this->title = '';
    }
    if ('' === $title) {
      $this->title = '';
    }
    $this->title = $title;
    $this->name = $title;
  }

  /**
   * Get the slug for the menu item
   *
   * @param string $name
   * @return void
   */
  public function setSlug(string $name): void
  {
    $slug = \CaseConverter\CaseString::title($name)->kebab();
    $this->slug = $slug;
  }

  /**
   * Set the public URL for the menu item
   *
   * @param string $url
   * @return void
   */
  public function setUrl(string $url): void
  {
    if ('' == $url) {
      $this->url = '';
    }
    $this->url = $url;
    $this->link = $url;
  }

  /**
   * Imports the classes to be used in CSS
   *
   * @param array $data list of class.
   * @return void
   */
  public function setClasses(array $data): void
  {
    $classes = array_unique($data);
    $classes = apply_filters('nav_menu_css_class', $classes, $this, array(), 0);
    $classes = array_filter($data, function ($class) {
      return $class !== '';
    });
    $this->classes = $classes;
  }

  /**
   * Add a CSS class the menu item should have
   *
   * Can also be used to add custom classes
   *
   * @param string $class_name CSS class name to be added.
   * @return void
   */
  public function addClass(string $className): void
  {
    $this->classes[] = $className;
  }

  /**
   * Create HTML class attribute
   *
   * @param array $classList
   * @return void
   */
  private function createHTMLClass(array $classList): void
  {
    $this->class = implode(' ', $classList);
  }
}
