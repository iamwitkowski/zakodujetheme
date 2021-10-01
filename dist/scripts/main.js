(window["zkdStarterWebpackJsonpCallback"] = window["zkdStarterWebpackJsonpCallback"] || []).push([["/scripts/main"],{

/***/ "./resources/assets/scripts/components/cookieBar.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/components/cookieBar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Module: Cookie Bar
 *
 * 
 */
var cookieBar = function ($) {
  var object = $('.cookie-bar'),
      init = function init() {
    if (0 !== object.length) {
      object.find('.close').click(function () {
        dismissCookieBar(object);
      });
    }
  },
      dismissCookieBar = function dismissCookieBar(object) {
    $.ajax({
      url: zkd.ajax,
      type: 'POST',
      data: {
        action: 'dismiss_cookie_bar'
      }
    }).done(function () {
      object.slideUp(400, function () {
        $(this).remove();
      });
    }).fail(function (response) {
      console.log(response);
    });
  };

  return {
    init: init
  };
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (cookieBar);

/***/ }),

/***/ "./resources/assets/scripts/components/navigation.js":
/*!***********************************************************!*\
  !*** ./resources/assets/scripts/components/navigation.js ***!
  \***********************************************************/
/*! exports provided: handleNavigationToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNavigationToggler", function() { return handleNavigationToggler; });
/**
 * Handle the mobile navigation toggler.
 *
 *
 */
var handleNavigationToggler = function handleNavigationToggler() {
  var toggler = document.querySelector('[data-main-navigation-toggler]');
  var menu = document.querySelector('[data-main-navigation-menu]');
  var menuItem = document.querySelector('.site-header__menu li a');

  if (toggler && menu) {
    toggler.addEventListener('click', function (e) {
      toggler.classList.toggle('--active');
      menu.classList.toggle('--active');
    });
  }
};

/***/ }),

/***/ "./resources/assets/scripts/components/utils.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/components/utils.js ***!
  \******************************************************/
/*! exports provided: lightboxGallery, smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightboxGallery", function() { return lightboxGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/**
 * Module: Utils
 *
 *
 */
var lightboxGallery = function lightboxGallery() {
  $('[data-toggle="lightbox"]').click(function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });
};
var smoothScroll = function smoothScroll() {
  $("body").on("click", 'a[href*="#"]', function (e) {
    var hash = this.hash;

    if ("" !== hash && (this.href.split("#").length < 2 || document.location.href.includes(this.href.split("#")[0]))) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/scripts/main.js":
/*!******************************************!*\
  !*** ./resources/assets/scripts/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-event-polyfill */ "./node_modules/custom-event-polyfill/polyfill.js");
/* harmony import */ var custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(custom_event_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_js_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/js/swiper.js */ "./node_modules/swiper/js/swiper.js");
/* harmony import */ var swiper_js_swiper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/Router */ "./resources/assets/scripts/util/Router.js");
/* harmony import */ var _routes_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/common */ "./resources/assets/scripts/routes/common.js");
/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home */ "./resources/assets/scripts/routes/home.js");
/* harmony import */ var _routes_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/about */ "./resources/assets/scripts/routes/about.js");





if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}





var routes = new _util_Router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  common: _routes_common__WEBPACK_IMPORTED_MODULE_5__["default"],
  home: _routes_home__WEBPACK_IMPORTED_MODULE_6__["default"],
  aboutUs: _routes_about__WEBPACK_IMPORTED_MODULE_7__["default"]
});
jQuery(document).ready(function () {
  return routes.loadEvents();
});

/***/ }),

/***/ "./resources/assets/scripts/routes/about.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/routes/about.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// JavaScript to be fired on the about us page
  }
});

/***/ }),

/***/ "./resources/assets/scripts/routes/common.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/routes/common.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cookieBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/cookieBar */ "./resources/assets/scripts/components/cookieBar.js");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ "./resources/assets/scripts/components/navigation.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils */ "./resources/assets/scripts/components/utils.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    _components_cookieBar__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["lightboxGallery"])();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])();
    Object(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["handleNavigationToggler"])();
  },
  finalize: function finalize() {}
});

