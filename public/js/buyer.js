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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 1:
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

/***/ 10:
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

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BuyerModal_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BuyerModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BuyerModal_vue__);



new Vue({
    components: {
        BuyerModal: __WEBPACK_IMPORTED_MODULE_1__components_BuyerModal_vue___default.a
    },

    data: {
        action: '',
        buyerId: '',
        buyers: [],
        searchTerm: ''
    },

    el: '#app',

    mounted: function mounted() {
        this.getBuyers();
    },


    methods: {
        getBuyers: function getBuyers() {
            var _this = this;

            this.$http.get('/buyers/all?search=' + this.searchTerm).then(function (response) {
                _this.buyers = response.data;
            });
        },
        setForm: function setForm(buyerId, action) {
            this.action = action;
            this.buyerId = buyerId;
        },
        trash: function trash(buyerId) {
            var _this2 = this;

            this.$http.delete('/buyers/' + buyerId).then(function (response) {
                _this2.getBuyers();
            });
        }
    }
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(5);
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.storagePath = function () {
    return path.dirname(__dirname) + '../storage';
};

Vue.prototype.$http = window.axios;

accounting.settings = {
    currency: {
        symbol: '',
        format: '%s%v',
        decimal: '.',
        thousand: ',',
        precision: 2
    },
    number: {
        precision: 2,
        thousand: ',',
        decimal: '.'
    }
};

Vue.filter('diffForHumans', function (date) {
    return moment(date).fromNow();
});

Vue.filter('currency', function (number) {
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!symbol) {
        return accounting.formatMoney(number, symbol);
    }

    return accounting.formatMoney(number, { symbol: symbol, format: '%s %v' });
});

Vue.filter('number', function (number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return accounting.formatNumber(number, precision);
});
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Form_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },

    props: ['buyerId', 'action'],

    data: function data() {
        return {
            message: '',
            buyerStatuses: [],
            countries: [],
            cities: [],
            form: new __WEBPACK_IMPORTED_MODULE_1__core_Form_js__["a" /* default */]({
                last_name: '',
                first_name: '',
                middle_name: '',
                extension: '',
                mobile: '',
                landline: '',
                others: '',
                marital_status: '',
                email: '',
                work_type: '',
                facebook_url: '',
                financing_type: '',
                country: '',
                equity_type: '',
                birth_date: '',
                status: '1'
            })
        };
    },


    computed: {
        title: function title() {
            if (this.action == 'create') {
                return 'ADD NEW BUYER';
            }

            if (this.action == 'edit') {
                return 'EDIT PROFILE OF BUYER # ' + this.buyerId;
            }

            return 'BUYER DETAILS';
        },
        requestType: function requestType() {
            if (this.action == 'create') {
                return 'post';
            }

            return 'patch';
        },
        url: function url() {
            if (this.action == 'create') {
                return '/buyers';
            }

            return '/buyers/' + this.buyerId;
        }
    },

    mounted: function mounted() {
        this.getBuyerStatuses();
        this.getCountries();
        this.getCities();
    },


    methods: {
        save: function save() {
            var _this = this;

            this.form[this.requestType](this.url).then(function (data) {
                _this.$emit('saved');

                _this.message = data.message;
            }).catch(function (error) {});
        },
        getBuyerStatuses: function getBuyerStatuses() {
            var _this2 = this;

            this.$http.get('/buyer-statuses').then(function (response) {
                _this2.buyerStatuses = response.data.buyer_statuses;
            });
        },
        getCountries: function getCountries() {
            var _this3 = this;

            this.$http.get('/countries').then(function (response) {
                _this3.countries = response.data.countries;
            });
        },
        getCities: function getCities() {
            var _this4 = this;

            this.$http.get('/cities').then(function (response) {
                _this4.cities = response.data.cities;
            });
        }
    },

    watch: {
        buyerId: function buyerId() {
            var _this5 = this;

            if (this.buyerId) {
                this.form.get('/buyers/' + this.buyerId).then(function (data) {
                    _this5.form.last_name = data.buyer.last_name;
                    _this5.form.first_name = data.buyer.first_name;
                    _this5.form.middle_name = data.buyer.middle_name;
                    _this5.form.extension = data.buyer.extension;
                    _this5.form.marital_status = data.buyer.marital_status;
                    _this5.form.email = data.buyer.email;
                    _this5.form.work_type = data.buyer.work_type;
                    _this5.form.facebook_url = data.buyer.facebook_url;
                    _this5.form.financing_type = data.buyer.financing_type;
                    _this5.form.country = data.buyer.country;
                    _this5.form.birth_date = data.buyer.birth_date;
                    _this5.form.equity_type = data.buyer.equity_type;
                    _this5.form.mobile = data.buyer.mobile;
                    _this5.form.landline = data.buyer.landline;
                    _this5.form.others = data.buyer.others;
                    _this5.form.status = data.buyer.status.id;
                });
            } else {
                this.form.reset();
            }
        }
    }
});

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\BuyerModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BuyerModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ed34e7f", Component.options)
  } else {
    hotAPI.reload("data-v-5ed34e7f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "id": "buyer-modal"
    }
  }, [_c('h4', {
    staticClass: "modal-title",
    slot: "header"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), (_vm.message) ? _c('div', {
    staticClass: "alert alert-success"
  }, [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "container",
    attrs: {
      "id": "buyerForm"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.save($event)
      },
      "keydown": function($event) {
        _vm.form.errors.clear($event.target.name)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "last_name"
    }
  }, [_vm._v("Last Name")]), _vm._v(" "), (_vm.form.errors.has('last_name')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('last_name')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.last_name),
      expression: "form.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "last_name",
      "id": "last_name",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.last_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "first_name"
    }
  }, [_vm._v("First Name")]), _vm._v(" "), (_vm.form.errors.has('first_name')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('first_name')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.first_name),
      expression: "form.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "first_name",
      "id": "first_name",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.first_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "middle_name"
    }
  }, [_vm._v("Middle Name")]), _vm._v(" "), (_vm.form.errors.has('middle_name')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('middle_name')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.middle_name),
      expression: "form.middle_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "middle_name",
      "id": "middle_name",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.middle_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.middle_name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "extension"
    }
  }, [_vm._v("Extension")]), _vm._v(" "), (_vm.form.errors.has('name')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('extension')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.extension),
      expression: "form.extension"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "extension",
      "id": "extension",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.extension)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.extension = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "birth_date"
    }
  }, [_vm._v("BirthDate")]), _vm._v(" "), (_vm.form.errors.has('birth_date')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('birth_date')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.birth_date),
      expression: "form.birth_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date",
      "name": "birth_date",
      "id": "birth_date",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.birth_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.birth_date = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "marital_status"
    }
  }, [_vm._v("Marital Status")]), _vm._v(" "), (_vm.form.errors.has('marital_status')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('marital_status')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.marital_status),
      expression: "form.marital_status"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "marital_status",
      "id": "marital_status",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.marital_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Single"
    }
  }, [_vm._v("Single")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Married"
    }
  }, [_vm._v("Married")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Widowed"
    }
  }, [_vm._v("Widowed")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), (_vm.form.errors.has('email')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('email')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "email",
      "id": "email",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "work_type"
    }
  }, [_vm._v("Work Type")]), _vm._v(" "), (_vm.form.errors.has('work_type')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('work_type')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.work_type),
      expression: "form.work_type"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "work_type",
      "id": "work_type",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.work_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Local (Private)"
    }
  }, [_vm._v("Local (Private)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Local (Government)"
    }
  }, [_vm._v("Local (Government)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OFW (Land-Based)"
    }
  }, [_vm._v("OFW (Land-Based)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OFW (Sea-Based)"
    }
  }, [_vm._v("OFW (Sea-Based)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Self-Employed"
    }
  }, [_vm._v("Self-Employed")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "facebook_url"
    }
  }, [_vm._v("Facebook URL")]), _vm._v(" "), (_vm.form.errors.has('facebook_url')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('facebook_url')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.facebook_url),
      expression: "form.facebook_url"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "facebook_url",
      "id": "facebook_url",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.facebook_url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.facebook_url = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "financing_type"
    }
  }, [_vm._v("Financing Type")]), _vm._v(" "), (_vm.form.errors.has('financing_type')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('financing_type')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.financing_type),
      expression: "form.financing_type"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "financing_type",
      "id": "financing_type",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.financing_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Bank"
    }
  }, [_vm._v("Bank")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "In-House"
    }
  }, [_vm._v("In-House")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Deferred"
    }
  }, [_vm._v("Deferred")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Full Payment"
    }
  }, [_vm._v("Full Payment")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "country"
    }
  }, [_vm._v("Country(If OFW), City(If Local)")]), _vm._v(" "), (_vm.form.errors.has('country')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('country')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.country),
      expression: "form.country"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "country",
      "id": "country",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.country = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _vm._l((_vm.countries), function(country) {
    return (_vm.form.work_type.includes('OFW')) ? _c('option', {
      domProps: {
        "value": country
      }
    }, [_vm._v("\n                                    " + _vm._s(country) + "\n                                ")]) : _vm._e()
  }), _vm._v(" "), _vm._l((_vm.cities), function(city) {
    return (_vm.form.work_type.includes('Local')) ? _c('option', {
      domProps: {
        "value": city
      }
    }, [_vm._v("\n                                    " + _vm._s(city) + "\n                                ")]) : _vm._e()
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "equity_type"
    }
  }, [_vm._v("Equity Type")]), _vm._v(" "), (_vm.form.errors.has('equity_type')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('equity_type')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.equity_type),
      expression: "form.equity_type"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "equity_type",
      "id": "equity_type",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.equity_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Full"
    }
  }, [_vm._v("Full")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Installment"
    }
  }, [_vm._v("Installment")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "mobile"
    }
  }, [_vm._v("Mobile")]), _vm._v(" "), (_vm.form.errors.has('mobile')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('mobile')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.mobile),
      expression: "form.mobile"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "mobile",
      "id": "mobile",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.mobile = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "landline"
    }
  }, [_vm._v("LandLine")]), _vm._v(" "), (_vm.form.errors.has('landline')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('landline')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.landline),
      expression: "form.landline"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "landline",
      "id": "landline",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.landline)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.landline = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "others"
    }
  }, [_vm._v("Other Contacts")]), _vm._v(" "), (_vm.form.errors.has('others')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('others')))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.others),
      expression: "form.others"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "others",
      "id": "others",
      "disabled": _vm.action == 'show'
    },
    domProps: {
      "value": (_vm.form.others)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.others = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.action != 'create') ? _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v("Status")]), _vm._v(" "), (_vm.form.errors.has('status')) ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.form.errors.get('status')))]) : _vm._e(), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.status),
      expression: "form.status"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "status",
      "id": "status",
      "disabled": _vm.action == 'show'
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.form.status = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.buyerStatuses), function(buyerStatus) {
    return _c('option', {
      domProps: {
        "value": buyerStatus.id
      }
    }, [_vm._v("\n                                    " + _vm._s(buyerStatus.name) + "\n                                ")])
  }))])]) : _vm._e()])])])]), _vm._v(" "), _c('span', {
    slot: "footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    },
    on: {
      "click": function($event) {
        _vm.message = ''
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.action != 'show'),
      expression: "action != 'show'"
    }],
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "form": "buyerForm",
      "disabled": _vm.form.errors.any()
    }
  }, [_vm._v("Save")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ed34e7f", module.exports)
  }
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 6:
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

/***/ 7:
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

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error_js__ = __webpack_require__(7);
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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(10),
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


/***/ })

/******/ });