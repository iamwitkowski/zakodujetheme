<?php
/**
 * Gutenberg: Block Base
 *
 * This abstract class is base for any block created for Gutenberg.
 * It contains functions which are useful / needed during development
 * and all components should extend that.
 *
 * 
 */
namespace zkd\Module\Gutenberg;

use zkd\Module\Gutenberg\Gutenberg;

use function zkd\zkd;
use function App\template;
use function App\assetPath;
use function App\assetFile;
use function App\templatePath;

abstract class Block implements BlockInterface
{
  /**
   * ID
   *
   * @var string
   */
  private $id;

  /**
   * Title
   *
   * @var string
   */
  private $title = '';

  /**
   * Description
   *
   * @var string
   */
  private $description = '';

  /**
   * ACF Group Key
   *
   * @var string
   */
  private $groupId = '';

  /**
   * Fields
   *
   * @var array
   */
  private $fields = null;

  /**
   * Manager
   *
   * Manager is initialized with DI and is useful during development.
   * With manager you can access global functions for this module.
   *
   * @var Gutenberg
   */
  private $manager;

  /**
   * Block dependencies path
   *
   * @var string
   */
  private $path;

  /**
   * Reusable
   *
   * @var bool
   */
  private $reusable = false;

  /**
   * Block dependencies.
   *
   * @var array
   */
  private $dependencies = [];

  /**
   * Current version of the block
   *
   * @var string
   */
  protected $version = '1.0.0';

  /**
   * Initialization
   *
   * Function initializes required data for block.
   *
   * 
   * @return void
   */
  public function init(string $id, array $attributes): void
  {
    if (!$id) {
      throw new \Exception('Gutenberg Block requires ID', 1);
    }
    $this->id = $id;

    if (!empty($attributes['title']) && is_string($attributes['title'])) {
      $this->title = $attributes['title'];
    }

    if (!empty($attributes['description']) && is_string($attributes['description'])) {
      $this->description = $attributes['description'];
    }

    if (!empty($attributes['manager'])) {
      $this->manager = $attributes['manager'];
    }

    if (!empty($attributes['reusable'])) {
      $this->reusable = $attributes['reusable'];
    }

    $this->path = get_template_directory() . '/blocks/' . $this->getId() . '/';

    $this->setDependencies();
  }

  /**
   * Create
   *
   * Block ACF Creation
   *
   * @action acf/init
   *
   * 
   * @return void
   */
  public function create(): void
  {
    $this->register();
  }

  /**
   * Register
   *
   * Function registers new Gutenberg block for ACF.
   *
   * @see https://www.advancedcustomfields.com/resources/acf_register_block/
   * 
   * @return void
   */
  protected function register(): void
  {
    if (function_exists('acf_register_block')) {
      acf_register_block_type(array(
        'name' => $this->id,
        'title' => $this->title,
        'description' => $this->description,
        'render_callback' => [$this, 'render'],
        'category' => 'layout',
        'icon' => 'screenoptions',
        'keywords' => [$this->id, 'zkd'],
        'supports' => ['anchor' => true]
      ));
    }
  }

  /**
   * Render
   *
   * Base function for rendering block template. It could be
   * overwritten by specific block class for example for
   * preparing data to display. In standard version it loads
   * only HTML / template file.
   *
   * @param array $block ACF Block data.
   *  & MC
   * @return void
   */
  public function render(array $block): void
  {
    $template = $this->path . 'template.blade.php';

    if (file_exists($template) && file_exists(templatePath($template))) {
      $data = $this->parse($block);
      $this->loadAssets($data);
      echo template($this->path . 'template.blade.php', $data);
    }
  }

