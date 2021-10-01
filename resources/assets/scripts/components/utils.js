/**
 * Module: Utils
 *
 *
 */

export const lightboxGallery = function() {
  $('[data-toggle="lightbox"]').click(function(e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
};

export const smoothScroll = function() {
  $("body").on("click", 'a[href*="#"]', function(e) {
    const hash = this.hash;
    if (
      "" !== hash &&
      (this.href.split("#").length < 2 ||
        document.location.href.includes(this.href.split("#")[0]))
    ) {
      //do this only if the href (without hash) contains current location or is contains just the hash itself
      e.preventDefault();

      try {
        $("html, body").animate({
          scrollTop: $(hash).offset().top - 100
        });
      } catch (error) {
        // catch error when top is null
        console.error(error);
      }
    }
  });
};
