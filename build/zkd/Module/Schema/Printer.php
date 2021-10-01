<?php

namespace zkd\Module\Schema;

use function zkd\zkd;

class Printer
{

  /**
   * Schema: Standard
   * Returns schema added from ACF field.
   *
   * 
   * @return string
   */
  public function standard(?string $data): string
  {
    if (empty($data)) {
        return '';
    }
      return '<script type="application/ld+json">'.$data.'</script>';
  }

  /**
   * Schema: Article
   *
   * @see http://schema.org/Article
   *
   * 
   * @return string
   */
  public function article(): string
  {
    if (!is_singular()) {
        return '';
    }
      $thumb = wp_get_attachment_image_src(get_post_thumbnail_id(), 'zkd_medium');
      $args  = apply_filters('zkd_schema_args_article', [
          'publisher_name' => '{website_name}',
          'publisher_logo' => '{website_logo}',
          'url'            => get_the_permalink(),
          'date_published' => get_the_date('c'),
          'date_modified'  => get_the_modified_date('c'),
          'headline'       => get_the_title(),
          'author'         => get_the_author(),
          'image_url'      => (!empty($thumb[0])) ? $thumb[0] : '',
          'image_width'    => (!empty($thumb[1])) ? $thumb[1] : '',
          'image_height'   => (!empty($thumb[2])) ? $thumb[2] : '',
      ]);
      // Add Thumbnail to Schema
      $img_object = '';
    if (!empty($args['image_url'])) {
        $img_object .= ' "image": { "@type": "ImageObject", "url": "'.$args['image_url'].'"';
      if (!empty($args['image_width']) && !empty($args['image_height'])) {
        $img_object .= ', "width": '.$args['image_width'].', "height": '.$args['image_height'].'';
      }
        $img_object .= '},';
    }

      $schema = '<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Article",
            "url": "'.$args['url'].'",
            "publisher": {
                "@type": "Organization",
                "name": "'.$args['publisher_name'].'",
                "logo": {
                    "@type": "ImageObject",
                    "url": "'.$args['publisher_logo'].'"
                }
            },
            "datePublished": "'.$args['date_published'].'",
            "dateModified": "'.$args['date_modified'].'",
            "headline": "'.$args['headline'].'",'.$img_object.'
            "author": "'.$args['author'].'"
        }
        </script>';

      return zkd('schema')->getParsed($schema);
  }

  /**
   * Schema.org: Question
   * @see http://schema.org/Question
   *
   * To-implement:
   * - upvoteCount
   *
   * 
   * @return string
   */
  public function question(array $args): string
  {
    if (empty($args)) {
        return '';
    }
      $schema = '<script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "Question",
                "text": "'.$args['question'].'",
                "dateCreated": "'.$args['date_created'].'",
                "answerCount": "1",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "'.$args['answer'].'",
                        "dateCreated": "'.$args['date_created'].'",
                        "author": {
                                "@type": "Person",
                                "name": "'.$args['author'].'"
                        }
                }
            }
        </script>';
      return $schema;
  }
}
