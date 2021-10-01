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


jQuery(document).ready(function () {
  _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__["default"].init();
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

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/assets/scripts/admin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateuszwitkowski/Local Sites/zakoduje/app/public/wp-content/themes/zakodujetheme/resources/assets/scripts/admin.js */"./resources/assets/scripts/admin.js");


/***/ })

},[[2,"/scripts/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvYWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL21lZGlhU1ZHLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJhZG1pbk1lbnUiLCJpbml0IiwibWVkaWFTVkciLCIkIiwiX21lbnUiLCJsZW5ndGgiLCJzb3J0YWJsZSIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3NhdmVPcmRlciIsIm9yZGVyIiwiZmluZCIsImVhY2giLCJpIiwib2JqIiwicHVzaCIsImRhdGEiLCJhamF4IiwidXJsIiwiemtkIiwidHlwZSIsImFjdGlvbiIsIm5vbmNlIiwidmFsIiwiY2xlYXIiLCJwcm9wIiwiZW5hYmxlIiwiZG9uZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYUdyaWRPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJqIiwiYWRkZWROb2RlcyIsImVsZW1lbnQiLCJhdHRyIiwiZWxlbWVudENsYXNzIiwiaW5kZXhPZiIsImF0dGFjaG1lbnRQcmV2aWV3IiwiY2hpbGRyZW4iLCJoYW5kbGVyIiwiZGF0YVR5cGUiLCJ0ZXh0IiwiYXR0YWNobWVudFByZXZpZXdPYnNlcnZlciIsIm9uQXR0YWNobWVudFBhZ2UiLCJoYXNDbGFzcyIsInVybExhYmVsIiwidmFsdWUiLCJvYnNlcnZlIiwiYm9keSIsImNoaWxkTGlzdCIsInN1YnRyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLE1BQU0sQ0FBRUMsUUFBRixDQUFOLENBQW1CQyxL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QUFDWG1DLHFCQUFpQixDQUFDbUIsT0FBbEIsQ0FBMEJ6RCxRQUFRLENBQUMwRCxJQUFuQyxFQUF5QztBQUN2Q0MsZUFBUyxFQUFFLElBRDRCO0FBRXZDQyxhQUFPLEVBQUU7QUFGOEIsS0FBekM7QUFJQVIsNkJBQXlCLENBQUNLLE9BQTFCLENBQWtDekQsUUFBUSxDQUFDMEQsSUFBM0MsRUFBaUQ7QUFDL0NDLGVBQVMsRUFBRSxJQURvQztBQUUvQ0MsYUFBTyxFQUFFO0FBRnNDLEtBQWpEO0FBSUQsR0FqRUg7O0FBb0VBLFNBQU87QUFDTHpELFFBQUksRUFBRUE7QUFERCxHQUFQO0FBSUQsQ0ExRWtCLENBMEVqQkosTUExRWlCLENBQW5COztBQTRFZUssdUVBQWYsRSIsImZpbGUiOiIvc2NyaXB0cy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbk1lbnUgZnJvbSAnLi9jb21wb25lbnRzL2FkbWluTWVudSdcbmltcG9ydCBtZWRpYVNWRyBmcm9tICcuL2NvbXBvbmVudHMvbWVkaWFTVkcnXG5cbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oKSB7XG4gIGFkbWluTWVudS5pbml0KCk7XG4gIG1lZGlhU1ZHLmluaXQoKTtcbn0pO1xuIiwiLyoqXG4gKiBNb2R1bGU6IEFkbWluIE1lbnVcbiAqXG4gKiBcbiAqL1xuY29uc3QgYWRtaW5NZW51ID0gKGZ1bmN0aW9uKCQpIHtcbiAgdmFyIF9tZW51ID0gJChcIi5vcmRlcl9fc29ydGFibGUtanNcIiksXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgIGlmICgwICE9PSBfbWVudS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi5vcmRlcl9fc29ydGFibGUtanNcIikuc29ydGFibGUoKTtcbiAgICAgICAgJChcIi5vcmRlcl9fc2V0dGluZ3MtbWVudS1zYXZlLWpzXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3NhdmVPcmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9zYXZlT3JkZXIgPSAoKSA9PiB7XG4gICAgICB2YXIgb3JkZXIgPSBbXTtcbiAgICAgIF9tZW51LmZpbmQoXCJsaVwiKS5lYWNoKGZ1bmN0aW9uKGksIG9iaikge1xuICAgICAgICBvcmRlci5wdXNoKCQob2JqKS5kYXRhKFwidmFsdWVcIikpO1xuICAgICAgfSk7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogemtkLmFqYXgsXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWN0aW9uOiBcInNhdmVfYWRtaW5fbWVudV9zZXR0aW5nc1wiLFxuICAgICAgICAgIG5vbmNlOiAkKFwiI3NhdmVfYWRtaW5fbWVudV9zZXR0aW5nc1wiKS52YWwoKSxcbiAgICAgICAgICBjbGVhcjogJChcIiNvcmRlcl9fc2V0dGluZ3MtbWVudS1jbGVhclwiKS5wcm9wKFwiY2hlY2tlZFwiKSxcbiAgICAgICAgICBlbmFibGU6ICQoXCIjb3JkZXJfX3NldHRpbmdzLW1lbnUtY3VzdG9tXCIpLnByb3AoXCJjaGVja2VkXCIpLFxuICAgICAgICAgIG9yZGVyOiBvcmRlclxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xufSkoalF1ZXJ5KTtcblxuZXhwb3J0IGRlZmF1bHQgYWRtaW5NZW51O1xuIiwiLyoqXG4gKiBNb2R1bGU6IE1lZGlhIFNWR1xuICpcbiAqIFxuICovXG5jb25zdCBtZWRpYVNWRyA9ICggZnVuY3Rpb24oJCkge1xuXG4gIHZhclxuXG4gICAgbWVkaWFHcmlkT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXV0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtdXRhdGlvbnNbaV0uYWRkZWROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQobXV0YXRpb25zW2ldLmFkZGVkTm9kZXNbal0pO1xuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdjbGFzcycpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudENsYXNzID0gZWxlbWVudC5hdHRyKCdjbGFzcycpO1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuYXR0cignY2xhc3MnKS5pbmRleE9mKCdhdHRhY2htZW50JykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0YWNobWVudFByZXZpZXcgPSBlbGVtZW50LmNoaWxkcmVuKCcuYXR0YWNobWVudC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRQcmV2aWV3Lmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2htZW50UHJldmlldy5hdHRyKCdjbGFzcycpLmluZGV4T2YoJ3N1YnR5cGUtc3ZnK3htbCcpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogemtkLmFqYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogJ3N2Z19nZXRfYXR0YWNobWVudF91cmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0dGFjaG1lbnRJRCc6IGVsZW1lbnQuYXR0cignZGF0YS1pZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5maWxlbmFtZScpLnRleHQoJ1NWRyBJbWFnZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgYXR0YWNobWVudFByZXZpZXdPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlc1tqXSk7XG4gICAgICAgICAgICAgIHZhciBvbkF0dGFjaG1lbnRQYWdlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmICgoZWxlbWVudC5oYXNDbGFzcygnYXR0YWNobWVudC1kZXRhaWxzJykpIHx8IGVsZW1lbnQuZmluZCgnLmF0dGFjaG1lbnQtZGV0YWlscycpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICBvbkF0dGFjaG1lbnRQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25BdHRhY2htZW50UGFnZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdXJsTGFiZWwgPSBlbGVtZW50LmZpbmQoJ2xhYmVsW2RhdGEtc2V0dGluZz1cInVybFwiXScpO1xuICAgICAgICAgICAgICAgICAgaWYgKHVybExhYmVsLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdXJsTGFiZWwuZmluZCgnaW5wdXQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5kZXRhaWxzLWltYWdlJykuYXR0cignc3JjJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgIG1lZGlhR3JpZE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgYXR0YWNobWVudFByZXZpZXdPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIDtcblxuICByZXR1cm4ge1xuICAgIGluaXQ6IGluaXRcbiAgfTtcblxufShqUXVlcnkpICk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lZGlhU1ZHO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==