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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                house_model_horizontal: '',
                zone_horizontal: '',
                phase_horizontal: ''
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(13),
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
/* 13 */
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
  }, [_vm._v("Block and Lot")]), _vm._v(" "), _c('input', {
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
  }, [_vm._v("Zone")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.zone_horizontal),
      expression: "form.zone_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "zone_horizontal",
      "id": "zone_horizontal"
    },
    domProps: {
      "value": (_vm.form.zone_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.zone_horizontal = $event.target.value
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
      "for": "phase_horizontal"
    }
  }, [_vm._v("Phase")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.phase_horizontal),
      expression: "form.phase_horizontal"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "phase_horizontal",
      "id": "phase_horizontal",
      "placeholder": "Phase"
    },
    domProps: {
      "value": (_vm.form.phase_horizontal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.phase_horizontal = $event.target.value
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AidaMap_Modal_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AidaMap_Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AidaMap_Modal_vue__);




new Vue({
    components: {
        HorizontalFilters: __WEBPACK_IMPORTED_MODULE_1__components_HorizontalFilters_vue___default.a,
        AidaMapModal: __WEBPACK_IMPORTED_MODULE_2__components_AidaMap_Modal_vue___default.a
    },

    data: {
        buyers: [],
        searchTerm: '',
        clientSearching: '',
        locations: [],
        units: [],
        result_count: 0,
        unitId: ''
    },

    el: '#app',

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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['financingTypes'],

    data: function data() {
        return {
            financingType: ''
        };
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        ProjectMap: __WEBPACK_IMPORTED_MODULE_0__components_ProjectMap_vue___default.a
    },

    computed: {
        serializedData: function serializedData() {
            var data = {};

            data['unit'] = this.unit;
            data['buyer'] = this.buyer;
            data['financing_type'] = this.financingType;

            return JSON.stringify(data);
        },
        photo: function photo() {
            var _this = this;

            return this.unit.photos.find(function (photo) {
                return photo.developer == _this.unit.developer;
            });
        },
        path: function path() {
            return '/storage/' + this.photo.developer + '/models/' + this.photo.house_model_name + '/' + this.photo.filename;
        }
    },

    props: ['unit', 'buyer', 'financingType'],

    methods: {
        submitForm: function submitForm() {
            document.getElementById('pdf-form').submit();
        },
        downloadPdf: function downloadPdf() {
            this.submitForm();
        },
        sendEmail: function sendEmail() {
            document.getElementById('pdf-form-email').submit();

            // this.$http.get(`/aida-maps/send?email=${this.buyer.email}&name=${this.buyer.first_name}`).then(response => {
            //     console.log(response.data);
            // });
        }
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FinancingSelection_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FinancingSelection_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FinancingSelection_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Info_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        Modal: __WEBPACK_IMPORTED_MODULE_0__components_Modal_vue___default.a,
        FinancingSelection: __WEBPACK_IMPORTED_MODULE_1__FinancingSelection_vue___default.a,
        AidaMapInfo: __WEBPACK_IMPORTED_MODULE_2__Info_vue___default.a
    },

    props: ['unitId', 'buyerId'],

    data: function data() {
        return {
            message: '',
            download: '',
            aidaMap: {},
            buyer: {},
            units: [],
            financingType: ''
        };
    },


    computed: {
        financingTypes: function financingTypes() {
            var financingTypes = [];

            this.units.forEach(function (unit) {
                unit.loans.forEach(function (loan) {
                    financingTypes.push(loan.finance_type);
                });
            });

            return Array.from(new Set(financingTypes));
        },
        unit: function unit() {
            var _this = this;

            return this.units.find(function (unit) {
                return unit.loans.find(function (loan) {
                    return loan.finance_type == _this.financingType;
                });
            });
        }
    },

    methods: {
        getFinancingType: function getFinancingType(payload) {
            this.financingType = payload;
        },
        save: function save() {
            var _this2 = this;

            this.$http.post('/aida-maps', {
                'unit_id': this.unitId,
                'buyer_id': this.buyerId,
                'finance_type': this.financingType
            }).then(function (response) {
                _this2.message = response.data.message;
            });
        }
    },

    watch: {
        unitId: function unitId() {
            var _this3 = this;

            this.$http.get('/search/unitById/' + this.unitId).then(function (response) {
                _this3.units = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        buyerId: function buyerId() {
            var _this4 = this;

            this.$http.get('/buyers/' + this.buyerId).then(function (response) {
                _this4.buyer = response.data.buyer;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
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


    props: ['x', 'y'],

    mounted: function mounted() {
        this.prepareCanvas();

        if (this.x && this.y) {
            this.plotMarker();
        }
    },


    methods: {
        prepareCanvas: function prepareCanvas() {
            this.canvas = document.querySelector('#project-map');
            this.context = this.canvas.getContext('2d');

            this.drawMap();
        },
        drawMap: function drawMap() {
            var _this = this;

            var map = new Image();

            map.onload = function () {
                _this.context.drawImage(map, 0, 0, _this.canvas.width, _this.canvas.height);
            };

            map.src = '/img/map.png';
        },
        getCoordinates: function getCoordinates(mouse) {
            var rectangle = this.canvas.getBoundingClientRect();

            this.mouseX = accounting.formatNumber((mouse.clientX - rectangle.left) / rectangle.width, 4);
            this.mouseY = accounting.formatNumber((mouse.clientY - rectangle.top) / rectangle.height, 4);
        },
        plotMarker: function plotMarker() {
            var rectangle = this.canvas.getBoundingClientRect();

            this.context.fillStyle = '#FF0000';
            this.context.fillRect(rectangle.width * this.mouseX, rectangle.height * this.mouseY, 10, 10);

            this.$emit('plotted', {
                x: this.mouseX,
                y: this.mouseY
            });
        }
    },

    watch: {
        x: function x() {
            this.plotMarker();
        },
        y: function y() {
            this.plotMarker();
        }
    }
});

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\AidaMap\\FinancingSelection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FinancingSelection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58209432", Component.options)
  } else {
    hotAPI.reload("data-v-58209432", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\AidaMap\\Info.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Info.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-712dbbeb", Component.options)
  } else {
    hotAPI.reload("data-v-712dbbeb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\Erwin Paolo Yumul\\i.Tech\\sis\\resources\\assets\\js\\components\\AidaMap\\Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21d55080", Component.options)
  } else {
    hotAPI.reload("data-v-21d55080", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(27),
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
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "id": "aida-map-modal"
    }
  }, [_c('h4', {
    staticClass: "modal-title",
    slot: "header"
  }, [_vm._v("AIDA Map")]), _vm._v(" "), (_vm.message) ? _c('div', {
    staticClass: "alert alert-success"
  }, [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]) : _vm._e(), _vm._v(" "), (!_vm.financingType) ? _c('financing-selection', {
    attrs: {
      "financing-types": _vm.financingTypes
    },
    on: {
      "selected": _vm.getFinancingType
    }
  }) : _vm._e(), _vm._v(" "), (_vm.financingType) ? _c('aida-map-info', {
    attrs: {
      "unit": _vm.unit,
      "buyer": _vm.buyer,
      "financing-type": _vm.financingType
    }
  }) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "footer-note",
    slot: "footer"
  }, [_c('span', [_vm._v("\n            Date and time generated.\n            "), _c('strong', [_vm._v("Price are subject to change without prior notice.")])]), _vm._v(" "), _c('span', [_c('button', {
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
  }, [_vm._v("Close")]), _vm._v(" "), (_vm.financingType) ? _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.financingType = ''
      }
    }
  }, [_vm._v("Back")]) : _vm._e(), _vm._v(" "), (_vm.financingType) ? _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.save
    }
  }, [_vm._v("Save")]) : _vm._e()])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21d55080", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Click on the map to place a marker")]), _vm._v(" "), _c('canvas', {
    attrs: {
      "id": "project-map",
      "width": "500",
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

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', [_c('p', [_vm._v("Please select a financing type to proceed.")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.financingType),
      expression: "financingType"
    }],
    staticClass: "form-control",
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.financingType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.$emit('selected', _vm.financingType)
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Choose")]), _vm._v(" "), _vm._l((_vm.financingTypes), function(financingType) {
    return _c('option', {
      domProps: {
        "value": financingType
      }
    }, [_vm._v("\n                " + _vm._s(financingType) + "\n            ")])
  })], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58209432", module.exports)
  }
}

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Buyer's Computations For")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.last_name) + ", " + _vm._s(_vm.buyer.first_name))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.mobile))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.email))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.marital_status))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.financing_type))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.work_location))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.country))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.buyer.equity_type))])])])])]), _vm._v(" "), _c('div', {
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
      "src": _vm.path,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("Block and Lot")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.unit.block_lot))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Lot Area")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.unit.lot_area))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Lot Type")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.unit.lot_type))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Floor Area")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.unit.floor_area))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("House Model")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.unit.house_model))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Total Contract Price")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(_vm.unit.total_contract_price)))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Reservation Fee")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("currency")(_vm.unit.reservation_fee)))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("DownPayment and Loanable Amount")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('table', {
    staticClass: "table"
  }, [(_vm.unit.downpayment) ? _c('thead', [_c('tr', [_c('th', [_vm._v("Equity " + _vm._s(_vm.unit.downpayment.percentage) + "%")]), _vm._v(" "), _c('th', [_vm._v("Terms (Years)")]), _vm._v(" "), _c('th', [_vm._v("Amount/Month")])])]) : _vm._e(), _vm._v(" "), (_vm.unit.downpayment) ? _c('tbody', [_c('tr', [_c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm._f("currency")(_vm.unit.downpayment.equity)))]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm._f("currency")(_vm.unit.downpayment.term)))]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm._f("currency")(_vm.unit.downpayment.monthly)))])])]) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.unit.loans), function(loan) {
    return (loan.finance_type == _vm.financingType) ? _c('tr', [_c('td', [_vm._v(_vm._s(loan.percentage))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm._f("currency")(loan.total)))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm._f("currency")(loan.mri)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(loan.description))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(loan.monthly_percentage) + "%\n                        ")]), _c('td', [_vm._v(_vm._s(loan.years) + " years")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v(_vm._s(_vm._f("currency")(loan.monthly_amortization)))])]) : _vm._e()
  }))])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12 text-center"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Preferred mode of sending to clients")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_vm._m(4), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.sendEmail($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" Email\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.downloadPdf($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-file"
  }), _vm._v(" PDF\n                ")])]), _vm._v(" "), _c('form', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": "/aida-maps/pdf",
      "method": "post",
      "id": "pdf-form",
      "target": "_blank"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$http.defaults.headers.common['X-CSRF-TOKEN']),
      expression: "$http.defaults.headers.common['X-CSRF-TOKEN']"
    }],
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": (_vm.$http.defaults.headers.common['X-CSRF-TOKEN'])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        var $$exp = _vm.$http.defaults.headers.common,
          $$idx = 'X-CSRF-TOKEN';
        if (!Array.isArray($$exp)) {
          _vm.$http.defaults.headers.common['X-CSRF-TOKEN'] = $event.target.value
        } else {
          $$exp.splice($$idx, 1, $event.target.value)
        }
      }
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "value": "0",
      "name": "download"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.serializedData),
      expression: "serializedData"
    }],
    attrs: {
      "type": "hidden",
      "name": "serialized_data"
    },
    domProps: {
      "value": (_vm.serializedData)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.serializedData = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('form', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "action": "/aida-maps/pdf",
      "method": "post",
      "id": "pdf-form-email",
      "target": "_blank"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.$http.defaults.headers.common['X-CSRF-TOKEN']),
      expression: "$http.defaults.headers.common['X-CSRF-TOKEN']"
    }],
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": (_vm.$http.defaults.headers.common['X-CSRF-TOKEN'])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        var $$exp = _vm.$http.defaults.headers.common,
          $$idx = 'X-CSRF-TOKEN';
        if (!Array.isArray($$exp)) {
          _vm.$http.defaults.headers.common['X-CSRF-TOKEN'] = $event.target.value
        } else {
          $$exp.splice($$idx, 1, $event.target.value)
        }
      }
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "hidden",
      "value": "1",
      "name": "download"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.serializedData),
      expression: "serializedData"
    }],
    attrs: {
      "type": "hidden",
      "name": "serialized_data"
    },
    domProps: {
      "value": (_vm.serializedData)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.serializedData = $event.target.value
      }
    }
  })])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Developer's Information")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('td', [_vm._v("Developer Name")]), _vm._v(" "), _c('td', [_vm._v("Propety Company of Friends Inc.")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Project Name")]), _vm._v(" "), _c('td', [_vm._v("Lancaster New City")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Location")]), _vm._v(" "), _c('td', [_vm._v("Cavite")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Prepared By")]), _vm._v(" "), _c('td', [_vm._v("Hervie Fajardo")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Contact No.")]), _vm._v(" "), _c('td', [_vm._v("+63 917 872 0176")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Email")]), _vm._v(" "), _c('td', [_vm._v("hervie.fajardo@gmail.com")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("Percentage")]), _vm._v(" "), _c('td', [_vm._v("Loanable Amount")]), _vm._v(" "), _c('td', [_vm._v("MRI")]), _vm._v(" "), _c('td', [_vm._v("Description")]), _vm._v(" "), _c('td', [_vm._v("Monthly Percentage")]), _vm._v(" "), _c('td', [_vm._v("Terms")]), _vm._v(" "), _c('td', [_vm._v("Monthly Amortization")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('p', {
    staticClass: "heading"
  }, [_vm._v("Map of the Subdivision")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12 mb-20"
  }, [_c('img', {
    attrs: {
      "src": "/img/map.png",
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("Philippines 4103")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-primary"
  }, [_c('i', {
    staticClass: "fa fa-print"
  }), _vm._v(" Print\n                ")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-712dbbeb", module.exports)
  }
}

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ })
/******/ ]);