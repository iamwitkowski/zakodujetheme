<?php
/**
 * Module: Post
 *
 */
namespace zkd\Module;

class Post
{
  /**
   * ID
   *
   * @var int
   */
  private $id;

  /**
   * Object
   *
   * @var object
   */
  private $object;

  /**
   * Title
   *
   * @var string
   */
  private $title = '';

  /**
   * Author
   *
   * @var string
   */
  private $author = array();

  /**
   * Anchors
   *
   * @var array
   */
  private $anchors = array();

  /**
   * Categories
   *
   * @var array
   */
  private $categories = array();

  /**
   * Constructor
   *
   * @return void
   */
  public function __construct($id = '') {
    if (!empty($id) && 'post' === get_post_type($id)) {
      $this->id = $id;
      $this->setData($this->id);
    }
  }

  /**
   * WP
   *
   * @action wp
   *
   *
   * @return void
   */
  public function wp() {
    if (is_single() && empty($this->id)) {
      $this->id = get_the_id();
    }

    if (!empty($this->id)) {
      $this->setData($this->id);
    }
  }

  /**
   * Set: Data
   *
   * @return void
   */
  private function setData($id) {
    if (!empty($id)) {
      $this->object = get_post($id);
      $this->title = get_the_title($id);
    }
  }

  /**
   * Set: Author
   *
   * @return void
   */
  public function setAuthor() {
    if( ! empty( $this->object ) && ! empty( $this->object->post_author ) ) {
      $user = get_userdata( $this->object->post_author );

      if ( ! empty( $user ) ) {
        $this->author['name'] = implode( ' ', array( $user->first_name, $user->last_name ) );
        $this->author['description'] = $user->description;
        $this->author['profile_picture'] = wp_get_attachment_image(get_field('profile_pic', 'user_' . $user->ID), 'thumbnail');
      }
    }
  }

  /**
   * Set: Anchors
   *
   * @return void
   */
  private function setAnchors() {
    if ( ! empty( $this->id ) ) {
      $anchors = get_field( 'anchors', $this->id );
      if ( ! empty( $anchors ) ) {
        $this->anchors = array_map(function( $anchor ) {
          return $anchor['anchor'];
        }, $anchors);
      }
    }
  }

	/**
   * Set: Categories
   *
   * @return void
   */
  public function setCategories() {
    if ( ! empty( $this->id ) ) {
      $categories = wp_get_post_categories( $this->id, array(
        'fields' => 'all',
      ) );
      if ( ! empty( $categories ) ) {
        foreach ( $categories as $category ) {
          $this->categories[] = $category;
        }
      }
    }
  }

  /**
   * Get: Author
   *
   * @return array|string
   */
  public function getAuthor( $key = '' ) {
    if ( empty( $this->author ) ) {
      $this->setAuthor();
    }

    if ( ! empty( $key ) ) {
      return ( ! empty( $this->author[ $key ] ) ) ? $this->author[ $key ] : '';
    }

    return $this->author;
  }

  /**
   * Get: Anchors
   *
   * @return array
   */
  public function getAnchors() {
    if ( empty( $this->anchors ) ) {
      $this->setAnchors();
    }

    return $this->anchors;
  }

  /**
   * Get: Categories
   *
   * @return array
   */
  public function getCategories( $format = '' ) {
    if ( empty( $this->categories ) ) {
      $this->setCategories();
    }

    if ( ! empty( $this->categories ) ) {
      switch ( $format ) {
        case 'title':
          $temp = array();
          foreach ( $this->categories as $category ) {
            $temp[] = $category->name;
          }
          return implode( ', ', $temp );
        break;
        case 'link' :
          $temp = array();
          foreach ( $this->categories as $category ) {
            $link = '<a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a>';
            $temp[] = $link;
          }
          return implode(', ', $temp);

      }
    }
    return $this->categories;
  }

  /**
   * Get: Title
   *
   * @return string
   */
  public function getTitle() {
    return $this->title;
  }

  /**
   * Get: Thumbnail
   *
   * @return string
   */
  public function getThumbnail( $size ) {
    if ( ! empty( $this->id ) ) {
      return get_the_post_thumbnail( $this->id, $size );
    }

    return '';
  }

  /**
   * Get: URL
   *
   * @return string
   */
  public function getURL() {
    if ( ! empty( $this->id ) ) {
      return get_the_permalink( $this->id );
    }

    return '';
  }

  /**
   *
   *
   *
   */
  public function getExcerpt() {
    if ( ! empty( $this->id ) ){
      return get_the_excerpt( $this->id );
    }

    return '';
  }

  /**
   *
  */
  public function getCurrentPostTerms($postID = '') {
    if($postID === '') {
      $postID = get_the_id();
    }
    if(class_exists('WPSEO_Primary_Term')) {
      $wpseo_primary_term = new \WPSEO_Primary_Term( 'category', $postID );
      $wpseo_primary_term = $wpseo_primary_term->get_primary_term();
      $term = get_term( $wpseo_primary_term );
    } else {
      $categories = get_the_category();
      $term = $categories[0];
    }

    return $term->term_id;
  }

  /**
   *
   *
   */
  public function getHighlightedPost($termID = '') {
    $args = array(
      'post_type' => 'post',
      'post_status' => 'publish',
      'post__not_in' => array(get_the_id()),
      'category__in' => array($termID),
      'posts_per_page' => 10,
      'oderby' => 'date',
      'order'	=>	'DESC'
    );

    $query = new \WP_Query($args);
    $posts = $query->posts;
    shuffle( $posts );

    return $posts[0];
  }

}
