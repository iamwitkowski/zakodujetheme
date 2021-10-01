<?php
require dirname(__DIR__, 2) . '/vendor/autoload.php';

if (!function_exists('doc') && function_exists('zkd\\doc')) {
  /**
   * Initialize doc() function.
   *
   * @return object
   */
  function doc(): object
  {
    return zkd\doc();
  }
}

if (!function_exists('zkd') && function_exists('zkd\\zkd')) {
  /**
   * Initialize zkd() function.
   *
   * @param string $moduleName
   * @return object
   */
  function zkd(string $moduleName = ''): object
  {
    return zkd\zkd($moduleName);
  }
}

if (!function_exists('createClass') && function_exists('zkd\\createClass')) {
  /**
   * Initialize createClass() function.
   *
   * @param string $class
   * @param array $params
   * @return object
   */
  function createClass(string $class, array $params = array()): object
  {
    $object = new $class(...$params);
    doc()->addDocHooks($object);
    return $object;
  }
}

doc();
zkd();
