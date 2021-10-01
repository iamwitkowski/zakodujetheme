/**
 * Module: Admin Menu
 *
 * 
 */
const adminMenu = (function($) {
  var _menu = $(".order__sortable-js"),
    init = () => {
      if (0 !== _menu.length) {
        $(".order__sortable-js").sortable();
        $(".order__settings-menu-save-js").click(function(e) {
          e.preventDefault();
          _saveOrder();
        });
      }
    },
    _saveOrder = () => {
      var order = [];
      _menu.find("li").each(function(i, obj) {
        order.push($(obj).data("value"));
      });

      $.ajax({
        url: zkd.ajax,
        type: "POST",
        data: {
          action: "save_admin_menu_settings",
          nonce: $("#save_admin_menu_settings").val(),
          clear: $("#order__settings-menu-clear").prop("checked"),
          enable: $("#order__settings-menu-custom").prop("checked"),
          order: order
        }
      })
        .done(function(response) {
          if (response.success) {
            location.reload();
          } else {
          }
        })
        .fail(function(response) {
          console.log(response);
        });
    };
  return {
    init: init
  };
})(jQuery);

export default adminMenu;
