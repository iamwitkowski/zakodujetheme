<?php

namespace zkd\Sage;

use Roots\Sage\Config;
use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;

use function App\config;
use function App\sage;

class Setup
{
  public function __construct()
  {
    $this->check();
    $this->filters();
    $this->instance();
  }

  /**
   * Check if environment is ready to take the goodness.
   *
   * 
   * @return void
   */
  private function check(): void
  {
    /**
     * Ensure compatible version of PHP is used
     */
    if (version_compare('7.2', phpversion(), '>=')) {
      $this->error('You must be using PHP 7.2 or greater.', 'Invalid PHP version');
    }
    /**
     * Ensure compatible version of WordPress is used
     */
    if (version_compare(get_bloginfo('version'), '5.2.0', '<=')) {
      $this->error('You must be using WordPress 5.2 or greater.', 'Invalid WordPress version');
    }

    if (!function_exists('acf_get_setting')) {
      $this->error('You must have installed and enabled ACF plugin.', 'Missing ACF plugin');
    }

    /**
     * The mapped array determines the code library included in your theme.
     * Add or remove files to the array as needed. Supports child theme overrides.
     */
    array_map(
        function ($file) {
          $file = "../app/{$file}.php";
          if (!locate_template($file, true, true)) {
            $this->error(sprintf('Error locating <code>%s</code> for inclusion.', $file), 'File not found');
          }
        },
        ['helpers']
    );
  }

  /**
   * Customize wordpress theme default paths.
   *
   * @author sage
   * @return void
   */
  private function filters(): void
  {
    array_map('add_filter', ['theme_file_path', 'theme_file_uri', 'parent_theme_file_path', 'parent_theme_file_uri'], array_fill(0, 4, 'dirname'));
  }

  /**
   * Creates Sage instance.
   *
   * @author sage|PH|MC
   * @return void
   */
  private function instance(): void
  {
    Container::getInstance()->bindIf(
        'config',
        function () {
          return new Config([
            'assets' => [
              'manifest' => get_theme_file_path() . '/dist/mix-manifest.json',
              'uri' => get_theme_file_uri() . '/dist',
              'file' => get_theme_file_path() . '/dist'
            ],
            'theme' => [
              'dir' => get_theme_file_path(),
              'uri' => get_theme_file_uri(),
              'env' => wp_get_environment_type()
            ],
            'view' => [
              'paths' => array(get_theme_file_path() . '/resources/views', get_parent_theme_file_path() . '/resources/views'),
              'compiled' => wp_upload_dir()['basedir'] . '/cache',
              'namespaces' => [
                'blocks' => get_theme_file_path() . '/resources/blocks'
              ]
            ]
          ]);
        },
        true
    );
  }

  /**
   * Initalize Sage dependencies.
   *
   * @action after_setup_theme 1
   *
   * @author sage|PH|MC
   * @return void
   */
  public function init(): void
  {
    // Add JsonManifest to Sage container.
    sage()->singleton('sage.assets', function () {
      return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    // Add Blade to Sage container.
    sage()->singleton('sage.blade', function (Container $app) {
      $cachePath = config('view.compiled');
      if (!file_exists($cachePath)) {
        wp_mkdir_p($cachePath);
      }
      (new BladeProvider($app))->register();
      return new Blade($app['view']);
    });

    // Create @asset() Blade directive.
    sage('blade')
      ->compiler()
      ->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\assetPath({$asset}); ?>";
      });
    // dump(sage());
  }

  /**
   * Helper function for prettying up errors.
   *
   * @param string|null $message
   * @param string $subtitle
   * @param string|null $title
   * @return void
   */
  private function error(?string $message, string $subtitle = '', ?string $title = null): void
  {
    $title = $title ?? 'Theme &rsaquo; Error';
    $message = "<h1>{$title}<br><small>{$subtitle}</small></h1><p>{$message}</p>";
    wp_die($message, $title);
  }
}
