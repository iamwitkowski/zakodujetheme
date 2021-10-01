<?php
/**
 * Theme: Settings
 *
 * 
 */
namespace zkd\Theme;

class Settings
{
  /**
   * Function prints code before closing head tag
   * Uses Theme Oprtions ACF Page
   *
   * @action zkd_before_closing_head_tag
   *
   * @author author
   * @return void
   */
  public function printCodeBeforeClosingHeadTag(): void
  {
    $code = get_field('s_integration_before_head_closing', 'options');
    if (!empty($code)) {
      echo $code;
    }
  }

  /**
   * Function prints code after opening head tag
   * Uses Theme Oprtions ACF Page
   *
   * @action zkd_after_opening_body_tag
   *
   * @author author
   * @return void
   */
  public function printCodeAfterOpeningBodyTag(): void
  {
    $code = get_field('s_integration_after_body_opening', 'options');
    if (!empty($code)) {
      echo $code;
    }
  }

  /**
   * Function prints code after opening head tag
   * Uses Theme Oprtions ACF Page
   *
   * @action zkd_before_closing_body_tag
   *
   * @author author
   * @return void
   */
  public function printCodeBeforeClosingBodyTag(): void
  {
    $code = get_field('s_integration_before_body_closing', 'options');
    if (!empty($code)) {
      echo $code;
    }
  }
}
