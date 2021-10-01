/**
 * Module: Cookie Bar
 *
 * 
 */
const cookieBar = ( function($) {

  var

    object = $( '.cookie-bar' ),

    init = () => {
      if ( 0 !== object.length ) {
        object.find( '.close' ).click( function() {
          dismissCookieBar( object );
        });
      }
    },

    dismissCookieBar = ( object ) => {
      $.ajax({
        url: zkd.ajax,
        type: 'POST',
        data: {
          action: 'dismiss_cookie_bar'
        }
      }).done( function() {
        object.slideUp( 400, function() {
          $(this).remove();
        });
      }).fail( function( response ) {
        console.log( response );
      });
    }
  ;

  return {
    init: init
  };

}(jQuery) );

export default cookieBar;