/***/ }),

/***/ "./resources/assets/scripts/routes/home.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/routes/home.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {},
  finalize: function finalize() {// JavaScript to be fired on the home page, after the init JS
  }
});

/***/ }),

/***/ "./resources/assets/scripts/util/Router.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/util/Router.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camelCase */ "./resources/assets/scripts/util/camelCase.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */

var Router = /*#__PURE__*/function () {
  /**
   * Create a new Router
   * @param {Object} routes
   */
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }
  /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */


  _createClass(Router, [{
    key: "fire",
    value: function fire(route) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var arg = arguments.length > 2 ? arguments[2] : undefined;
      document.dispatchEvent(new CustomEvent('routed', {
        bubbles: true,
        detail: {
          route: route,
          fn: event
        }
      }));
      var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';

      if (fire) {
        this.routes[route][event](arg);
      }
    }
    /**
     * Automatically load and fire Router events
     *
     * Events are fired in the following order:
     *  * common init
     *  * page-specific init
     *  * page-specific finalize
     *  * common finalize
     */

  }, {
    key: "loadEvents",
    value: function loadEvents() {
      var _this = this;

      // Fire common init JS
      this.fire('common'); // Fire page-specific init JS, and then finalize JS

      document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (className) {
        _this.fire(className);

        _this.fire(className, 'finalize');
      }); // Fire common finalize JS

      this.fire('common', 'finalize');
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./resources/assets/scripts/util/camelCase.js":
/*!****************************************************!*\
  !*** ./resources/assets/scripts/util/camelCase.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  return "".concat(str.charAt(0).toLowerCase()).concat(str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return "".concat(part.charAt(0).toUpperCase()).concat(part.slice(1));
  }).join('').slice(1));
});

/***/ }),

/***/ 1:
/*!************************************************!*\
  !*** multi ./resources/assets/scripts/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateuszwitkowski/Local Sites/zakoduje/app/public/wp-content/themes/zakodujetheme/resources/assets/scripts/main.js */"./resources/assets/scripts/main.js");


