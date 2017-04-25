/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id']
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$http = window.axios;

Vue.filter('diffForHumans', function (date) {
    return moment(date).fromNow();
});

accounting.settings = {
    currency: {
        symbol: '', // default currency symbol is '$'
        format: '%s%v', // controls output: %s = symbol, %v = value/number (can be object: see below)
        decimal: '.', // decimal point separator
        thousand: ',', // thousands separator
        precision: 2 // decimal places
    },
    number: {
        precision: 2, // default precision on numbers is 0
        thousand: ',',
        decimal: '.'
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0875fe78", Component.options)
  } else {
    hotAPI.reload("data-v-0875fe78", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": _vm.id,
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-lg"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    },
    slot: "header"
  }, [_vm._v("×")]), _vm._v(" "), _vm._t("header")], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("footer")], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0875fe78", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default.a
    }
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\AidaMapModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AidaMapModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22ee94fb", Component.options)
  } else {
    hotAPI.reload("data-v-22ee94fb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "id": "aida-map-modal"
    }
  }, [_c('h4', {
    staticClass: "modal-title",
    slot: "header"
  }, [_vm._v("AIDA Map")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Developer's Information")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("Developer Name")]), _vm._v(" "), _c('td', [_vm._v("Propery Company of Friends Inc.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Project Name")]), _vm._v(" "), _c('td', [_vm._v("Lancaster New City")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Location")]), _vm._v(" "), _c('td', [_vm._v("Cavite")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Prepared By")]), _vm._v(" "), _c('td', [_vm._v("Hervie Fajardo")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Contact No.")]), _vm._v(" "), _c('td', [_vm._v("+63 917 872 0176")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Email")]), _vm._v(" "), _c('td', [_vm._v("hervie.fajardo@gmail.com")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Buyer's Computations For")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("Ms. Annie Biglang Biliagad")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("0917-4567890")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("anniebiglabili@gmail.com")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Married")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Bank Financing")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("OFW (Land-Based)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Singapore")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Downpayment (Installment)")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Unit Details")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('img', {
    staticClass: "unit-full",
    attrs: {
      "src": "/img/user7-128x128.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("Block and Lot")]), _vm._v(" "), _c('td', [_vm._v("SS11-1215")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Lot Area")]), _vm._v(" "), _c('td', [_vm._v("98")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Lot Type")]), _vm._v(" "), _c('td', [_vm._v("PC-8")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Floor Area")]), _vm._v(" "), _c('td', [_vm._v("52")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("House Model")]), _vm._v(" "), _c('td', [_vm._v("Sophie")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Total Contract Price")]), _vm._v(" "), _c('td', [_vm._v("3,060,320.00")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Reservation Fee")]), _vm._v(" "), _c('td', [_vm._v("20, 000")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Map of the Subdivision")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-20"
  }, [_c('img', {
    staticClass: "subdivision-full",
    attrs: {
      "src": "/img/user7-128x128.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 mb-20"
  }, [_c('img', {
    staticClass: "subdivision-magnified",
    attrs: {
      "src": "/img/user7-128x128.jpg",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Document Requirements For")]), _vm._v(" "), _c('ul', {
    staticClass: "requirements"
  }, [_c('li', [_vm._v("3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name & Unit ID at the back")]), _vm._v(" "), _c('li', [_vm._v("2 Valid ID's with 3 specimen signature (Photocopy only) (Buyer & Spouse)")]), _vm._v(" "), _c('li', [_vm._v("SSS, GSIS, Driver's License, Voter's, PRC, Passport")]), _vm._v(" "), _c('li', [_vm._v("Postal ID's are allowed for AIF only (or unemployed spouse)")]), _vm._v(" "), _c('li', [_vm._v("Passport - validity should not be expired (Buyer)")]), _vm._v(" "), _c('li', [_vm._v("Must have date of arrival & departure")]), _vm._v(" "), _c('li', [_vm._v("Residence Certificate for the Current Year (Cedula) (Spouse & Atty-In-Fact)")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("For Reservations, Contact Us At")]), _vm._v(" "), _c('address', [_c('h3', {
    staticClass: "name"
  }, [_vm._v("Mr. Hervie Fajardo")]), _vm._v(" "), _c('span', {
    staticClass: "mobile"
  }, [_vm._v("Globe: +63 917 872 0176")]), _vm._v(" "), _c('span', {
    staticClass: "mobile"
  }, [_vm._v("Smart: +63 917 565 8645")]), _vm._v(" "), _c('h5', [_vm._v("LANDLINE HOTLINES")]), _vm._v(" "), _c('span', {
    staticClass: "telephone"
  }, [_vm._v("Manila Telephone: (02) 256 6574")]), _vm._v(" "), _c('span', {
    staticClass: "telephone"
  }, [_vm._v("Cavite Telephone: (046) 440 6474")])]), _vm._v(" "), _c('address', [_c('p', {
    staticClass: "office"
  }, [_vm._v("Main Office")]), _vm._v(" "), _c('span', {
    staticClass: "barangay"
  }, [_vm._v("55 Tinio St. Brgy. Addition Hills")]), _vm._v(" "), _c('span', {
    staticClass: "city"
  }, [_vm._v("Mandaluyong City")]), _vm._v(" "), _c('span', {
    staticClass: "country"
  }, [_vm._v("Philippines 1552")])]), _vm._v(" "), _c('address', [_c('p', {
    staticClass: "office"
  }, [_vm._v("Branch Office")]), _vm._v(" "), _c('span', {
    staticClass: "barangay"
  }, [_vm._v("55 Gen. Aguinaldo Hi-way Brgy. Tanzang Luma")]), _vm._v(" "), _c('span', {
    staticClass: "city"
  }, [_vm._v("Imus City, Cavite")]), _vm._v(" "), _c('span', {
    staticClass: "country"
  }, [_vm._v("Philippines 4103")])])])]), _vm._v(" "), _c('p', {
    staticClass: "footer-note",
    slot: "footer"
  }, [_vm._v("\n        Date and time generated.\n        "), _c('strong', [_vm._v("Price are subject to change without prior notice.")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22ee94fb", module.exports)
  }
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AidaMapModal_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AidaMapModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AidaMapModal_vue__);



new Vue({
    data: {
        location: '',
        project: '',
        projects: [],
        blocks: []
    },

    components: {
        AidaMapModal: __WEBPACK_IMPORTED_MODULE_1__components_AidaMapModal_vue___default.a
    },

    el: '#app',

    computed: function computed() {},
    mounted: function mounted() {},


    methods: {
        getProjectsByLocation: function getProjectsByLocation(location) {
            var _this = this;

            this.$http.get('/search/getProjectsByLocation?location=' + location).then(function (res) {
                _this.projects = res.data;
            });
        },
        getBlocksByLocation: function getBlocksByLocation(project) {
            var _this2 = this;

            this.$http.get('/search/getBlocksByProject?project=' + project).then(function (res) {
                _this2.blocks = res.data;
            });
        }
    }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);