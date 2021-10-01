<?php
/**
 * Admin: Notices
 *
 * Class responsible for managing admin notices.
 *
 * 
 */
namespace zkd\Admin;

class Notices
{
  /**
   * Function stores closed notice in DB
   *
   * @action wp_ajax_zkd_close_notice
   *
   * @return void
   */
  public function close(): void
  {
    if (empty($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'zkd_close_notice') || empty($_POST['notice'])) {
      wp_send_json_error('Operation not permitted!' . ' ( zkd_Admin_Notices::close_notice() )');
    } else {
      switch ($_POST['notice']) {
        case 'checklist':
          $result = update_option('zkd_notice_checklist', true);
              break;
      }
      if (!empty($result)) {
        do_action('zkd_after_notice_closing', sanitize_text_field(wp_unslash($_POST['notice'])));
        wp_send_json_success('Notice has been closed');
      } else {
        wp_send_json_error('Notice was not closed!' . ' ( zkd_Admin_Notices::close_notice() )');
      }
    }
    wp_die();
  }

  /**
   * Notice user about foodtrail checklist
   *
   * @action admin_notices
   *
   * @return void
   */
  public function checklist(): void
  {
    if (empty(get_option('zkd_notice_checklist'))) : ?>
      <div id="zkd-notice-checklist" class="notice notice-info is-dismissible">
        <p>
            <b>WordPress has been just installed. Please process checklist <a href="<?php echo get_option('zkd_checklist_url') ?? menu_page_url('theme-settings', false); ?>" target="_blank">here.</a>
        </p>
        <?php $this->printClosingScripts('checklist'); ?>
      </div>
    <?php endif;
  }

  /**
   * Print closing scripts
   *
   * @param string $notice
   * @return void
   */
  private function printClosingScripts(string $notice): void
  {
    ?>
      <script>
        jQuery(function($){
          $(document).ready(function() {
            $( '#zkd-notice-checklist .notice-dismiss' ).click( function( e ) {
              $.ajax( {
                url: ajaxurl,
                type: 'POST',
                data: {
                  action: 'zkd_close_notice',
                  notice: '<?php echo $notice; ?>',
                  nonce: '<?php echo wp_create_nonce('zkd_close_notice'); ?>'
                },
              } )
              .done(function( response ) {
                console.log( response );
              } )
              .fail( function( response ) {
                console.log( response );
              } );
            } );
          });
        });
      </script>
    <?php
  }

  /**
   * Prints information about weak password on production page
   *
   * @action zkd_environment_production_admin_init
   *
   * 
   */
  public function passwordNotice(): void
  {
    add_action('admin_notices', function () {
      $user = wp_get_current_user();
      if (!empty($user) && wp_check_password('test1234', $user->data->user_pass)) : ?>
        <div id="zkd-notice-password" class="notice notice-error">
          <p>
            <b>Production page detected and your password is weak. Please change it <a href="<?php echo get_edit_profile_url(); ?>" target="_blank">here</a>.
          </p>
        </div>
      <?php endif;
    });
  }
}