/***/ })

},[[1,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9yb3V0ZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvdXRpbC9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3V0aWwvY2FtZWxDYXNlLmpzIl0sIm5hbWVzIjpbImNvb2tpZUJhciIsIiQiLCJvYmplY3QiLCJpbml0IiwibGVuZ3RoIiwiZmluZCIsImNsaWNrIiwiZGlzbWlzc0Nvb2tpZUJhciIsImFqYXgiLCJ1cmwiLCJ6a2QiLCJ0eXBlIiwiZGF0YSIsImFjdGlvbiIsImRvbmUiLCJzbGlkZVVwIiwicmVtb3ZlIiwiZmFpbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpRdWVyeSIsImhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyIiwidG9nZ2xlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJtZW51SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibGlnaHRib3hHYWxsZXJ5IiwicHJldmVudERlZmF1bHQiLCJla2tvTGlnaHRib3giLCJzbW9vdGhTY3JvbGwiLCJvbiIsImhhc2giLCJocmVmIiwic3BsaXQiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImVycm9yIiwid2luZG93IiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiQXJyYXkiLCJIVE1MQ29sbGVjdGlvbiIsInJvdXRlcyIsIlJvdXRlciIsImNvbW1vbiIsImhvbWUiLCJhYm91dFVzIiwicmVhZHkiLCJsb2FkRXZlbnRzIiwiZmluYWxpemUiLCJyb3V0ZSIsImV2ZW50IiwiYXJnIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImZuIiwiZmlyZSIsImJvZHkiLCJjbGFzc05hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJtYXAiLCJjYW1lbENhc2UiLCJzdHIiLCJjaGFyQXQiLCJwYXJ0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUssVUFBU0MsQ0FBVCxFQUFZO0FBRTlCLE1BRUVDLE1BQU0sR0FBR0QsQ0FBQyxDQUFFLGFBQUYsQ0FGWjtBQUFBLE1BSUVFLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDWCxRQUFLLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBbEIsRUFBMkI7QUFDekJGLFlBQU0sQ0FBQ0csSUFBUCxDQUFhLFFBQWIsRUFBd0JDLEtBQXhCLENBQStCLFlBQVc7QUFDeENDLHdCQUFnQixDQUFFTCxNQUFGLENBQWhCO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FWSDtBQUFBLE1BWUVLLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBRUwsTUFBRixFQUFjO0FBQy9CRCxLQUFDLENBQUNPLElBQUYsQ0FBTztBQUNMQyxTQUFHLEVBQUVDLEdBQUcsQ0FBQ0YsSUFESjtBQUVM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SSxDQUFDRixJQUFMLENBQVVFLFNBQVY7O0FBQ0EsYUFBSSxDQUFDRixJQUFMLENBQVVFLFNBQVYsRUFBcUIsVUFBckI7QUFDRCxPQVJILEVBTFcsQ0FlWDs7QUFDQSxXQUFLRixJQUFMLENBQVUsUUFBVixFQUFvQixVQUFwQjtBQUNEOzs7Ozs7QUFHWWYscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHlFQUFBc0IsR0FBRztBQUFBLG1CQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWNMLFdBQWQsRUFBUCxTQUFxQ0ksR0FBRyxDQUFDSCxPQUFKLENBQVksUUFBWixFQUFzQixHQUF0QixFQUEyQmxDLEtBQTNCLENBQWlDLEdBQWpDLEVBQ3BEbUMsR0FEb0QsQ0FDaEQsVUFBQUksSUFBSTtBQUFBLHFCQUFPQSxJQUFJLENBQUNELE1BQUwsQ0FBWSxDQUFaLEVBQWVFLFdBQWYsRUFBUCxTQUFzQ0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsQ0FBWCxDQUF0QztBQUFBLEdBRDRDLEVBRXBEQyxJQUZvRCxDQUUvQyxFQUYrQyxFQUdwREQsS0FIb0QsQ0FHOUMsQ0FIOEMsQ0FBckM7QUFBQSxDQUFsQixFIiwiZmlsZSI6Ii9zY3JpcHRzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZHVsZTogQ29va2llIEJhclxuICpcbiAqIFxuICovXG5jb25zdCBjb29raWVCYXIgPSAoIGZ1bmN0aW9uKCQpIHtcblxuICB2YXJcblxuICAgIG9iamVjdCA9ICQoICcuY29va2llLWJhcicgKSxcblxuICAgIGluaXQgPSAoKSA9PiB7XG4gICAgICBpZiAoIDAgIT09IG9iamVjdC5sZW5ndGggKSB7XG4gICAgICAgIG9iamVjdC5maW5kKCAnLmNsb3NlJyApLmNsaWNrKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkaXNtaXNzQ29va2llQmFyKCBvYmplY3QgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRpc21pc3NDb29raWVCYXIgPSAoIG9iamVjdCApID0+IHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogemtkLmFqYXgsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGFjdGlvbjogJ2Rpc21pc3NfY29va2llX2JhcidcbiAgICAgICAgfVxuICAgICAgfSkuZG9uZSggZnVuY3Rpb24oKSB7XG4gICAgICAgIG9iamVjdC5zbGlkZVVwKCA0MDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuZmFpbCggZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuICAgICAgICBjb25zb2xlLmxvZyggcmVzcG9uc2UgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdDogaW5pdFxuICB9O1xuXG59KGpRdWVyeSkgKTtcblxuZXhwb3J0IGRlZmF1bHQgY29va2llQmFyO1xuIiwiLyoqXG4gKiBIYW5kbGUgdGhlIG1vYmlsZSBuYXZpZ2F0aW9uIHRvZ2dsZXIuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyID0gKCkgPT4ge1xuICBjb25zdCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbWFpbi1uYXZpZ2F0aW9uLXRvZ2dsZXJdJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tYWluLW5hdmlnYXRpb24tbWVudV0nKTtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX21lbnUgbGkgYScpO1xuXG4gIGlmICh0b2dnbGVyICYmIG1lbnUpIHtcbiAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgXG4gIH1cbn07XG4iLCIvKipcbiAqIE1vZHVsZTogVXRpbHNcbiAqXG4gKlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodGJveEdhbGxlcnkgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwibGlnaHRib3hcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuZWtrb0xpZ2h0Ym94KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNtb290aFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICdhW2hyZWYqPVwiI1wiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoO1xuICAgIGlmIChcbiAgICAgIFwiXCIgIT09IGhhc2ggJiZcbiAgICAgICh0aGlzLmhyZWYuc3BsaXQoXCIjXCIpLmxlbmd0aCA8IDIgfHxcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZi5pbmNsdWRlcyh0aGlzLmhyZWYuc3BsaXQoXCIjXCIpWzBdKSlcbiAgICApIHtcbiAgICAgIC8vZG8gdGhpcyBvbmx5IGlmIHRoZSBocmVmICh3aXRob3V0IGhhc2gpIGNvbnRhaW5zIGN1cnJlbnQgbG9jYXRpb24gb3IgaXMgY29udGFpbnMganVzdCB0aGUgaGFzaCBpdHNlbGZcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGNhdGNoIGVycm9yIHdoZW4gdG9wIGlzIG51bGxcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIjtcbmltcG9ydCBcImNvcmUtanMvc3RhYmxlXCI7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlci9qcy9zd2lwZXIuanNcIjtcblxuaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbn1cblxuaWYgKHdpbmRvdy5IVE1MQ29sbGVjdGlvbiAmJiAhSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbn1cblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi91dGlsL1JvdXRlclwiO1xuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9yb3V0ZXMvY29tbW9uXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9yb3V0ZXMvaG9tZVwiO1xuaW1wb3J0IGFib3V0VXMgZnJvbSBcIi4vcm91dGVzL2Fib3V0XCI7XG5cbmNvbnN0IHJvdXRlcyA9IG5ldyBSb3V0ZXIoe1xuICBjb21tb24sXG4gIGhvbWUsXG4gIGFib3V0VXNcbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHJvdXRlcy5sb2FkRXZlbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbml0KCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGFib3V0IHVzIHBhZ2VcbiAgfSxcbn07XG4iLCJpbXBvcnQgY29va2llQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2Nvb2tpZUJhclwiO1xuaW1wb3J0IHsgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBsaWdodGJveEdhbGxlcnksIHNtb290aFNjcm9sbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHtcbiAgICBjb29raWVCYXIuaW5pdCgpO1xuICAgIGxpZ2h0Ym94R2FsbGVyeSgpO1xuICAgIHNtb290aFNjcm9sbCgpO1xuICAgIGhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyKCk7XG4gIH0sXG4gIGZpbmFsaXplKCkge31cbn07XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHtcblxuXG4gIH0sXG4gIGZpbmFsaXplKCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGhvbWUgcGFnZSwgYWZ0ZXIgdGhlIGluaXQgSlNcbiAgfSxcbn07XG4iLCJpbXBvcnQgY2FtZWxDYXNlIGZyb20gJy4vY2FtZWxDYXNlJztcblxuLyoqXG4gKiBET00tYmFzZWQgUm91dGluZ1xuICpcbiAqIEJhc2VkIG9uIHtAbGluayBodHRwOi8vZ29vLmdsL0VVVGk1M3xNYXJrdXAtYmFzZWQgVW5vYnRydXNpdmUgQ29tcHJlaGVuc2l2ZSBET00tcmVhZHkgRXhlY3V0aW9ufSBieSBQYXVsIElyaXNoXG4gKlxuICogVGhlIHJvdXRpbmcgZmlyZXMgYWxsIGNvbW1vbiBzY3JpcHRzLCBmb2xsb3dlZCBieSB0aGUgcGFnZSBzcGVjaWZpYyBzY3JpcHRzLlxuICogQWRkIGFkZGl0aW9uYWwgZXZlbnRzIGZvciBtb3JlIGNvbnRyb2wgb3ZlciB0aW1pbmcgZS5nLiBhIGZpbmFsaXplIGV2ZW50XG4gKi9cbmNsYXNzIFJvdXRlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBSb3V0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm91dGVzKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBSb3V0ZXIgZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBET00tYmFzZWQgcm91dGUgZGVyaXZlZCBmcm9tIGJvZHkgY2xhc3NlcyAoYDxib2R5IGNsYXNzPVwiLi4uXCI+YClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gRXZlbnRzIG9uIHRoZSByb3V0ZS4gQnkgZGVmYXVsdCwgYGluaXRgIGFuZCBgZmluYWxpemVgIGV2ZW50cyBhcmUgY2FsbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FyZ10gQW55IGN1c3RvbSBhcmd1bWVudCB0byBiZSBwYXNzZWQgdG8gdGhlIGV2ZW50LlxuICAgKi9cbiAgZmlyZShyb3V0ZSwgZXZlbnQgPSAnaW5pdCcsIGFyZykge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb3V0ZWQnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICBmbjogZXZlbnQsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBcbiAgICBjb25zdCBmaXJlID0gcm91dGUgIT09ICcnICYmIHRoaXMucm91dGVzW3JvdXRlXSAmJiB0eXBlb2YgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoZmlyZSkge1xuICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XShhcmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGxvYWQgYW5kIGZpcmUgUm91dGVyIGV2ZW50c1xuICAgKlxuICAgKiBFdmVudHMgYXJlIGZpcmVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gICAqICAqIGNvbW1vbiBpbml0XG4gICAqICAqIHBhZ2Utc3BlY2lmaWMgaW5pdFxuICAgKiAgKiBwYWdlLXNwZWNpZmljIGZpbmFsaXplXG4gICAqICAqIGNvbW1vbiBmaW5hbGl6ZVxuICAgKi9cbiAgbG9hZEV2ZW50cygpIHtcbiAgICAvLyBGaXJlIGNvbW1vbiBpbml0IEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nKTtcblxuICAgIC8vIEZpcmUgcGFnZS1zcGVjaWZpYyBpbml0IEpTLCBhbmQgdGhlbiBmaW5hbGl6ZSBKU1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoLy0vZywgJ18nKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC5tYXAoY2FtZWxDYXNlKVxuICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5maXJlKGNsYXNzTmFtZSwgJ2ZpbmFsaXplJyk7XG4gICAgICB9KTtcblxuICAgIC8vIEZpcmUgY29tbW9uIGZpbmFsaXplIEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nLCAnZmluYWxpemUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCIvKipcbiAqIHRoZSBtb3N0IHRlcnJpYmxlIGNhbWVsaXplciBvbiB0aGUgaW50ZXJuZXQsIGd1YXJhbnRlZWQhXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0aGF0IGlzbid0IGNhbWVsLWNhc2UsIGUuZy4sIENBTWVMX0NhU0VpUy1oYXJEXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyBjb252ZXJ0ZWQgdG8gY2FtZWwtY2FzZSwgZS5nLiwgY2FtZWxDYXNlSXNIYXJkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCl9JHtzdHIucmVwbGFjZSgvW1xcV19dL2csICd8Jykuc3BsaXQoJ3wnKVxuICAubWFwKHBhcnQgPT4gYCR7cGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3BhcnQuc2xpY2UoMSl9YClcbiAgLmpvaW4oJycpXG4gIC5zbGljZSgxKX1gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==