  /**
   * Function allows to print the acf block programatically.
   * If the args array is empty, the system shows required
   * structure.
   *
   * 
   * @return void
   */
  public function print(array $args = array()): void
  {
    $this->setFields();

    if (empty($args) && !empty($this->fields)) {
      dd([
        'info' => 'Required structure',
        'fields' => $this->fields
      ]);
    }

    $data = $this->filter([
      'block' => (object) [
        'id' => 'block_' . rand(10000, 99999),
        'classList' => [],
        'className' => null,
        'path' => $this->path
      ],
      'data' => !empty($args) ? (object) $args : (object) [],
      'template' => 'blocks::' . $this->getId()
    ]);

    $template = $this->path . 'template.blade.php';

    if (file_exists($template) && file_exists(templatePath($template))) {
      $this->loadAssets($data);
      echo template($template, $data);
    }
  }

  /**
   * Parse
   *
   * Function is used for parsing data from ACF fields.
   * The data should be parsed in such way that there
   * would be no need to do more PHP functions in template.
   *
   *  & MC
   * @return array
   */
  private function parse(array $block): array
  {
    $raw = get_field('data');
    $className = trim(array_key_exists('className', $block) ? $block['className'] : '');

    unset($raw['']);

    $data = array(
      'block' => (object) [
        'id' => $block['id'],
        'classList' => !empty($className) ? explode(' ', $className) : [],
        'className' => $className,
        'anchor' => !empty($block['anchor']) ? $block['anchor'] : $block['id']
      ],
      'raw' => !empty($block['data']) ? (object) $block['data'] : (object) [],
      'data' => !empty($raw) ? (object) $raw : (object) [],
      'template' => 'blocks::' . $this->getId()
    );

    return $this->filter($data, $block);
  }

  /**
   * Filter: Data
   *
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

  /**
   * Block assets
   *
   * Function loads assets for specific block. Assets are
   * built as components so each bloch has own assets.
   * If block doesn't exist on the page the system don't
   * load assets.
   *
   *  & MC
   * @return void
   */
  private function loadAssets($data): void
  {
    $version = 'production' !== zkd('env')->get() ? time() : $this->version;

    if ($this->hasAsset('style/public')) {
      wp_enqueue_style('zkd/block-' . $this->getId() . '-public', $this->getAsset('style/public'), is_admin() ? [] : array('zkd/main.css'), $version);
    }
    if ($this->hasAsset('script/public')) {
      wp_enqueue_script('zkd/block-' . $this->getId() . '-public', $this->getAsset('script/public'), is_admin() ? [] : array('zkd/main.js'), $version, true);
      if ($data) {
        wp_localize_script('zkd/block-' . $this->getId() . '-public', $data['block']->id, $data);
      }
    }

    if (is_admin()) {
      if ($this->hasAsset('style/admin')) {
        wp_enqueue_style('zkd/block-' . $this->getId() . '-admin', $this->getAsset('style/admin'), [], $version);
      }
      if ($this->hasAsset('script/admin')) {
        wp_enqueue_script('zkd/block-' . $this->getId() . '-admin', $this->getAsset('script/admin'), [], $version, true);
        if ($data) {
          wp_localize_script('zkd/block-' . $this->getId() . '-admin', $data['block']->id, $data);
        }
      }
    }
  }

  /**
   * Funciton checks if requested asset exists.
   *
   * @param string $path Path to block asset.
   *  & MC
   * @return bool
   */
  public function hasAsset(string $path): bool
  {
    if (!empty($path)) {
      $paths = explode('/', $path);

      $type = !empty($paths[0]) ? $paths[0] : '';
      $asset = !empty($paths[1]) ? $paths[1] : '';

      if (!empty($type) && !empty($asset)) {
        return !empty($this->dependencies[$type][$asset]);
      }

      if (!empty($type)) {
        return !empty($this->dependencies[$type]);
      }
    }

    return false;
  }

  /**
   * Function returns path for requested assets.
   *
   * @param string $path Path to block asset.
   * 
   * @return string
   */
  public function getAsset(string $path): string
  {
    if (!empty($path)) {
      $paths = explode('/', $path);

      $type = !empty($paths[0]) ? $paths[0] : '';
      $asset = !empty($paths[1]) ? $paths[1] : '';

      if (!empty($type) && !empty($asset)) {
        return (string) $this->dependencies[$type][$asset];
      }

      if (!empty($type)) {
        return (string) $this->dependencies[$type];
      }
    }

    return '';
  }

