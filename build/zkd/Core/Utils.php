<?php
/**
 * Core: Utils
 *
 * Set of usefull functions for theme and development.
 *
 * 
 */
namespace zkd\Core;

class Utils
{
  /**
   * Get: Title
   *
   * 
   * @return string
   */
  public function getTitle(): string
  {
    if (is_home()) {
      if ($home = get_option('page_for_posts', true)) {
        return get_the_title($home);
      }
      return __('Latest Posts', 'zkd');
    }
    if (is_archive()) {
      return get_the_archive_title();
    }
    if (is_search()) {
      return sprintf(__('Search Results for %s', 'zkd'), get_search_query());
    }
    if (is_404()) {
      return __('Not Found', 'zkd');
    }
    return get_the_title();
  }

  /**
   * Checks: Sidebar Activity
   *
   * 
   * @return bool
   */
  public function isSidebarActive(): bool
  {
    $display = true;
    if (is_404() || is_front_page()) {
      $display = false;
    }
    return apply_filters('zkd_display_sidebar', $display);
  }
}
