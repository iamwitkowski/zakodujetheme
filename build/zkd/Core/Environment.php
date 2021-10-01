<?php

namespace zkd\Core;

use function App\config;

/**
 * Detecting the current environment. Use zkd_environment_{$type}_init
 * action to run functions based on environment.
 *
 * 
 */
class Environment
{
  /**
   * Type of current environment
   *
   * @var string
   */
  private $type;

  /**
   * List of plugins that should be disabled on staging environment
   *
   * @var array
   */
  private $restrictedStagingPlugins = ['cache-enabler/cache-enabler.php', 'autoptimize/autoptimize.php'];

  public function __construct()
  {
    $this->set();
  }

  /**
   * Looks for value which is set in the zkd\Sage\Setup::instance() method
   *
   * @return void
   */
  private function set(): void
  {
    $config = config('theme');
    $this->type = $config['env'];
  }

  /**
   * Return current environment type
   *
   * @return string
   */
  public function get(): string
  {
    return $this->type;
  }

  /**
   * Do function attached to event based on current environment type
   *
   * To add function please use zkd_environment_{$type}_init hook
   *
   * @action wp
   * @action admin_init
   *
   * @return void
   */
  public function doActions(): void
  {
    switch ($this->get()) {
      case 'development':
        if (is_admin()) {
          do_action('zkd_environment_development_admin_init');
        } else {
          do_action('zkd_environment_development_init');
        }
            break;
      case 'staging':
        if (is_admin()) {
          do_action('zkd_environment_staging_admin_init');
        } else {
          do_action('zkd_environment_staging_init');
        }
            break;
      case 'production':
        if (is_admin()) {
          do_action('zkd_environment_production_admin_init');
        } else {
          do_action('zkd_environment_production_init');
        }
            break;
    }
  }
}
