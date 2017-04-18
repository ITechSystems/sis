/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve 'file-loader' in 'C:\\wamp64\\www\\sis'\n    at factoryCallback (C:\\wamp64\\www\\sis\\node_modules\\webpack\\lib\\Compilation.js:260:39)\n    at factory (C:\\wamp64\\www\\sis\\node_modules\\webpack\\lib\\NormalModuleFactory.js:247:20)\n    at resolver (C:\\wamp64\\www\\sis\\node_modules\\webpack\\lib\\NormalModuleFactory.js:65:21)\n    at asyncLib.parallel (C:\\wamp64\\www\\sis\\node_modules\\webpack\\lib\\NormalModuleFactory.js:202:22)\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:3824:9\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:460:16\n    at iteratorCallback (C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:1032:13)\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:944:16\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:3821:13\n    at apply (C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:21:25)\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:56:12\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:1110:9\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:460:16\n    at iteratorCallback (C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:1032:13)\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:944:16\n    at C:\\wamp64\\www\\sis\\node_modules\\async\\dist\\async.js:1107:13\n    at resolver.resolve (C:\\wamp64\\www\\sis\\node_modules\\webpack\\lib\\NormalModuleFactory.js:273:20)\n    at onResolved (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\Resolver.js:70:11)\n    at loggingCallbackWrapper (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (C:\\wamp64\\www\\sis\\node_modules\\tapable\\lib\\Tapable.js:181:46)\n    at innerCallback (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\Resolver.js:125:19)\n    at loggingCallbackWrapper (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at C:\\wamp64\\www\\sis\\node_modules\\tapable\\lib\\Tapable.js:283:15\n    at C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at afterInnerCallback (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\Resolver.js:138:10)\n    at loggingCallbackWrapper (C:\\wamp64\\www\\sis\\node_modules\\enhanced-resolve\\lib\\createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (C:\\wamp64\\www\\sis\\node_modules\\tapable\\lib\\Tapable.js:181:46)");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {



/***/ })

/******/ });