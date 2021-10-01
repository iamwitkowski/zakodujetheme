<?php
/**
 * Media: WEBP Support
 *
 * @see https://github.com/rosell-dk/webp-convert
 * 
 */
namespace zkd\Module\Media\Submodules;

use WebPConvert\WebPConvert;

class WEBP
{
  /**
   * @var boolean
   */
  private $convertImages = false;

  /**
   * @var array
   */
  private $allowedMimes = [
    'image/jpeg',
    'image/png'
  ];

  public function __construct()
  {
    $this->convertImages = !empty(get_option('options_zkd_module_media_webp_images')) ? true : false;
  }

  /**
   * Function generates the webp file during the upload process.
   *
   * @see https://github.com/rosell-dk/webp-convert/blob/master/docs/v2.0/converting/introduction-for-converting.md
   * @param string $filePath Path to original file in the uploads folder.
   * @return void
   */
  private function convert($filePath): void
  {
    if (!empty($filePath) && $this->shouldGenerate($filePath)) {
      try {
        WebPConvert::convert($filePath, $this->getWebpPath($filePath), []);
      } catch (\Throwable $th) {
        error_log($th);
      }
    }
  }

  /**
   * Function generates the webp file for the original uploaded file.
   *
   * @filter wp_handle_upload 10
   *
   * @see https://developer.wordpress.org/reference/hooks/wp_handle_upload/
   * @param string $filePath Path to original file in the uploads folder.
   * @return array Array of upload data.
   */
  public function handleUpload($fileArray): array
  {
    $this->convert($fileArray['file']);
    return $fileArray;
  }

  /**
   * Function generates the webp files for all of the thumbnail sizes during regeneration.
   *
   * @filter image_make_intermediate_size 10
   *
   * @see https://developer.wordpress.org/reference/hooks/image_make_intermediate_size/
   * @param string $filePath Path to original file in the uploads folder.
   * @return string Name of the file.
   */
  public function handleResizing($fileName): string
  {
    $this->convert($fileName);
    return $fileName;
  }

  /**
   * Function removes the webp files for all the images during rermoving process.
   *
   * @filter wp_delete_file 10
   *
   * @see https://developer.wordpress.org/reference/hooks/wp_delete_file/
   * @param string $filePath Path to original file in the uploads folder.
   * @return string Path to the file to delete.
   */
  public function handleDeleting($filePath): string
  {
    if ($this->shouldRemove($filePath)) {
      unlink($this->getWebpPath($filePath));
    }
    return $filePath;
  }

  /**
   * @param string $filePath Path to original file in the uploads folder.
   */
  private function getWebpPath($filePath): string
  {
    $pathInfo = pathinfo($filePath);

    if ($pathInfo) {
      return str_replace("{$pathInfo['filename']}.{$pathInfo['extension']}", "{$pathInfo['filename']}.webp", $filePath);
    }

    return '';
  }

  /**
   * @param string $filePath Path to original file in the uploads folder.
   */
  private function shouldGenerate($filePath): bool
  {
    return $this->isActive() && $this->isAllowedMimeType($filePath) && file_exists($filePath);
  }

  /**
   * @param string $filePath Path to original file in the uploads folder.
   */
  private function shouldRemove($filePath): bool
  {
    if ($this->isActive() && $this->isAllowedMimeType($filePath)) {
      $webpPath = $this->getWebpPath($filePath);
      return !empty($webpPath) && file_exists($webpPath);
    }
    return false;
  }

  /**
   * @param string $filePath Path to original file in the uploads folder.
   */
  private function isAllowedMimeType($filePath): bool
  {
    return in_array(mime_content_type($filePath), $this->allowedMimes);
  }

  private function isActive(): bool
  {
    return true === $this->convertImages;
  }
}
