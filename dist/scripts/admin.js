(window["zkdStarterWebpackJsonpCallback"] = window["zkdStarterWebpackJsonpCallback"] || []).push([["/scripts/admin"],{

/***/ "./resources/assets/scripts/admin.js":
/*!*******************************************!*\
  !*** ./resources/assets/scripts/admin.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/adminMenu */ "./resources/assets/scripts/components/adminMenu.js");
/* harmony import */ var _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mediaSVG */ "./resources/assets/scripts/components/mediaSVG.js");


/*const hideBlocks = () => {
  wp.domReady(function () {
    console.log(wp);



    wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    });



    wp.blocks.getBlockTypes().forEach(function (blockVariation) {
      if (blockVariation.name.indexOf('acf') === 0 ||
          blockVariation.name.indexOf('core/table') === 0 ||
          blockVariation.name.indexOf('core/paragraph') === 0 ||
          blockVariation.name.indexOf('core/heading') === 0 ||
          blockVariation.name.indexOf('core/code') === 0 ||
          blockVariation.name.indexOf('core/html') === 0 ||
          blockVariation.name.indexOf('core/block') === 0) {
        return false;
      } else {
        wp.blocks.unregisterBlockType(blockVariation.name);
      }
    });
  });
};

*/

jQuery(document).ready(function () {
  _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__["default"].init(); //  hideBlocks();
});

/***/ }),

/***/ "./resources/assets/scripts/components/adminMenu.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/components/adminMenu.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Admin Menu
 *
 * 
 */
var adminMenu = function ($) {
  var _menu = $(".order__sortable-js"),
      init = function init() {
    if (0 !== _menu.length) {
      $(".order__sortable-js").sortable();
      $(".order__settings-menu-save-js").click(function (e) {
        e.preventDefault();

        _saveOrder();
      });
    }
  },
      _saveOrder = function _saveOrder() {
    var order = [];

    _menu.find("li").each(function (i, obj) {
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
    }).done(function (response) {
      if (response.success) {
        location.reload();
      } else {}
    }).fail(function (response) {
      console.log(response);
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (adminMenu);

/***/ }),

/***/ "./resources/assets/scripts/components/mediaSVG.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/mediaSVG.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Media SVG
 *
 * 
 */
var mediaSVG = function ($) {
  var mediaGridObserver = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var element = $(mutations[i].addedNodes[j]);

        if (element.attr('class')) {
          var elementClass = element.attr('class');

          if (element.attr('class').indexOf('attachment') != -1) {
            var attachmentPreview = element.children('.attachment-preview');

            if (attachmentPreview.length != 0) {
              if (attachmentPreview.attr('class').indexOf('subtype-svg+xml') != -1) {
                var handler = function (element) {
                  jQuery.ajax({
                    url: zkd.ajax,
                    type: "POST",
                    dataType: 'html',
                    data: {
                      'action': 'svg_get_attachment_url',
                      'attachmentID': element.attr('data-id')
                    },
                    success: function success(data) {
                      if (data) {
                        element.find('img').attr('src', data);
                        element.find('.filename').text('SVG Image');
                      }
                    }
                  });
                }(element);
              }
            }
          }
        }
      }
    }
  }),
      attachmentPreviewObserver = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var element = $(mutations[i].addedNodes[j]);
        var onAttachmentPage = false;

        if (element.hasClass('attachment-details') || element.find('.attachment-details').length != 0) {
          onAttachmentPage = true;
        }

        if (onAttachmentPage == true) {
          var urlLabel = element.find('label[data-setting="url"]');

          if (urlLabel.length != 0) {
            var value = urlLabel.find('input').val();
            element.find('.details-image').attr('src', value);
          }
        }
      }
    }
  }),
      init = function init() {
    mediaGridObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    attachmentPreviewObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (mediaSVG);

/***/ }),

/***/ 3:
/*!*************************************************!*\
  !*** multi ./resources/assets/scripts/admin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateuszwitkowski/Local Sites/zakoduje/app/public/wp-content/themes/zakodujetheme/resources/assets/scripts/admin.js */"./resources/assets/scripts/admin.js");


