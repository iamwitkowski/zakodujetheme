<?php
namespace zkd\Admin;

use function App\template;

/**
 * Class responsible for managing Dashboard section
 *
 * 
 */
class Dashboard
{
  public function __construct()
  {
    remove_action('welcome_panel', 'wp_welcome_panel');
  }

  /**
   * Display custom welcome message
   *
   * @action welcome_panel
   *
   * @return void
   */
  public function setWelcomePanel(): void
  {
    echo template('admin.welcome');
  }
}
