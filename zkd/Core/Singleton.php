<?php
/**
 * Core: Singleton
 *
 * 
 */
namespace zkd\Core;

abstract class Singleton
{
  /**
   * Instances
   *
   * @var array
   */
  protected static $instances = array();

  /**
   * Constructor
   */
  protected function __construct()
  {
  }

  /**
   * __clone
   */
  protected function __clone()
  {
  }

  /**
   * __wakeup function
   * @throws Exception If cannot unserialize singleton.
   */
  public function __wakeup()
  {
    throw new Exception('Cannot unserialize singleton');
  }

  /**
   * Get: Object
   *
   * @return object
   */
  public static function get()
  {
    $class = get_called_class();
    if (!isset(self::$instances[$class])) {
      self::$instances[$class] = new static();
    }
    return self::$instances[$class];
  }
}