/***/ })

},[[3,"/scripts/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvYWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL21lZGlhU1ZHLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJhZG1pbk1lbnUiLCJpbml0IiwibWVkaWFTVkciLCIkIiwiX21lbnUiLCJsZW5ndGgiLCJzb3J0YWJsZSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NhdmVPcmRlciIsIm9yZGVyIiwiZmluZCIsImVhY2giLCJpIiwib2JqIiwicHVzaCIsImRhdGEiLCJhamF4IiwidXJsIiwiemtkIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlIiwidmFsIiwiY2xlYXIiLCJwcm9wIiwiZW5hYmxlIiwiZG9uZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYUdyaWRPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJqIiwiYWRkZWROb2RlcyIsImVsZW1lbnQiLCJhdHRyIiwiZWxlbWVudENsYXNzIiwiaW5kZXhPZiIsImF0dGFjaG1lbnRQcmV2aWV3IiwiY2hpbGRyZW4iLCJoYW5kbGVyIiwiZGF0YVR5cGUiLCJ0ZXh0IiwiYXR0YWNobWVudFByZXZpZXdPYnNlcnZlciIsIm9uQXR0YWNobWVudFBhZ2UiLCJoYXNDbGFzcyIsInVybExhYmVsIiwidmFsdWUiLCJvYnNlcnZlIiwiYm9keSIsImNoaWxkTGlzdCIsInN1YnRyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEVBQVo7QUFDQWlCLG1CQUFPLENBQUM3QixJQUFSLENBQWEsZ0JBQWIsRUFBK0I4QixJQUEvQixDQUFvQyxLQUFwQyxFQUEyQ1ksS0FBM0M7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNGLEdBakIyQixDQXJDOUI7QUFBQSxNQXdERXJELElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDWG1DLHFCQUFpQixDQUFDbUIsT0FBbEIsQ0FBMEJ6RCxRQUFRLENBQUMwRCxJQUFuQyxFQUF5QztBQUN2Q0MsZUFBUyxFQUFFLElBRDRCO0FBRXZDQyxhQUFPLEVBQUU7QUFGOEIsS0FBekM7QUFJQVIsNkJBQXlCLENBQUNLLE9BQTFCLENBQWtDekQsUUFBUSxDQUFDMEQsSUFBM0MsRUFBaUQ7QUFDL0NDLGVBQVMsRUFBRSxJQURvQztBQUUvQ0MsYUFBTyxFQUFFO0FBRnNDLEtBQWpEO0FBSUQsR0FqRUg7O0FBb0VBLFNBQU87QUFDTHpELFFBQUksRUFBRUE7QUFERCxHQUFQO0FBSUQsQ0ExRWtCLENBMEVqQkosTUExRWlCLENBQW5COztBQTRFZUssdUVBQWYsRSIsImZpbGUiOiIvc2NyaXB0cy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbk1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluTWVudSdcbmltcG9ydCBtZWRpYVNWRyBmcm9tICcuL2NvbXBvbmVudHMvbWVkaWFTVkcnXG5cbi8qY29uc3QgaGlkZUJsb2NrcyA9ICgpID0+IHtcbiAgd3AuZG9tUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKHdwKTtcblxuXG5cbiAgICB3cC5ibG9ja3MuZ2V0QmxvY2tWYXJpYXRpb25zKCdjb3JlL2VtYmVkJykuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tWYXJpYXRpb24pIHtcbiAgICAgIHdwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tWYXJpYXRpb24oJ2NvcmUvZW1iZWQnLCBibG9ja1ZhcmlhdGlvbi5uYW1lKTtcbiAgICB9KTtcblxuXG5cbiAgICB3cC5ibG9ja3MuZ2V0QmxvY2tUeXBlcygpLmZvckVhY2goZnVuY3Rpb24gKGJsb2NrVmFyaWF0aW9uKSB7XG4gICAgICBpZiAoYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdhY2YnKSA9PT0gMCB8fFxuICAgICAgICAgIGJsb2NrVmFyaWF0aW9uLm5hbWUuaW5kZXhPZignY29yZS90YWJsZScpID09PSAwIHx8XG4gICAgICAgICAgYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdjb3JlL3BhcmFncmFwaCcpID09PSAwIHx8XG4gICAgICAgICAgYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdjb3JlL2hlYWRpbmcnKSA9PT0gMCB8fFxuICAgICAgICAgIGJsb2NrVmFyaWF0aW9uLm5hbWUuaW5kZXhPZignY29yZS9jb2RlJykgPT09IDAgfHxcbiAgICAgICAgICBibG9ja1ZhcmlhdGlvbi5uYW1lLmluZGV4T2YoJ2NvcmUvaHRtbCcpID09PSAwIHx8XG4gICAgICAgICAgYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdjb3JlL2Jsb2NrJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1R5cGUoYmxvY2tWYXJpYXRpb24ubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuKi9cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGFkbWluTWVudS5pbml0KCk7XG4gIG1lZGlhU1ZHLmluaXQoKTtcblxuXG5cbi8vICBoaWRlQmxvY2tzKCk7XG59KTtcbiIsIi8qKlxuICogTW9kdWxlOiBBZG1pbiBNZW51XG4gKlxuICogXG4gKi9cbmNvbnN0IGFkbWluTWVudSA9IChmdW5jdGlvbigkKSB7XG4gIHZhciBfbWVudSA9ICQoXCIub3JkZXJfX3NvcnRhYmxlLWpzXCIpLFxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoMCAhPT0gX21lbnUubGVuZ3RoKSB7XG4gICAgICAgICQoXCIub3JkZXJfX3NvcnRhYmxlLWpzXCIpLnNvcnRhYmxlKCk7XG4gICAgICAgICQoXCIub3JkZXJfX3NldHRpbmdzLW1lbnUtc2F2ZS1qc1wiKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF9zYXZlT3JkZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfc2F2ZU9yZGVyID0gKCkgPT4ge1xuICAgICAgdmFyIG9yZGVyID0gW107XG4gICAgICBfbWVudS5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbihpLCBvYmopIHtcbiAgICAgICAgb3JkZXIucHVzaCgkKG9iaikuZGF0YShcInZhbHVlXCIpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IHprZC5hamF4LFxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGFjdGlvbjogXCJzYXZlX2FkbWluX21lbnVfc2V0dGluZ3NcIixcbiAgICAgICAgICBub25jZTogJChcIiNzYXZlX2FkbWluX21lbnVfc2V0dGluZ3NcIikudmFsKCksXG4gICAgICAgICAgY2xlYXI6ICQoXCIjb3JkZXJfX3NldHRpbmdzLW1lbnUtY2xlYXJcIikucHJvcChcImNoZWNrZWRcIiksXG4gICAgICAgICAgZW5hYmxlOiAkKFwiI29yZGVyX19zZXR0aW5ncy1tZW51LWN1c3RvbVwiKS5wcm9wKFwiY2hlY2tlZFwiKSxcbiAgICAgICAgICBvcmRlcjogb3JkZXJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRcbiAgfTtcbn0pKGpRdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFkbWluTWVudTtcbiIsIi8qKlxuICogTW9kdWxlOiBNZWRpYSBTVkdcbiAqXG4gKiBcbiAqL1xuY29uc3QgbWVkaWFTVkcgPSAoIGZ1bmN0aW9uKCQpIHtcblxuICB2YXJcblxuICAgIG1lZGlhR3JpZE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignY2xhc3MnKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRDbGFzcyA9IGVsZW1lbnQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoJ2NsYXNzJykuaW5kZXhPZignYXR0YWNobWVudCcpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dGFjaG1lbnRQcmV2aWV3ID0gZWxlbWVudC5jaGlsZHJlbignLmF0dGFjaG1lbnQtcHJldmlldycpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2htZW50UHJldmlldy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNobWVudFByZXZpZXcuYXR0cignY2xhc3MnKS5pbmRleE9mKCdzdWJ0eXBlLXN2Zyt4bWwnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHprZC5hamF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdzdmdfZ2V0X2F0dGFjaG1lbnRfdXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdHRhY2htZW50SUQnOiBlbGVtZW50LmF0dHIoJ2RhdGEtaWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnaW1nJykuYXR0cignc3JjJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZmlsZW5hbWUnKS50ZXh0KCdTVkcgSW1hZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIGF0dGFjaG1lbnRQcmV2aWV3T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQobXV0YXRpb25zW2ldLmFkZGVkTm9kZXNbal0pO1xuICAgICAgICAgICAgICB2YXIgb25BdHRhY2htZW50UGFnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQuaGFzQ2xhc3MoJ2F0dGFjaG1lbnQtZGV0YWlscycpKSB8fCBlbGVtZW50LmZpbmQoJy5hdHRhY2htZW50LWRldGFpbHMnKS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgb25BdHRhY2htZW50UGFnZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQXR0YWNobWVudFBhZ2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHVybExhYmVsID0gZWxlbWVudC5maW5kKCdsYWJlbFtkYXRhLXNldHRpbmc9XCJ1cmxcIl0nKTtcbiAgICAgICAgICAgICAgICAgIGlmICh1cmxMYWJlbC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVybExhYmVsLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCcuZGV0YWlscy1pbWFnZScpLmF0dHIoJ3NyYycsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICBtZWRpYUdyaWRPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGF0dGFjaG1lbnRQcmV2aWV3T2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICA7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG5cbn0oalF1ZXJ5KSApO1xuXG5leHBvcnQgZGVmYXVsdCBtZWRpYVNWRztcbiJdLCJzb3VyY2VSb290IjoiIn0=