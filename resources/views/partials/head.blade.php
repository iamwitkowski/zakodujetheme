<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  @php wp_head() @endphp
  @php do_action( 'zkd_before_closing_head_tag' ); @endphp
	
	<!-- Facebook Opengraph -->
<meta property="fb:app_id" content="966242223397117" />
    <meta property="og:url" content="<?php the_permalink() ?>"/>
<?php if (is_single()) { ?>
    <meta property="og:title" content="<?php single_post_title(''); ?>" />
    <meta property="og:description" content="<?php echo strip_tags(get_the_excerpt($post->ID)); ?>" />
    <meta property="og:type" content="article" />
	<?php if ( has_post_thumbnail() ) { ?>
    	<meta property="og:image" content="<?php echo wp_get_attachment_thumb_url( get_post_thumbnail_id( $post->ID ), 'full', false ) ?>" />
	<?php } else { ?>
		<meta property="og:image" content="<?php bloginfo('template_url') ?>/path/to-your/logo.jpg" />
	<?php } ?>
<?php } else { ?>
    <meta property="og:site_name" content="<?php bloginfo('name'); ?>" />
    <meta property="og:description" content="<?php bloginfo('description'); ?>" />
    <meta property="og:type" content="website" />
   
<?php } ?>

</head>
