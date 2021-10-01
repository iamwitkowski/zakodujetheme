<?php
/**
 * Media: Names
 *
 * 
 */
namespace zkd\Module\Media\Submodules;

class Names
{
  /**
   * @var boolean
   */
  private $sanitizeFilenames = false;

  public function __construct()
  {
    $this->sanitizeFilenames = !empty(get_option('options_zkd_module_media_clean_filenames')) ? true : false;
  }

  /**
   * Function sanitises the uploaded filename.
   *
   * @action sanitize_file_name
   *
   * @see https://developer.wordpress.org/reference/functions/remove_accents/
   * @see https://developer.wordpress.org/reference/functions/sanitize_file_name/
   * 
   * @return string
   */
  public function sanitizeFilename($filename): string
  {
    if (true === $this->sanitizeFilenames && $filename) {
      $filename = remove_accents($filename);
      $filename = preg_replace('/[^A-Za-z0-9-\. ]/', '', $filename); // Remove all non-alphanumeric except "."
      $filename = preg_replace('/\.(?=.*\.)/', '', $filename); // Remove all but last "."
      $filename = preg_replace('/-+/', '-', $filename); // Replace any more than one - in a row.
      $filename = str_replace('-.', '.', $filename); // Remove last "-" if at the end.
      $filename = strtolower($filename); // Changes to lowercase.
    }

    return $filename;
  }
}
