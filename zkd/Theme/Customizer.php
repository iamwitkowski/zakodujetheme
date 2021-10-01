<?php
/**
 * Theme: Customizer
 *
 * Class responsible for managig customizer functionality.
 *
 * 
 */
namespace zkd\Theme;

class Customizer
{
  /**
   * Set: Customizer
   *
   * @action customize_register
   *
   * 
   * @return void
   */
  public function setCustomizer(\WP_Customize_Manager $wp_customize): void
  {
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->selective_refresh->add_partial('blogname', [
      'selector' => '.brand',
      'render_callback' => function () {
        bloginfo('name');
      }
    ]);
  }

  /**
   * Set: Assets
   *
   * @action customize_preview_init
   *
   * 
   * @return void
   */
  public function setAssets(): void
  {
    wp_enqueue_script('sage/customizer.js', \App\assetPath('scripts/customizer.js'), ['customize-preview'], null, true);
  }
}
