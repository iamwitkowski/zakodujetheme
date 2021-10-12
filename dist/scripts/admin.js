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



var hideBlocks = function hideBlocks() {
  wp.domReady(function () {
    console.log(wp);
    wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
      wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
    });
    wp.blocks.getBlockTypes().forEach(function (blockVariation) {
      if (blockVariation.name.indexOf('acf') === 0 || blockVariation.name.indexOf('core/table') === 0 || blockVariation.name.indexOf('core/paragraph') === 0 || blockVariation.name.indexOf('core/heading') === 0 || blockVariation.name.indexOf('core/code') === 0 || blockVariation.name.indexOf('core/html') === 0 || blockVariation.name.indexOf('core/block') === 0) {
        return false;
      } else {
        wp.blocks.unregisterBlockType(blockVariation.name);
      }
    });
  });
};

jQuery(document).ready(function () {
  _components_adminMenu__WEBPACK_IMPORTED_MODULE_0__["default"].init();
  _components_mediaSVG__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  hideBlocks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvYWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL21lZGlhU1ZHLmpzIl0sIm5hbWVzIjpbImhpZGVCbG9ja3MiLCJ3cCIsImRvbVJlYWR5IiwiY29uc29sZSIsImxvZyIsImJsb2NrcyIsImdldEJsb2NrVmFyaWF0aW9ucyIsImZvckVhY2giLCJibG9ja1ZhcmlhdGlvbiIsInVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbiIsIm5hbWUiLCJnZXRCbG9ja1R5cGVzIiwiaW5kZXhPZiIsInVucmVnaXN0ZXJCbG9ja1R5cGUiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiYWRtaW5NZW51IiwiaW5pdCIsIm1lZGlhU1ZHIiwiJCIsIl9tZW51IiwibGVuZ3RoIiwic29ydGFibGUiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl9zYXZlT3JkZXIiLCJvcmRlciIsImZpbmQiLCJlYWNoIiwiaSIsIm9iaiIsInB1c2giLCJkYXRhIiwiYWpheCIsInVybCIsInprZCIsInR5cGUiLCJhY3Rpb24iLCJub25jZSIsInZhbCIsImNsZWFyIiwicHJvcCIsImVuYWJsZSIsImRvbmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJtZWRpYUdyaWRPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJqIiwiYWRkZWROb2RlcyIsImVsZW1lbnQiLCJhdHRyIiwiZWxlbWVudENsYXNzIiwiYXR0YWNobWVudFByZXZpZXciLCJjaGlsZHJlbiIsImhhbmRsZXIiLCJkYXRhVHlwZSIsInRleHQiLCJhdHRhY2htZW50UHJldmlld09ic2VydmVyIiwib25BdHRhY2htZW50UGFnZSIsImhhc0NsYXNzIiwidXJsTGFiZWwiLCJ2YWx1ZSIsIm9ic2VydmUiLCJib2R5IiwiY2hpbGRMaXN0Iiwic3VidHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkMsSUFBRSxDQUFDQyxRQUFILENBQVksWUFBWTtBQUN0QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFJQUEsTUFBRSxDQUFDSSxNQUFILENBQVVDLGtCQUFWLENBQTZCLFlBQTdCLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFVQyxjQUFWLEVBQTBCO0FBQzNFUCxRQUFFLENBQUNJLE1BQUgsQ0FBVUksd0JBQVYsQ0FBbUMsWUFBbkMsRUFBaURELGNBQWMsQ0FBQ0UsSUFBaEU7QUFDRCxLQUZEO0FBTUFULE1BQUUsQ0FBQ0ksTUFBSCxDQUFVTSxhQUFWLEdBQTBCSixPQUExQixDQUFrQyxVQUFVQyxjQUFWLEVBQTBCO0FBQzFELFVBQUlBLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQkUsT0FBcEIsQ0FBNEIsS0FBNUIsTUFBdUMsQ0FBdkMsSUFDQUosY0FBYyxDQUFDRSxJQUFmLENBQW9CRSxPQUFwQixDQUE0QixZQUE1QixNQUE4QyxDQUQ5QyxJQUVBSixjQUFjLENBQUNFLElBQWYsQ0FBb0JFLE9BQXBCLENBQTRCLGdCQUE1QixNQUFrRCxDQUZsRCxJQUdBSixjQUFjLENBQUNFLElBQWYsQ0FBb0JFLE9BQXBCLENBQTRCLGNBQTVCLE1BQWdELENBSGhELElBSUFKLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQkUsT0FBcEIsQ0FBNEIsV0FBNUIsTUFBNkMsQ0FKN0MsSUFLQUosY0FBYyxDQUFDRSxJQUFmLENBQW9CRSxPQUFwQixDQUE0QixXQUE1QixNQUE2QyxDQUw3QyxJQU1BSixjQUFjLENBQUNFLElBQWYsQ0FBb0JFLE9BQXBCLENBQTRCLFlBQTVCLE1BQThDLENBTmxELEVBTXFEO0FBQ25ELGVBQU8sS0FB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QUF1QlksR0FBdkIsRUFBWjtBQUNBZSxtQkFBTyxDQUFDM0IsSUFBUixDQUFhLGdCQUFiLEVBQStCNEIsSUFBL0IsQ0FBb0MsS0FBcEMsRUFBMkNXLEtBQTNDO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRixHQWpCMkIsQ0FyQzlCO0FBQUEsTUF3REVsRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ1hpQyxxQkFBaUIsQ0FBQ2tCLE9BQWxCLENBQTBCdEQsUUFBUSxDQUFDdUQsSUFBbkMsRUFBeUM7QUFDdkNDLGVBQVMsRUFBRSxJQUQ0QjtBQUV2Q0MsYUFBTyxFQUFFO0FBRjhCLEtBQXpDO0FBSUFSLDZCQUF5QixDQUFDSyxPQUExQixDQUFrQ3RELFFBQVEsQ0FBQ3VELElBQTNDLEVBQWlEO0FBQy9DQyxlQUFTLEVBQUUsSUFEb0M7QUFFL0NDLGFBQU8sRUFBRTtBQUZzQyxLQUFqRDtBQUlELEdBakVIOztBQW9FQSxTQUFPO0FBQ0x0RCxRQUFJLEVBQUVBO0FBREQsR0FBUDtBQUlELENBMUVrQixDQTBFakJKLE1BMUVpQixDQUFuQjs7QUE0RWVLLHVFQUFmLEUiLCJmaWxlIjoiL3NjcmlwdHMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRtaW5NZW51IGZyb20gJy4vY29tcG9uZW50cy9hZG1pbk1lbnUnXG5pbXBvcnQgbWVkaWFTVkcgZnJvbSAnLi9jb21wb25lbnRzL21lZGlhU1ZHJ1xuXG5jb25zdCBoaWRlQmxvY2tzID0gKCkgPT4ge1xuICB3cC5kb21SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2cod3ApO1xuXG5cblxuICAgIHdwLmJsb2Nrcy5nZXRCbG9ja1ZhcmlhdGlvbnMoJ2NvcmUvZW1iZWQnKS5mb3JFYWNoKGZ1bmN0aW9uIChibG9ja1ZhcmlhdGlvbikge1xuICAgICAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1ZhcmlhdGlvbignY29yZS9lbWJlZCcsIGJsb2NrVmFyaWF0aW9uLm5hbWUpO1xuICAgIH0pO1xuXG5cblxuICAgIHdwLmJsb2Nrcy5nZXRCbG9ja1R5cGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2tWYXJpYXRpb24pIHtcbiAgICAgIGlmIChibG9ja1ZhcmlhdGlvbi5uYW1lLmluZGV4T2YoJ2FjZicpID09PSAwIHx8XG4gICAgICAgICAgYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdjb3JlL3RhYmxlJykgPT09IDAgfHxcbiAgICAgICAgICBibG9ja1ZhcmlhdGlvbi5uYW1lLmluZGV4T2YoJ2NvcmUvcGFyYWdyYXBoJykgPT09IDAgfHxcbiAgICAgICAgICBibG9ja1ZhcmlhdGlvbi5uYW1lLmluZGV4T2YoJ2NvcmUvaGVhZGluZycpID09PSAwIHx8XG4gICAgICAgICAgYmxvY2tWYXJpYXRpb24ubmFtZS5pbmRleE9mKCdjb3JlL2NvZGUnKSA9PT0gMCB8fFxuICAgICAgICAgIGJsb2NrVmFyaWF0aW9uLm5hbWUuaW5kZXhPZignY29yZS9odG1sJykgPT09IDAgfHxcbiAgICAgICAgICBibG9ja1ZhcmlhdGlvbi5uYW1lLmluZGV4T2YoJ2NvcmUvYmxvY2snKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrVHlwZShibG9ja1ZhcmlhdGlvbi5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGFkbWluTWVudS5pbml0KCk7XG4gIG1lZGlhU1ZHLmluaXQoKTtcblxuXG5cbiAgaGlkZUJsb2NrcygpO1xufSk7XG4iLCIvKipcbiAqIE1vZHVsZTogQWRtaW4gTWVudVxuICpcbiAqIFxuICovXG5jb25zdCBhZG1pbk1lbnUgPSAoZnVuY3Rpb24oJCkge1xuICB2YXIgX21lbnUgPSAkKFwiLm9yZGVyX19zb3J0YWJsZS1qc1wiKSxcbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgaWYgKDAgIT09IF9tZW51Lmxlbmd0aCkge1xuICAgICAgICAkKFwiLm9yZGVyX19zb3J0YWJsZS1qc1wiKS5zb3J0YWJsZSgpO1xuICAgICAgICAkKFwiLm9yZGVyX19zZXR0aW5ncy1tZW51LXNhdmUtanNcIikuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfc2F2ZU9yZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgX3NhdmVPcmRlciA9ICgpID0+IHtcbiAgICAgIHZhciBvcmRlciA9IFtdO1xuICAgICAgX21lbnUuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24oaSwgb2JqKSB7XG4gICAgICAgIG9yZGVyLnB1c2goJChvYmopLmRhdGEoXCJ2YWx1ZVwiKSk7XG4gICAgICB9KTtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB6a2QuYWpheCxcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhY3Rpb246IFwic2F2ZV9hZG1pbl9tZW51X3NldHRpbmdzXCIsXG4gICAgICAgICAgbm9uY2U6ICQoXCIjc2F2ZV9hZG1pbl9tZW51X3NldHRpbmdzXCIpLnZhbCgpLFxuICAgICAgICAgIGNsZWFyOiAkKFwiI29yZGVyX19zZXR0aW5ncy1tZW51LWNsZWFyXCIpLnByb3AoXCJjaGVja2VkXCIpLFxuICAgICAgICAgIGVuYWJsZTogJChcIiNvcmRlcl9fc2V0dGluZ3MtbWVudS1jdXN0b21cIikucHJvcChcImNoZWNrZWRcIiksXG4gICAgICAgICAgb3JkZXI6IG9yZGVyXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZmFpbChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG59KShqUXVlcnkpO1xuXG5leHBvcnQgZGVmYXVsdCBhZG1pbk1lbnU7XG4iLCIvKipcbiAqIE1vZHVsZTogTWVkaWEgU1ZHXG4gKlxuICogXG4gKi9cbmNvbnN0IG1lZGlhU1ZHID0gKCBmdW5jdGlvbigkKSB7XG5cbiAgdmFyXG5cbiAgICBtZWRpYUdyaWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKG11dGF0aW9ucykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJChtdXRhdGlvbnNbaV0uYWRkZWROb2Rlc1tqXSk7XG4gICAgICAgICAgICAgIGlmIChlbGVtZW50LmF0dHIoJ2NsYXNzJykpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50Q2xhc3MgPSBlbGVtZW50LmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5hdHRyKCdjbGFzcycpLmluZGV4T2YoJ2F0dGFjaG1lbnQnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRhY2htZW50UHJldmlldyA9IGVsZW1lbnQuY2hpbGRyZW4oJy5hdHRhY2htZW50LXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0YWNobWVudFByZXZpZXcubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRQcmV2aWV3LmF0dHIoJ2NsYXNzJykuaW5kZXhPZignc3VidHlwZS1zdmcreG1sJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB6a2QuYWpheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb24nOiAnc3ZnX2dldF9hdHRhY2htZW50X3VybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXR0YWNobWVudElEJzogZWxlbWVudC5hdHRyKCdkYXRhLWlkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmZpbGVuYW1lJykudGV4dCgnU1ZHIEltYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG5cbiAgICBhdHRhY2htZW50UHJldmlld09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24obXV0YXRpb25zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbXV0YXRpb25zW2ldLmFkZGVkTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgdmFyIG9uQXR0YWNobWVudFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKChlbGVtZW50Lmhhc0NsYXNzKCdhdHRhY2htZW50LWRldGFpbHMnKSkgfHwgZWxlbWVudC5maW5kKCcuYXR0YWNobWVudC1kZXRhaWxzJykubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgIG9uQXR0YWNobWVudFBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkF0dGFjaG1lbnRQYWdlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB1cmxMYWJlbCA9IGVsZW1lbnQuZmluZCgnbGFiZWxbZGF0YS1zZXR0aW5nPVwidXJsXCJdJyk7XG4gICAgICAgICAgICAgICAgICBpZiAodXJsTGFiZWwubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1cmxMYWJlbC5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZmluZCgnLmRldGFpbHMtaW1hZ2UnKS5hdHRyKCdzcmMnLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG5cbiAgICBpbml0ID0gKCkgPT4ge1xuICAgICAgbWVkaWFHcmlkT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBhdHRhY2htZW50UHJldmlld09ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkgKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVkaWFTVkc7XG4iXSwic291cmNlUm9vdCI6IiJ9