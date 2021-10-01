<?php
/**
 * Theme: Security
 *
 * 
 */
namespace zkd\Theme;

class Security
{
  public function __construct()
  {
    remove_action('wp_head', 'wp_generator');
    remove_action('xmlrpc_rsd_apis', 'rest_output_rsd');
    remove_action('wp_head', 'rest_output_link_wp_head', 10);
    remove_action('template_redirect', 'rest_output_link_header', 11);
  }

  /**
   * Removes displaying WordPress version in some places
   *
   * @filter the_generator
   *
   * @link https://developer.wordpress.org/reference/functions/the_generator/
   *
   * @return boolean
   */
  public function removeGenerator(): bool
  {
    return false;
  }

  /**
   * Removes some HTTP headers before they are send to the browser
   *
   * @filter wp_headers
   *
   * @link https://developer.wordpress.org/reference/hooks/wp_headers/
   *
   * @param array $headers
   * @return array
   */
  public function removeHeaders(array $headers): array
  {
    unset($headers['X-Pingback']);
    return $headers;
  }

  /**
   * Removes REST API endpoints
   *
   * Remove REST API endpoints which are responsible for displaying users
   * to prevent finding out what IDs they have
   *
   * @_filter rest_endpoints
   *
   * @link https://developer.wordpress.org/reference/hooks/rest_endpoints/
   *
   * @param array $endpoints
   * @return array
   */
  public function removeEndpoints(array $endpoints): array
  {
    if (!is_admin()) {
      if (isset($endpoints['/wp/v2/users'])) {
        unset($endpoints['/wp/v2/users']);
      }
      if (isset($endpoints['/wp/v2/users/(?P<id>[\d]+)'])) {
        unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
      }
    }
    return $endpoints;
  }

  /**
   * Function filters the cron request and add the authorisation.
   *
   * @_filter cron_request
   * 
   */
  public function authorizeCron($request)
  {
    if (empty($request['args']['headers']['Authorization'])) {
      $request['args']['headers']['Authorization'] = sprintf('Basic %s', base64_encode('bld:dev'));
    }
    return $request;
  }
}
