<?php

namespace zkd;

use zkd\Init;
use zkd\Core\DocHooks;

if (!function_exists('zkd\\doc')) {
  function doc()
  {
    return DocHooks::get();
  }
}

if (!function_exists('zkd\\zkd')) {
  function zkd(string $moduleName = '')
  {
    $modules = Init::get();
    if ('' === $moduleName) {
      return $modules;
    }
    if (!array_key_exists($moduleName, $modules->public)) {
      throw new \Exception(sprintf('Module %1$s doesn\'t exists!', $moduleName));
    }
    return $modules->public[$moduleName];
  }
}

if (!function_exists('zkd\\createClass')) {
  /**
   * Create instance of Class
   *
   * @see https://gist.github.com/nikic/6390366
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
