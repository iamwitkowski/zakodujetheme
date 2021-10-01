<?php
namespace zkd\Admin;

use function App\template;

/**
 * Add possibility to reorder admin menu items.
 *
 * 
 */
class Menu
{
  /**
   * Order: Current
   *
   * @var array
   */
  private $order = array();

  /**
   * Order: Custom
   *
   * @var bool
   */
  private $custom = false;

  /**
   * Set: Options
   *
   * @action wp_loaded
   *
   * 
   * @return void
   */
  public function setOptions(): void
  {
    $order = get_option('zkd_admin_menu_order');
    $custom = get_option('zkd_admin_menu_custom');

    if (!empty($order)) {
      $this->order = $order;
    }

    if (!empty($custom)) {
      $this->custom = $custom;
    }
  }

  /**
   * Set: Menu Order
   *
   * @action menu_order
   *
   * 
   * @return array
   */
  public function setOrder($order): array
  {
    return $this->order;
  }

  /**
   * Set: Submenu
   *
   * @action admin_menu 999
   *
   * 
   * @return void
   */
  public function setPages(): void
  {
    add_submenu_page('theme-settings', 'Admin Menu', 'Admin Menu', 'manage_options', 'admin-menu-settings', [$this, 'setAdminPage']);

    remove_menu_page('edit-comments.php');
  }

  /**
   * Set: Admin Page
   *
   * 
   * @return void
   */
  public function setAdminPage(): void
  {
    global $menu; ?>
      <div class="wrap order__settings order__settings-menu">
        <div class="inner">
          <h1>Admin Menu</h1>

          <p>You can change order of menu items by dragging and dropping elements. In the current implementation after disabling custom order you have to order them again.</p>

          <p>
            <input type="checkbox" id="order__settings-menu-clear" name="order__settings-menu-clear" /><label for="order__settings-menu-clear">Restore menu order</label><br />
            <input type="checkbox" id="order__settings-menu-custom" name="order__settings-menu-custom" <?php echo 'true' === $this->custom ? 'checked' : ''; ?>/><label for="order__settings-menu-custom">Use custom menu order</label>
            <?php wp_nonce_field('save_admin_menu_settings', 'save_admin_menu_settings'); ?>
          </p>

          <p>
              <a href="#" class="page-title-action order__settings-menu-save order__settings-menu-save-js">Save order</a>
          </p>

          <ul class="order__sortable order__sortable-js">
            <?php foreach ($menu as $item) {
              $icon = !empty($item[6]) ? $item[6] : 'dashicons-randomize';
              echo '<li data-value="' . $item[2] . '"><div class="wp-menu-image dashicons-before ' . $icon . '"></div>' . wp_strip_all_tags($item[0]) . '</li>';
            } ?>
          </ul>
        </div>
      </div>
    <?php
  }

  /**
   * Check: Ordering Status
   *
   * @filter custom_menu_order
   *
   * 
   * @return bool
   */
  public function isCustomOrder(): bool
  {
    return 'true' === $this->custom && !empty($this->order);
  }

  /**
   * Ajax: Save Settings
   *
   * @action wp_ajax_save_admin_menu_settings
   * @action wp_ajax_nopriv_save_admin_menu_settings
   *
   * 
   * @return json
   */
  public function saveSettings()
  {
    if (isset($_POST['nonce']) && wp_verify_nonce($_POST['nonce'], 'save_admin_menu_settings')) {
      if (isset($_POST['enable'])) {
        update_option('zkd_admin_menu_custom', $_POST['enable']);
      }

      if (isset($_POST['order'])) {
        update_option('zkd_admin_menu_order', $_POST['order']);
      }

      if (isset($_POST['clear']) && 'true' === $_POST['clear']) {
        update_option('zkd_admin_menu_order', array());
      }

      return wp_send_json_success($_POST);
    }

    return wp_send_json_error('Operation is not allowed!');
  }
}
