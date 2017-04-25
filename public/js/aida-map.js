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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Error = function () {
    function Error() {
        _classCallCheck(this, Error);

        this.errors = {};
    }

    _createClass(Error, [{
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }
            delete this.errors[field];
        }
    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }
    }, {
        key: "has",
        value: function has(field) {
            return !!this.errors[field];
        }
    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }]);

    return Error;
}();

/* harmony default export */ __webpack_exports__["a"] = (Error);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error_js__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Error_js__["a" /* default */]();
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};

            for (var field in this.originalData) {
                data[field] = this[field];
            }

            return data;
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }
    }, {
        key: 'get',
        value: function get(url) {
            return this.submit('get', url);
        }
    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }
    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }
    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }
    }, {
        key: 'submit',
        value: function submit(request, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[request](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);

                    reject(error.response.data);
                });
            });
        }
    }, {
        key: 'onSuccess',
        value: function onSuccess(response) {
            this.errors.clear();
        }
    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AidaMapModal_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AidaMapModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AidaMapModal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProjectMap_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ProjectMap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ProjectMap_vue__);





new Vue({
    components: {
        HorizontalFilters: __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue___default.a,
        AidaMapModal: __WEBPACK_IMPORTED_MODULE_2__components_AidaMapModal_vue___default.a,
        ProjectMap: __WEBPACK_IMPORTED_MODULE_3__components_ProjectMap_vue___default.a
    },

    data: {
        buyers: [],
        searchTerm: '',
        clientSearching: '',
        locations: [],
        units: [],
        result_count: 0
    },

    el: '#app',

    mounted: function mounted() {},


    methods: {
        getBuyers: function getBuyers() {
            var _this = this;

            this.$http.get('/buyers/all?search=' + this.searchTerm).then(function (response) {
                _this.buyers = response.data;
            });
        },
        displayResults: function displayResults(data) {
            this.result_count = data.result_count;
            this.units = data.units;
            this.locations = data.locations;
        },
        clearResults: function clearResults() {
            this.result_count = 0;
            this.units = '';
            this.locations = '';
        }
    }
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form_js__ = __webpack_require__(7);
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
    data: function data() {
        return {
            form: new __WEBPACK_IMPORTED_MODULE_0__core_Form_js__["a" /* default */]({
                developer: '',
                location_horizontal: '',
                project_name_horizontal: '',
                block_horizontal: '',
                lot_horizontal: '',
                price_minimum_horizontal: '',
                price_maximum_horizontal: '',
                lot_area_min_horizontal: '',
                lot_area_max_horizontal: '',
                floor_area_min_horizontal: '',
                floor_area_max_horizontal: '',
                lot_type_horizontal: '',
                house_model_horizontal: ''
            }),
            projects: [],
            units: []
        };
    },
    mounted: function mounted() {
        this.getLocations();
    },


    methods: {
        getLocations: function getLocations() {
            var _this = this;

            this.$http.get('/units/locations').then(function (response) {
                _this.units = response.data.units;
            });
        },
        getProjectsByLocation: function getProjectsByLocation(location) {
            var _this2 = this;

            this.$http.get('/search/getProjectsByLocation?location=' + location).then(function (response) {
                _this2.projects = response.data;
            });
        },
        reset: function reset() {
            this.form.reset();

            this.$emit('reset');
        },
        searchUnits: function searchUnits() {
            var _this3 = this;

            this.form.post('/search/unit').then(function (response) {
                _this3.$emit('search', response);
            });
        }
    }
});

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\HorizontalFilters.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HorizontalFilters.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2df8cfc", Component.options)
  } else {
    hotAPI.reload("data-v-b2df8cfc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    attrs: {
      "action": "/search/unit",
      "method": "POST"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Unit Search")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "developer"
    }
  }, [_vm._v("Developer")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.developer),
      expression: "form.developer"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "developer",
      "id": "developer"
    },
    domProps: {
      "value": (_vm.form.developer)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.developer = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "developer"
    }
  }, [_vm._v("Location")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.location_horizontal),
      expression: "form.location_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "location_horizontal",
      "id": "location_horizontal"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.location_horizontal = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.getProjectsByLocation(_vm.form.location_horizontal)
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("From where")]), _vm._v(" "), _vm._l((_vm.units), function(unit) {
    return _c('option', [_vm._v(_vm._s(unit.location))])
  })], 2)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "project_name_horizontal"
    }
  }, [_vm._v("Project Name")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.project_name_horizontal),
      expression: "form.project_name_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "project_name_horizontal",
      "id": "project_name_horizontal"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.project_name_horizontal = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Project")]), _vm._v(" "), _vm._l((_vm.projects), function(project) {
    return _c('option', {
      domProps: {
        "value": project.project
      }
    }, [_vm._v("@" + _vm._s(project.project))])
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "block_horizontal"
    }
  }, [_vm._v("Block")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.block_horizontal),
      expression: "form.block_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "block_horizontal",
      "id": "block_horizontal"
    },
    domProps: {
      "value": (_vm.form.block_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.block_horizontal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lot_horizontal"
    }
  }, [_vm._v("Lot")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.lot_horizontal),
      expression: "form.lot_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "lot_horizontal",
      "id": "lot_horizontal"
    },
    domProps: {
      "value": (_vm.form.lot_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.lot_horizontal = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "price_minimum"
    }
  }, [_vm._v("Price")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.price_minimum_horizontal),
      expression: "form.price_minimum_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "price_minimum_horizontal",
      "id": "price_minimum_horizontal",
      "placeholder": "Min"
    },
    domProps: {
      "value": (_vm.form.price_minimum_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.price_minimum_horizontal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "price_maximum"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.price_maximum_horizontal),
      expression: "form.price_maximum_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "price_maximum_horizontal",
      "id": "price_maximum_horizontal",
      "placeholder": "Max"
    },
    domProps: {
      "value": (_vm.form.price_maximum_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.price_maximum_horizontal = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lot_area_min"
    }
  }, [_vm._v("Lot Area (sq. m)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.lot_area_min_horizontal),
      expression: "form.lot_area_min_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "lot_area_min_horizontal",
      "id": "lot_area_min_horizontal",
      "placeholder": "Min"
    },
    domProps: {
      "value": (_vm.form.lot_area_min_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.lot_area_min_horizontal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lot_area_max"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.lot_area_max_horizontal),
      expression: "form.lot_area_max_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "lot_area_max_horizontal",
      "id": "lot_area_max_horizontal",
      "placeholder": "Max"
    },
    domProps: {
      "value": (_vm.form.lot_area_max_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.lot_area_max_horizontal = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "floor_area_min"
    }
  }, [_vm._v("Floor Area (sq. m)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.floor_area_min_horizontal),
      expression: "form.floor_area_min_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "floor_area_min_horizontal",
      "id": "floor_area_min_horizontal",
      "placeholder": "Min"
    },
    domProps: {
      "value": (_vm.form.floor_area_min_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.floor_area_min_horizontal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "floor_area_max"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.floor_area_max_horizontal),
      expression: "form.floor_area_max_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "floor_area_max_horizontal",
      "id": "floor_area_max_horizontal",
      "placeholder": "Max"
    },
    domProps: {
      "value": (_vm.form.floor_area_max_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.floor_area_max_horizontal = $event.target.value
      }
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "lot_type_horizontal"
    }
  }, [_vm._v("Lot Type")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.lot_type_horizontal),
      expression: "form.lot_type_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "lot_type_horizontal",
      "id": "lot_type_horizontal"
    },
    domProps: {
      "value": (_vm.form.lot_type_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.lot_type_horizontal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "house_model_horizontal"
    }
  }, [_vm._v("House Model")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.house_model_horizontal),
      expression: "form.house_model_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "house_model_horizontal",
      "id": "house_model_horizontal"
    },
    domProps: {
      "value": (_vm.form.house_model_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.house_model_horizontal = $event.target.value
      }
    }
  })])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-20"
  }, [_c('div', {
    staticClass: "col-md-12 text-center"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.searchUnits($event)
      }
    }
  }, [_vm._v("SEARCH UNITS")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.reset()
      }
    }
  }, [_vm._v("RESET SEARCH")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b2df8cfc", module.exports)
  }
}

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            canvas: '',
            context: '',
            mouseX: 0,
            mouseY: 0
        };
    },


    computed: {
        divisions: function divisions() {}
    },

    mounted: function mounted() {
        this.prepareCanvas();
    },


    methods: {
        prepareCanvas: function prepareCanvas() {
            this.canvas = document.querySelector('#project-map');
            this.context = this.canvas.getContext('2d');

            this.drawMap();
            // this.drawDivisions();
        },
        drawMap: function drawMap() {
            var _this = this;

            var map = new Image();

            map.onload = function () {
                _this.context.drawImage(map, 0, 0, _this.canvas.width, _this.canvas.height);
            };

            map.src = '/img/map.png';
        },
        drawDivisions: function drawDivisions() {
            var _this2 = this;

            window.onload = function () {
                var rectangle = _this2.canvas.getBoundingClientRect();
                var divisionWidth = rectangle.width / 4;
                var divisionHeight = rectangle.height / 3;

                _this2.context.globalAlpha = 0.5;
                _this2.context.fillStyle = '#FFFFFF';

                _this2.context.fillRect(0, 0, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth, 0, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 2, 0, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 3, 0, divisionWidth, divisionHeight);

                _this2.context.fillRect(0, divisionHeight, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth, divisionHeight, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 2, divisionHeight, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 3, divisionHeight, divisionWidth, divisionHeight);

                _this2.context.fillRect(0, divisionHeight * 2, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth, divisionHeight * 2, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 2, divisionHeight * 2, divisionWidth, divisionHeight);
                _this2.context.fillRect(divisionWidth * 3, divisionHeight * 2, divisionWidth, divisionHeight);
            };
        },
        getCoordinates: function getCoordinates(mouse) {
            var rectangle = this.canvas.getBoundingClientRect();

            this.mouseX = accounting.formatNumber((mouse.clientX - rectangle.left) / rectangle.width);
            this.mouseY = accounting.formatNumber((mouse.clientY - rectangle.top) / rectangle.height);

            this.highLightDivision();
        },
        highLightDivision: function highLightDivision() {},
        plotMarker: function plotMarker() {
            var rectangle = this.canvas.getBoundingClientRect();

            this.context.fillStyle = '#FF0000';
            this.context.fillRect(rectangle.width * this.mouseX, rectangle.height * this.mouseY, 10, 10);
        }
    }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\ProjectMap.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectMap.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-260800c8", Component.options)
  } else {
    hotAPI.reload("data-v-260800c8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Click on the map to place a marker")]), _vm._v(" "), _c('canvas', {
    attrs: {
      "id": "project-map",
      "width": "600",
      "height": "400"
    },
    on: {
      "mousemove": _vm.getCoordinates,
      "click": _vm.plotMarker
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/map.png",
      "id": "map-image"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-260800c8", module.exports)
  }
}

/***/ })
/******/ ]);