  /**
   * Get: ID
   *
   * 
   * @return string|bool
   */
  public function getId()
  {
    return strtolower(\CaseConverter\CaseString::pascal($this->id)->kebab());
  }

  /**
   * Get: Title
   *
   *  & MC
   * @return string
   */
  public function getTitle(): string
  {
    return $this->title;
  }

  /**
   * Get: Description
   *
   * 
   * @return string
   */
  public function getDescription(): string
  {
    return $this->description;
  }

  /**
   * Get: Manager
   *
   * Function returns manager object.
   *
   * 
   * @return Gutenberg
   */
  public function getManager(): Gutenberg
  {
    return $this->manager;
  }

  /**
   * Function sets the block dependencies. It loads the correct
   * URLI's to script, styles, images, svg.
   *
   * 
   * @return void
   */
  private function setDependencies()
  {
    $base = 'blocks/' . $this->getId();

    $this->dependencies = [
      'style' => [
        'public' => file_exists(assetFile($base . '/public.css')) ? assetPath($base . '/public.css') : '',
        'admin' => file_exists(assetFile($base . '/admin.css')) ? assetPath($base . '/admin.css') : ''
      ],
      'script' => [
        'public' => file_exists(assetFile($base . '/public.js')) ? assetPath($base . '/public.js') : '',
        'admin' => file_exists(assetFile($base . '/admin.js')) ? assetPath($base . '/admin.js') : ''
      ],
      'images' => [],
      'svg' => [],
      'template' => file_exists($this->path . 'template.blade.php') ? templatePath($this->path . 'template.blade.php') : ''
    ];

    if (file_exists($this->path . 'images/')) {
      foreach (scandir($this->path . 'images/') as $file) {
        if (preg_match("#\.(jpe?g|png)$# i", $file)) {
          $this->dependencies['images'][$file] = assetPath($base . '/images/' . $file);
        }
      }
    }

    if (file_exists($this->path . 'svg/')) {
      foreach (scandir($this->path . 'svg/') as $file) {
        if (preg_match("#\.(svg)$# i", $file)) {
          $this->dependencies['svg'][$file] = assetPath($base . '/images/' . $file);
        }
      }
    }
  }

  /**
   * Init Fields
   *
   * Function loads data structure based on ACF fields group.
   * This function is used for generating blocks programatically.
   *
   * 
   * @return void
   */
  private function setFields(): void
  {
    $fields = acf_get_block_fields(array('name' => 'acf/' . strtolower(str_replace('-', '', $this->getId()))));
    if (!empty($fields)) {
      if ('data' === $fields[0]['name']) {
        $parsedFields = $this->parseField($fields[0]);
        if (!empty($parsedFields['data'])) {
          $this->fields = $parsedFields['data'];
        }
      }
    }
  }

  /**
   * Parse Field
   *
   * Function Parses ACF field and creates required data structure.
   *
   * 
   * @return mixed
   */
  private function parseField($field)
  {
    $f = array();

    if (empty($field['sub_fields'])) {
      if (empty($field['value'])) {
        if (!empty($field['default_value'])) {
          if (is_array($field['default_value'])) {
            return reset($field['default_value']);
          }
        }
        return '';
      } else {
        return $field['value'];
      }
    } else {
      foreach ($field['sub_fields'] as $subfield) {
        if ('repeater' === $subfield['type']) {
          $f[$field['name']] = $this->parseField($subfield);
        } elseif ('group' === $subfield['type']) {
          $f[$field['name']][] = $this->parseField($subfield);
        } else {
          $f[$field['name']][$subfield['name']] = $this->parseField($subfield);
        }
      }
    }
    return $f;
  }
}
