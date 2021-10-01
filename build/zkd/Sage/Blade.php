<?php

namespace zkd\Sage;

use function App\sage;
use function App\template;
use function App\locate_template;

class Blade
{
  public function __construct()
  {
    $this->templateHierarchy();
  }

  /**
   * Render page using blade templates.
   *
   * @filter template_include 9999
   *
   * @author sage|PH|MC
   * @return string
   */
  public function render($template): string
  {
    collect(['get_header', 'wp_head'])->each(function ($tag) {
      ob_start();
      do_action($tag);
      $output = ob_get_clean();
      remove_all_actions($tag);
      add_action($tag, function () use ($output) {
        echo $output;
      });
    });
    $data = collect(get_body_class())->reduce(function ($data, $class) use ($template) {
      return apply_filters("sage/template/{$class}/data", $data, $template);
    }, []);
    if ($template) {
      echo template($template, $data);
      return get_stylesheet_directory() . '/index.php';
    }
    return $template;
  }

  /**
   * Render comments using balde templates.
   *
   * @filter comments_template 100
   *
   * @author sage|PH|MC
   * @return string
   */
  public function renderComments($template): string
  {
    $template = str_replace([get_stylesheet_directory(), get_template_directory()], '', $template);

    $data = collect(get_body_class())->reduce(function ($data, $class) use ($template) {
      return apply_filters("sage/template/{$class}/data", $data, $template);
    }, []);

    $theme_template = locate_template(["views/{$template}", $template]);

    if ($theme_template) {
      echo template($theme_template, $data);
      return get_stylesheet_directory() . '/index.php';
    }

    return $template;
  }

  /**
   * Add additional <body> classes.
   *
   * @action body_class
   *
   * @param array $classes
   * @return array
   */
  public function setBodyClass(array $classes): array
  {
    /** Add page slug if it doesn't exist */
    if (is_single() || is_page() && !is_front_page()) {
      if (!in_array(basename(get_permalink()), $classes)) {
        $classes[] = basename(get_permalink());
      }
    }

    /** Clean up class names for custom templates */
    $classes = array_map(function ($class) {
      return preg_replace(['/-blade(-php)?$/', '/^page-template-views/'], '', $class);
    }, $classes);

    return array_filter($classes);
  }

  /**
   * Template Hierarchy should search for .blade.php files
   *
   * @return void
   */
  public function templateHierarchy(): void
  {
    collect(['index', '404', 'archive', 'author', 'category', 'tag', 'taxonomy', 'date', 'home', 'frontpage', 'page', 'paged', 'search', 'single', 'singular', 'attachment', 'embed'])->map(function ($type) {
      add_filter("{$type}_template_hierarchy", [$this, 'filterTemplates']);
    });
  }

  /**
   * Filter through possible blade template files.
   *
   * @param string|string[] $templates Possible template files
   * @return array
   */
  public static function filterTemplates($templates): array
  {
    $paths = apply_filters('sage/filter_templates/paths', ['views', 'resources/views']);
    $paths_pattern = "#^(" . implode('|', $paths) . ")/#";

    return collect($templates)
      ->map(function ($template) use ($paths_pattern) {
        /** Remove .blade.php/.blade/.php from template names */
        $template = preg_replace('#\.(blade\.?)?(php)?$#', '', ltrim($template));

        /** Remove partial $paths from the beginning of template names */
        if (strpos($template, '/')) {
          $template = preg_replace($paths_pattern, '', $template);
        }

        return $template;
      })
      ->flatMap(function ($template) use ($paths) {
        return collect($paths)
          ->flatMap(function ($path) use ($template) {
            return ["{$path}/{$template}.blade.php", "{$path}/{$template}.php"];
          })
          ->concat(["{$template}.blade.php", "{$template}.php"]);
      })
      ->filter()
      ->unique()
      ->all();
  }

  /**
   * Configure default path for @svg directive.
   *
   * @filter bladesvg
   *
   * 
   * @package BladeSvgSage
   * @return array
   */
  public function svg(): array
  {
    return [
      'svg_path' => 'resources/assets/svg',
      'inline' => true,
      'class' => ''
    ];
  }

  /**
   * Updates the `$post` variable on each iteration of the loop.
   * Note: updated value is only available for subsequently loaded views, such as partials.
   *
   * @action the_post
   *
   * 
   * @return void
   */
  public function sharePost(\WP_Post $post): void
  {
    sage('blade')->share('post', $post);
  }
}
