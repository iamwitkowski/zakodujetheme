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

  window.addEventListener("scroll", changeMenu);

  function changeMenu() {
    var y = window.scrollY;

    if (y >= 150) {
      document.querySelector(".site-header").classList.add("stick");
    }

    if (y <= 150) {
      document.querySelector(".site-header").classList.remove("stick");
    }
  }

  window.addEventListener("scroll", showSticky);

  function showSticky() {
    var y = window.scrollY;

    if (y >= 500) {
      document.querySelector(".single-header-sticky").style.top = "50px";
    } else {
      document.querySelector(".single-header-sticky").style.top = "-100px";
    }
  }

  var processScroll = function processScroll() {
    var docElem = document.documentElement,
        docBody = document.body,
        scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
        scrollPercent = scrollTop / scrollBottom * 100 + '%'; // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

    document.querySelector(".single-header-sticky__progressbar").style.setProperty("--scrollAmount", scrollPercent);
  };

  document.addEventListener('scroll', processScroll);
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

/***/ 7:
/*!************************************************!*\
  !*** multi ./resources/assets/scripts/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mateuszwitkowski/Local Sites/zakoduje/app/public/wp-content/themes/zakodujetheme/resources/assets/scripts/main.js */"./resources/assets/scripts/main.js");


/***/ })

},[[7,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jb29raWVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3JvdXRlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcm91dGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL3V0aWwvUm91dGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy91dGlsL2NhbWVsQ2FzZS5qcyJdLCJuYW1lcyI6WyJjb29raWVCYXIiLCIkIiwib2JqZWN0IiwiaW5pdCIsImxlbmd0aCIsImZpbmQiLCJjbGljayIsImRpc21pc3NDb29raWVCYXIiLCJhamF4IiwidXJsIiwiemtkIiwidHlwZSIsImRhdGEiLCJhY3Rpb24iLCJkb25lIiwic2xpZGVVcCIsInJlbW92ZSIsImZhaWwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiLCJoYW5kbGVOYXZpZ2F0aW9uVG9nZ2xlciIsInRvZ2dsZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJjaGFuZ2VNZW51IiwieSIsInNjcm9sbFkiLCJhZGQiLCJzaG93U3RpY2t5Iiwic3R5bGUiLCJ0b3AiLCJwcm9jZXNzU2Nyb2xsIiwiZG9jRWxlbSIsImRvY3VtZW50RWxlbWVudCIsImRvY0JvZHkiLCJib2R5Iiwic2Nyb2xsVG9wIiwic2Nyb2xsQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxQZXJjZW50Iiwic2V0UHJvcGVydHkiLCJmZWF0dXJlZFNsaWRlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiYXV0b3BsYXkiLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwibGlnaHRib3hHYWxsZXJ5IiwicHJldmVudERlZmF1bHQiLCJla2tvTGlnaHRib3giLCJzbW9vdGhTY3JvbGwiLCJvbiIsImhhc2giLCJocmVmIiwic3BsaXQiLCJsb2NhdGlvbiIsImluY2x1ZGVzIiwiYW5pbWF0ZSIsIm9mZnNldCIsImVycm9yIiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiQXJyYXkiLCJIVE1MQ29sbGVjdGlvbiIsInJvdXRlcyIsIlJvdXRlciIsImNvbW1vbiIsImhvbWUiLCJhYm91dFVzIiwicmVhZHkiLCJsb2FkRXZlbnRzIiwiZmluYWxpemUiLCJyb3V0ZSIsImV2ZW50IiwiYXJnIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImZuIiwiZmlyZSIsImNsYXNzTmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1hcCIsImNhbWVsQ2FzZSIsInN0ciIsImNoYXJBdCIsInBhcnQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBSyxVQUFTQyxDQUFULEVBQVk7QUFFOUIsTUFFRUMsTUFBTSxHQUFHRCxDQUFD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QUNELElBQUwsQ0FBVUMsU0FBVixFQUFxQixVQUFyQjtBQUNELE9BUkgsRUFMVyxDQWVYOztBQUNBLFdBQUtELElBQUwsQ0FBVSxRQUFWLEVBQW9CLFVBQXBCO0FBQ0Q7Ozs7OztBQUdZZixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UseUVBQUFxQixHQUFHO0FBQUEsbUJBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0wsV0FBZCxFQUFQLFNBQXFDSSxHQUFHLENBQUNILE9BQUosQ0FBWSxRQUFaLEVBQXNCLEdBQXRCLEVBQTJCOUIsS0FBM0IsQ0FBaUMsR0FBakMsRUFDcEQrQixHQURvRCxDQUNoRCxVQUFBSSxJQUFJO0FBQUEscUJBQU9BLElBQUksQ0FBQ0QsTUFBTCxDQUFZLENBQVosRUFBZUUsV0FBZixFQUFQLFNBQXNDRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLENBQXRDO0FBQUEsR0FENEMsRUFFcERDLElBRm9ELENBRS9DLEVBRitDLEVBR3BERCxLQUhvRCxDQUc5QyxDQUg4QyxDQUFyQztBQUFBLENBQWxCLEUiLCJmaWxlIjoiL3NjcmlwdHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTW9kdWxlOiBDb29raWUgQmFyXG4gKlxuICogXG4gKi9cbmNvbnN0IGNvb2tpZUJhciA9ICggZnVuY3Rpb24oJCkge1xuXG4gIHZhclxuXG4gICAgb2JqZWN0ID0gJCggJy5jb29raWUtYmFyJyApLFxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgIGlmICggMCAhPT0gb2JqZWN0Lmxlbmd0aCApIHtcbiAgICAgICAgb2JqZWN0LmZpbmQoICcuY2xvc2UnICkuY2xpY2soIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGRpc21pc3NDb29raWVCYXIoIG9iamVjdCApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzbWlzc0Nvb2tpZUJhciA9ICggb2JqZWN0ICkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiB6a2QuYWpheCxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWN0aW9uOiAnZGlzbWlzc19jb29raWVfYmFyJ1xuICAgICAgICB9XG4gICAgICB9KS5kb25lKCBmdW5jdGlvbigpIHtcbiAgICAgICAgb2JqZWN0LnNsaWRlVXAoIDQwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5mYWlsKCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xuICAgICAgfSk7XG4gICAgfVxuICA7XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH07XG5cbn0oalF1ZXJ5KSApO1xuXG5leHBvcnQgZGVmYXVsdCBjb29raWVCYXI7XG4iLCIvKipcbiAqIEhhbmRsZSB0aGUgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xlci5cbiAqXG4gKlxuICovXG5leHBvcnQgY29uc3QgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tYWluLW5hdmlnYXRpb24tdG9nZ2xlcl0nKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1haW4tbmF2aWdhdGlvbi1tZW51XScpO1xuXG4gIGlmICh0b2dnbGVyICYmIG1lbnUpIHtcbiAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJy0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU1lbnUpO1xuICBmdW5jdGlvbiBjaGFuZ2VNZW51KCkge1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKHkgPj0gMTUwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtaGVhZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJzdGlja1wiKTtcbiAgICB9XG4gICAgaWYgKHkgPD0gMTUwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtaGVhZGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja1wiKTtcbiAgICB9XG4gIH1cblxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNob3dTdGlja3kpO1xuICBmdW5jdGlvbiBzaG93U3RpY2t5KCkge1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKHkgPj0gNTAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmdsZS1oZWFkZXItc3RpY2t5XCIpLnN0eWxlLnRvcCA9IFwiNTBweFwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2luZ2xlLWhlYWRlci1zdGlja3lcIikuc3R5bGUudG9wID0gXCItMTAwcHhcIjtcbiAgICB9XG4gIH1cblxuXG4gIGxldCBwcm9jZXNzU2Nyb2xsID0gKCkgPT4ge1xuICAgIGxldCBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgZG9jQm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICBzY3JvbGxUb3AgPSBkb2NFbGVtWydzY3JvbGxUb3AnXSB8fCBkb2NCb2R5WydzY3JvbGxUb3AnXSxcbiAgICAgIHNjcm9sbEJvdHRvbSA9IChkb2NFbGVtWydzY3JvbGxIZWlnaHQnXSB8fCBkb2NCb2R5WydzY3JvbGxIZWlnaHQnXSkgLSB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBzY3JvbGxQZXJjZW50ID0gc2Nyb2xsVG9wIC8gc2Nyb2xsQm90dG9tICogMTAwICsgJyUnO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2Nyb2xsVG9wICsgJyAvICcgKyBzY3JvbGxCb3R0b20gKyAnIC8gJyArIHNjcm9sbFBlcmNlbnQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaW5nbGUtaGVhZGVyLXN0aWNreV9fcHJvZ3Jlc3NiYXJcIikuc3R5bGUuc2V0UHJvcGVydHkoXCItLXNjcm9sbEFtb3VudFwiLCBzY3JvbGxQZXJjZW50KTtcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHByb2Nlc3NTY3JvbGwpO1xuXG5cbn07XG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gXCJzd2lwZXJcIjtcblxuZXhwb3J0IGNvbnN0IGZlYXR1cmVkU2xpZGVyID0gbmV3IFN3aXBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVhdHVyZWQgLnN3aXBlci1jb250YWluZXInKSwge1xuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gIGxvb3A6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxufSk7XG4iLCIvKipcbiAqIE1vZHVsZTogVXRpbHNcbiAqXG4gKlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodGJveEdhbGxlcnkgPSBmdW5jdGlvbigpIHtcbiAgJCgnW2RhdGEtdG9nZ2xlPVwibGlnaHRib3hcIl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuZWtrb0xpZ2h0Ym94KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNtb290aFNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICdhW2hyZWYqPVwiI1wiXScsIGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoO1xuICAgIGlmIChcbiAgICAgIFwiXCIgIT09IGhhc2ggJiZcbiAgICAgICh0aGlzLmhyZWYuc3BsaXQoXCIjXCIpLmxlbmd0aCA8IDIgfHxcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZi5pbmNsdWRlcyh0aGlzLmhyZWYuc3BsaXQoXCIjXCIpWzBdKSlcbiAgICApIHtcbiAgICAgIC8vZG8gdGhpcyBvbmx5IGlmIHRoZSBocmVmICh3aXRob3V0IGhhc2gpIGNvbnRhaW5zIGN1cnJlbnQgbG9jYXRpb24gb3IgaXMgY29udGFpbnMganVzdCB0aGUgaGFzaCBpdHNlbGZcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGNhdGNoIGVycm9yIHdoZW4gdG9wIGlzIG51bGxcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIjtcbmltcG9ydCBcImNvcmUtanMvc3RhYmxlXCI7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlci9qcy9zd2lwZXIuanNcIjtcblxuaWYgKHdpbmRvdy5Ob2RlTGlzdCAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbn1cblxuaWYgKHdpbmRvdy5IVE1MQ29sbGVjdGlvbiAmJiAhSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbn1cblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi91dGlsL1JvdXRlclwiO1xuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9yb3V0ZXMvY29tbW9uXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9yb3V0ZXMvaG9tZVwiO1xuaW1wb3J0IGFib3V0VXMgZnJvbSBcIi4vcm91dGVzL2Fib3V0XCI7XG5cbmNvbnN0IHJvdXRlcyA9IG5ldyBSb3V0ZXIoe1xuICBjb21tb24sXG4gIGhvbWUsXG4gIGFib3V0VXNcbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHJvdXRlcy5sb2FkRXZlbnRzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbml0KCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGFib3V0IHVzIHBhZ2VcbiAgfSxcbn07XG4iLCJpbXBvcnQgY29va2llQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2Nvb2tpZUJhclwiO1xuaW1wb3J0IHsgaGFuZGxlTmF2aWdhdGlvblRvZ2dsZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBsaWdodGJveEdhbGxlcnksIHNtb290aFNjcm9sbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzXCI7XG5pbXBvcnQgeyBmZWF0dXJlZFNsaWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2xpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHtcbiAgICBjb29raWVCYXIuaW5pdCgpO1xuICAgIGxpZ2h0Ym94R2FsbGVyeSgpO1xuICAgIHNtb290aFNjcm9sbCgpO1xuICAgIGhhbmRsZU5hdmlnYXRpb25Ub2dnbGVyKCk7XG4gICAgZmVhdHVyZWRTbGlkZXIuaW5pdCgpO1xuICB9LFxuICBmaW5hbGl6ZSgpIHt9XG59O1xuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHtcblxuXG4gIH0sXG4gIGZpbmFsaXplKCkge1xuICAgIC8vIEphdmFTY3JpcHQgdG8gYmUgZmlyZWQgb24gdGhlIGhvbWUgcGFnZSwgYWZ0ZXIgdGhlIGluaXQgSlNcbiAgfSxcbn07XG4iLCJpbXBvcnQgY2FtZWxDYXNlIGZyb20gJy4vY2FtZWxDYXNlJztcblxuLyoqXG4gKiBET00tYmFzZWQgUm91dGluZ1xuICpcbiAqIEJhc2VkIG9uIHtAbGluayBodHRwOi8vZ29vLmdsL0VVVGk1M3xNYXJrdXAtYmFzZWQgVW5vYnRydXNpdmUgQ29tcHJlaGVuc2l2ZSBET00tcmVhZHkgRXhlY3V0aW9ufSBieSBQYXVsIElyaXNoXG4gKlxuICogVGhlIHJvdXRpbmcgZmlyZXMgYWxsIGNvbW1vbiBzY3JpcHRzLCBmb2xsb3dlZCBieSB0aGUgcGFnZSBzcGVjaWZpYyBzY3JpcHRzLlxuICogQWRkIGFkZGl0aW9uYWwgZXZlbnRzIGZvciBtb3JlIGNvbnRyb2wgb3ZlciB0aW1pbmcgZS5nLiBhIGZpbmFsaXplIGV2ZW50XG4gKi9cbmNsYXNzIFJvdXRlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBSb3V0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlc1xuICAgKi9cbiAgY29uc3RydWN0b3Iocm91dGVzKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogRmlyZSBSb3V0ZXIgZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByb3V0ZSBET00tYmFzZWQgcm91dGUgZGVyaXZlZCBmcm9tIGJvZHkgY2xhc3NlcyAoYDxib2R5IGNsYXNzPVwiLi4uXCI+YClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gRXZlbnRzIG9uIHRoZSByb3V0ZS4gQnkgZGVmYXVsdCwgYGluaXRgIGFuZCBgZmluYWxpemVgIGV2ZW50cyBhcmUgY2FsbGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FyZ10gQW55IGN1c3RvbSBhcmd1bWVudCB0byBiZSBwYXNzZWQgdG8gdGhlIGV2ZW50LlxuICAgKi9cbiAgZmlyZShyb3V0ZSwgZXZlbnQgPSAnaW5pdCcsIGFyZykge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb3V0ZWQnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICBmbjogZXZlbnQsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBcbiAgICBjb25zdCBmaXJlID0gcm91dGUgIT09ICcnICYmIHRoaXMucm91dGVzW3JvdXRlXSAmJiB0eXBlb2YgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoZmlyZSkge1xuICAgICAgdGhpcy5yb3V0ZXNbcm91dGVdW2V2ZW50XShhcmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvbWF0aWNhbGx5IGxvYWQgYW5kIGZpcmUgUm91dGVyIGV2ZW50c1xuICAgKlxuICAgKiBFdmVudHMgYXJlIGZpcmVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6XG4gICAqICAqIGNvbW1vbiBpbml0XG4gICAqICAqIHBhZ2Utc3BlY2lmaWMgaW5pdFxuICAgKiAgKiBwYWdlLXNwZWNpZmljIGZpbmFsaXplXG4gICAqICAqIGNvbW1vbiBmaW5hbGl6ZVxuICAgKi9cbiAgbG9hZEV2ZW50cygpIHtcbiAgICAvLyBGaXJlIGNvbW1vbiBpbml0IEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nKTtcblxuICAgIC8vIEZpcmUgcGFnZS1zcGVjaWZpYyBpbml0IEpTLCBhbmQgdGhlbiBmaW5hbGl6ZSBKU1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoLy0vZywgJ18nKVxuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC5tYXAoY2FtZWxDYXNlKVxuICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5maXJlKGNsYXNzTmFtZSwgJ2ZpbmFsaXplJyk7XG4gICAgICB9KTtcblxuICAgIC8vIEZpcmUgY29tbW9uIGZpbmFsaXplIEpTXG4gICAgdGhpcy5maXJlKCdjb21tb24nLCAnZmluYWxpemUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCIvKipcbiAqIHRoZSBtb3N0IHRlcnJpYmxlIGNhbWVsaXplciBvbiB0aGUgaW50ZXJuZXQsIGd1YXJhbnRlZWQhXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyB0aGF0IGlzbid0IGNhbWVsLWNhc2UsIGUuZy4sIENBTWVMX0NhU0VpUy1oYXJEXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyBjb252ZXJ0ZWQgdG8gY2FtZWwtY2FzZSwgZS5nLiwgY2FtZWxDYXNlSXNIYXJkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiBgJHtzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCl9JHtzdHIucmVwbGFjZSgvW1xcV19dL2csICd8Jykuc3BsaXQoJ3wnKVxuICAubWFwKHBhcnQgPT4gYCR7cGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3BhcnQuc2xpY2UoMSl9YClcbiAgLmpvaW4oJycpXG4gIC5zbGljZSgxKX1gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==