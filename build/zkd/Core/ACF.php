<?php
/**
 * Core: ACF
 *
 * This class manages the integration with ACF
 *
 * 
 */
namespace zkd\Core;

use function App\template;

class ACF
{
  /**
   * Create ACF custom options page
   *
   * @action acf/init
   *
   * @see https://www.advancedcustomfields.com/resources/acf_add_options_page/
   * @return void
   */
  public function setOptionsPage(): void
  {
    if (function_exists('acf_add_options_page')) {
      acf_add_options_page(array(
        'page_title' => __('Configuration', 'zkd'),
        'menu_title' => __('Configuration', 'zkd'),
        'menu_slug' => 'theme-settings',
        'capability' => 'manage_options',
        'icon_url' => 'dashicons-list-view',
        'redirect' => false
      ));
    }
  }

  /**
   * Setup ACF local json save path
   *
   * @filter acf/settings/save_json
   *
   * @link https://www.advancedcustomfields.com/resources/local-json/
   *
   * @param string $path
   * @return string
   */
  public function setLocalFieldsSavePoint(string $path): string
  {
    $path = get_stylesheet_directory() . '/fields';
    return $path;
  }

  /**
   * Setup ACF local json load path
   *
   * @filter acf/settings/load_json
   *
   * @link https://www.advancedcustomfields.com/resources/local-json/
   *
   * @param array $paths
   * @return array
   */
  public function setLocalFieldsLoadPoint(array $paths): array
  {
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/fields';
    return $paths;
  }

  /**
   * Setup Google Maps key to be used in backend and frontend components.
   *
   * @_action acf/init
   *
   * @link https://www.advancedcustomfields.com/resources/google-map/
   *
   * @return void
   */
  public function googleMaps(): void
  {
    acf_update_setting('google_api_key', '');
  }
}
