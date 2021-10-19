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

  if (toggler && menu) {
    toggler.addEventListener('click', function (e) {
      toggler.classList.toggle('--active');
      menu.classList.toggle('--active');
    });
  }
};

/***/ }),

/***/ "./resources/assets/scripts/components/slider.js":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/components/slider.js ***!
  \*******************************************************/
/*! exports provided: featuredSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuredSlider", function() { return featuredSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var featuredSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.featured .swiper-container'), {
  slidesPerView: 'auto',
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

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
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slider */ "./resources/assets/scripts/components/slider.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    _components_cookieBar__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["lightboxGallery"])();
    Object(_components_utils__WEBPACK_IMPORTED_MODULE_2__["smoothScroll"])();
    Object(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["handleNavigationToggler"])();
    _components_slider__WEBPACK_IMPORTED_MODULE_3__["featuredSlider"].init();
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

/***/ 2:
/*!************************************************!*\
  !*** multi ./resources/assets/scripts/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateuszwitkowski/Local Sites/zakoduje/app/public/wp-content/themes/zakodujetheme/resources/assets/scripts/main.js */"./resources/assets/scripts/main.js");


/***/ })

},[[2,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3JvdXRlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3V0aWwvUm91dGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy91dGlsL2NhbWVsQ2FzZS5qcyJdLCJuYW1lcyI6WyJjb29raWVCYXIiLCIkIiwib2JqZWN0IiwiaW5pdCIsImxlbmd0aCIsImZpbmQiLCJjbGljayIsImRpc21pc3NDb29raWVCYXIiLCJhamF4IiwidXJsIiwiemtkIiwidHlwZSIsImRhdGEiLCJhY3Rpb24iLCJkb25lIiwic2xpZGVVcCIsInJlbW92ZSIsImZhaWwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiLCJoYW5kbGVOYXZpZ2F0aW9uVG9nZ2xlciIsInRvZ2dsZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmZWF0dXJlZFNsaWRlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiYXV0b3BsYXkiLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibGlnaHRib3hHYWxsZXJ5IiwicHJldmVudERlZmF1bHQiLCJla2tvTGlnaHRib3giLCJzbW9vdGhTY3JvbGwiLCJvbiIsImhhc2giLCJocmVmIiwic3BsaXQiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImVycm9yIiwid2luZG93IiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiQXJyYXkiLCJIVE1MQ29sbGVjdGlvbiIsInJvdXRlcyIsIlJvdXRlciIsImNvbW1vbiIsImhvbWUiLCJhYm91dFVzIiwicmVhZHkiLCJsb2FkRXZlbnRzIiwiZmluYWxpemUiLCJyb3V0ZSIsImV2ZW50IiwiYXJnIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImZuIiwiZmlyZSIsImJvZHkiLCJjbGFzc05hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJtYXAiLCJjYW1lbENhc2UiLCJzdHIiLCJjaGFyQXQiLCJwYXJ0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUssVUFBU0MsQ0FBVCxFQUFZO0FBRTlCLE1BRUVDLE1BQU0sR0FBR0QsQ0FBQyxDQUFFLGFBQUYsQ0FGWjtBQUFBLE1BSUVFLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDWCxRQUFLLE1BQU1ELE1BQU0sQ0FBQ0UsTUFBbEIsRUFBMkI7QUFDekJGLFlBQU0sQ0FBQ0csSUFBUCxDQUFhLFFBQWIsRUFBd0JDLEtBQXhCLENBQStCLFlBQVc7QUFDeENDLHdCQUFnQixDQUFF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Rm9ELENBRS9DLEVBRitDLEVBR3BERCxLQUhvRCxDQUc5QyxDQUg4QyxDQUFyQztBQUFBLENBQWxCLEUiLCJmaWxlIjoiL3NjcmlwdHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlOiBDb29raWUgQmFyXG4gKlxuICogXG4gKi9cbmNvbnN0IGNvb2tpZUJhciA9ICggZnVuY3Rpb24oJCkge1xuXG4gIHZhclxuXG4gICAgb2JqZWN0ID0gJCggJy5jb29raWUtYmFyJyApLFxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgIGlmICggMCAhPT0gb2JqZWN0Lmxlbmd0aCApIHtcbiAgICAgICAgb2JqZWN0LmZpbmQoICcuY2xvc2UnICkuY2xpY2soIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc21pc3NDb29raWVCYXIoIG9iamVjdCApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzbWlzc0Nvb2tpZUJhciA9ICggb2JqZWN0ICkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB6a2QuYWpheCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWN0aW9uOiAnZGlzbWlzc19jb29raWVfYmFyJ1xuICAgICAgICB9XG4gICAgICB9KS5kb25lKCBmdW5jdGlvbigpIHtcbiAgICAgICAgb2JqZWN0LnNsaWRlVXAoIDQwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5mYWlsKCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xuICAgICAgfSk7XG4gICAgfVxuICA7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG5cbn0oalF1ZXJ5KSApO1xuXG5leHBvcnQgZGVmYXVsdCBjb29raWVCYXI7XG4iLCIvKipcbiAqIEhhbmRsZSB0aGUgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xlci5cbiAqXG4gKlxuICovXG5leHBvcnQgY29uc3QgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tYWluLW5hdmlnYXRpb24tdG9nZ2xlcl0nKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1haW4tbmF2aWdhdGlvbi1tZW51XScpO1xuXG4gIGlmICh0b2dnbGVyICYmIG1lbnUpIHtcbiAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgfVxufTtcbiIsImltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlclwiO1xuXG5leHBvcnQgY29uc3QgZmVhdHVyZWRTbGlkZXIgPSBuZXcgU3dpcGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWF0dXJlZCAuc3dpcGVyLWNvbnRhaW5lcicpLCB7XG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgbG9vcDogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG59KTtcbiIsIi8qKlxuICogTW9kdWxlOiBVdGlsc1xuICpcbiAqXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Ym94R2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS10b2dnbGU9XCJsaWdodGJveFwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCh0aGlzKS5la2tvTGlnaHRib3goKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc21vb3RoU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJ2FbaHJlZio9XCIjXCJdJywgZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IGhhc2ggPSB0aGlzLmhhc2g7XG4gICAgaWYgKFxuICAgICAgXCJcIiAhPT0gaGFzaCAmJlxuICAgICAgKHRoaXMuaHJlZi5zcGxpdChcIiNcIikubGVuZ3RoIDwgMiB8fFxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKHRoaXMuaHJlZi5zcGxpdChcIiNcIilbMF0pKVxuICAgICkge1xuICAgICAgLy9kbyB0aGlzIG9ubHkgaWYgdGhlIGhyZWYgKHdpdGhvdXQgaGFzaCkgY29udGFpbnMgY3VycmVudCBsb2NhdGlvbiBvciBpcyBjb250YWlucyBqdXN0IHRoZSBoYXNoIGl0c2VsZlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICQoaGFzaCkub2Zmc2V0KCkudG9wIC0gMTAwXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gY2F0Y2ggZXJyb3Igd2hlbiB0b3AgaXMgbnVsbFxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCBcImN1c3RvbS1ldmVudC1wb2x5ZmlsbFwiO1xuaW1wb3J0IFwiY29yZS1qcy9zdGFibGVcIjtcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuaW1wb3J0IFN3aXBlciBmcm9tIFwic3dpcGVyL2pzL3N3aXBlci5qc1wiO1xuXG5pZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xufVxuXG5pZiAod2luZG93LkhUTUxDb2xsZWN0aW9uICYmICFIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZm9yRWFjaCkge1xuICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xufVxuXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL3V0aWwvUm91dGVyXCI7XG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL3JvdXRlcy9jb21tb25cIjtcbmltcG9ydCBob21lIGZyb20gXCIuL3JvdXRlcy9ob21lXCI7XG5pbXBvcnQgYWJvdXRVcyBmcm9tIFwiLi9yb3V0ZXMvYWJvdXRcIjtcblxuY29uc3Qgcm91dGVzID0gbmV3IFJvdXRlcih7XG4gIGNvbW1vbixcbiAgaG9tZSxcbiAgYWJvdXRVc1xufSk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoKCkgPT4gcm91dGVzLmxvYWRFdmVudHMoKSk7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQoKSB7XG4gICAgLy8gSmF2YVNjcmlwdCB0byBiZSBmaXJlZCBvbiB0aGUgYWJvdXQgdXMgcGFnZVxuICB9LFxufTtcbiIsImltcG9ydCBjb29raWVCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29va2llQmFyXCI7XG5pbXBvcnQgeyBoYW5kbGVOYXZpZ2F0aW9uVG9nZ2xlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGxpZ2h0Ym94R2FsbGVyeSwgc21vb3RoU2Nyb2xsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHNcIjtcbmltcG9ydCB7IGZlYXR1cmVkU2xpZGVyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zbGlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0KCkge1xuICAgIGNvb2tpZUJhci5pbml0KCk7XG4gICAgbGlnaHRib3hHYWxsZXJ5KCk7XG4gICAgc21vb3RoU2Nyb2xsKCk7XG4gICAgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIoKTtcbiAgICBmZWF0dXJlZFNsaWRlci5pbml0KCk7XG4gIH0sXG4gIGZpbmFsaXplKCkge31cbn07XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHtcblxuXG4gIH0sXG4gIGZpbmFsaXplKCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGhvbWUgcGFnZSwgYWZ0ZXIgdGhlIGluaXQgSlNcbiAgfSxcbn07XG4iLCJpbXBvcnQgY2FtZWxDYXNlIGZyb20gJy4vY2FtZWxDYXNlJztcblxuLyoqXG4gKiBET00tYmFzZWQgUm91dGluZ1xuICpcbiAqIEJhc2VkIG9uIHtAbGluayBodHRwOi8vZ29vLmdsL0VVVGk1M3xNYXJrdXAtYmFzZWQgVW5vYnRydXNpdmUgQ29tcHJlaGVuc2l2ZSBET00tcmVhZHkgRXhlY3V0aW9ufSBieSBQYXVsIElyaXNoXG4gKlxuICogVGhlIHJvdXRpbmcgZmlyZXMgYWxsIGNvbW1vbiBzY3JpcHRzLCBmb2xsb3dlZCBieSB0aGUgcGFnZSBzcGVjaWZpYyBzY3JpcHRzLlxuICogQWRkIGFkZGl0aW9uYWwgZXZlbnRzIGZvciBtb3JlIGNvbnRyb2wgb3ZlciB0aW1pbmcgZS5nLiBhIGZpbmFsaXplIGV2ZW50XG4gKi9cbmNsYXNzIFJvdXRlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBSb3V0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm91dGVzKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBSb3V0ZXIgZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBET00tYmFzZWQgcm91dGUgZGVyaXZlZCBmcm9tIGJvZHkgY2xhc3NlcyAoYDxib2R5IGNsYXNzPVwiLi4uXCI+YClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gRXZlbnRzIG9uIHRoZSByb3V0ZS4gQnkgZGVmYXVsdCwgYGluaXRgIGFuZCBgZmluYWxpemVgIGV2ZW50cyBhcmUgY2FsbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FyZ10gQW55IGN1c3RvbSBhcmd1bWVudCB0byBiZSBwYXNzZWQgdG8gdGhlIGV2ZW50LlxuICAgKi9cbiAgZmlyZShyb3V0ZSwgZXZlbnQgPSAnaW5pdCcsIGFyZykge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb3V0ZWQnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICBmbjogZXZlbnQsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBcbiAgICBjb25zdCBmaXJlID0gcm91dGUgIT09ICcnICYmIHRoaXMucm91dGVzW3JvdXRlXSAmJiB0eXBlb2YgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoZmlyZSkge1xuICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XShhcmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGxvYWQgYW5kIGZpcmUgUm91dGVyIGV2ZW50c1xuICAgKlxuICAgKiBFdmVudHMgYXJlIGZpcmVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gICAqICAqIGNvbW1vbiBpbml0XG4gICAqICAqIHBhZ2Utc3BlY2lmaWMgaW5pdFxuICAgKiAgKiBwYWdlLXNwZWNpZmljIGZpbmFsaXplXG4gICAqICAqIGNvbW1vbiBmaW5hbGl6ZVxuICAgKi9cbiAgbG9hZEV2ZW50cygpIHtcbiAgICAvLyBGaXJlIGNvbW1vbiBpbml0IEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nKTtcblxuICAgIC8vIEZpcmUgcGFnZS1zcGVjaWZpYyBpbml0IEpTLCBhbmQgdGhlbiBmaW5hbGl6ZSBKU1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoLy0vZywgJ18nKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC5tYXAoY2FtZWxDYXNlKVxuICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5maXJlKGNsYXNzTmFtZSwgJ2ZpbmFsaXplJyk7XG4gICAgICB9KTtcblxuICAgIC8vIEZpcmUgY29tbW9uIGZpbmFsaXplIEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nLCAnZmluYWxpemUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCIvKipcbiAqIHRoZSBtb3N0IHRlcnJpYmxlIGNhbWVsaXplciBvbiB0aGUgaW50ZXJuZXQsIGd1YXJhbnRlZWQhXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0aGF0IGlzbid0IGNhbWVsLWNhc2UsIGUuZy4sIENBTWVMX0NhU0VpUy1oYXJEXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyBjb252ZXJ0ZWQgdG8gY2FtZWwtY2FzZSwgZS5nLiwgY2FtZWxDYXNlSXNIYXJkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCl9JHtzdHIucmVwbGFjZSgvW1xcV19dL2csICd8Jykuc3BsaXQoJ3wnKVxuICAubWFwKHBhcnQgPT4gYCR7cGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3BhcnQuc2xpY2UoMSl9YClcbiAgLmpvaW4oJycpXG4gIC5zbGljZSgxKX1gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==