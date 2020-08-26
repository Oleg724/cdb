/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main~slider","vendors~main","main~slider"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/functions/accordeon.js":
/*!***********************************!*\
  !*** ./js/functions/accordeon.js ***!
  \***********************************/
/*! exports provided: openPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPanel", function() { return openPanel; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var openPanel = function openPanel(e) {
  var target = e.target;
  var $panelHeadingDivs = document.querySelectorAll('.panel__heading');
  var $panelHeadingDiv = target.closest('.panel__heading');

  if (target.className === 'panel__link' || target.className === 'panel__icon') {
    var _iterator = _createForOfIteratorHelper($panelHeadingDivs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (!$panelHeadingDiv.classList.contains('in')) {
          item.classList.remove('in');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    $panelHeadingDiv.classList.toggle('in');
  }
};

/***/ }),

/***/ "./js/functions/add-new-class.js":
/*!***************************************!*\
  !*** ./js/functions/add-new-class.js ***!
  \***************************************/
/*! exports provided: addNewClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewClass", function() { return addNewClass; });
var addNewClass = function addNewClass(clazz, classToAdd, text) {
  var $nodes = document.querySelectorAll(clazz);
  $nodes.forEach(function (item) {
    if (item.innerHTML === text) {
      item.classList.add(classToAdd);
    }
  });
};

/***/ }),

/***/ "./js/functions/cart/add-item.js":
/*!***************************************!*\
  !*** ./js/functions/cart/add-item.js ***!
  \***************************************/
/*! exports provided: addItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
var addItem = function addItem(item, arr) {
  arr.push(item);
};

/***/ }),

/***/ "./js/functions/cart/check-item-in-localstorage.js":
/*!*********************************************************!*\
  !*** ./js/functions/cart/check-item-in-localstorage.js ***!
  \*********************************************************/
/*! exports provided: checkItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkItem", function() { return checkItem; });
var checkItem = function checkItem(item, arr) {
  return arr.includes(item);
};

/***/ }),

/***/ "./js/functions/cart/clear-cart.js":
/*!*****************************************!*\
  !*** ./js/functions/cart/clear-cart.js ***!
  \*****************************************/
/*! exports provided: clearCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony import */ var _get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items-from-localstorage */ "./js/functions/cart/get-items-from-localstorage.js");
/* harmony import */ var _refresh_cart_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-cart-counter */ "./js/functions/cart/refresh-cart-counter.js");
/* harmony import */ var _remove_item_from_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-item-from-localstorage */ "./js/functions/cart/remove-item-from-localstorage.js");
/* harmony import */ var _remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remove-all-child-nodes */ "./js/functions/remove-all-child-nodes.js");
/* harmony import */ var _show_empty_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-empty-cart */ "./js/functions/cart/show-empty-cart.js");





var clearCart = function clearCart(e) {
  var target = e.target;
  var localStorageItems = Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id');

  if (target.innerHTML === 'Clear cart' && localStorageItems) {
    var $parent = document.querySelector('.cart');
    Object(_remove_item_from_localstorage__WEBPACK_IMPORTED_MODULE_2__["removeItemFromLocalStorage"])('id');
    Object(_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_3__["removeAllChildNodes"])($parent, '.cart__item');
    Object(_show_empty_cart__WEBPACK_IMPORTED_MODULE_4__["showEmptyCart"])();
    Object(_refresh_cart_counter__WEBPACK_IMPORTED_MODULE_1__["refreshCartCounter"])();
  }
};

/***/ }),

/***/ "./js/functions/cart/close-cart.js":
/*!*****************************************!*\
  !*** ./js/functions/cart/close-cart.js ***!
  \*****************************************/
/*! exports provided: closeCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeCart", function() { return closeCart; });
var closeCart = function closeCart() {
  var $modalCartWrapper = document.querySelector('.cart-wrapper');
  $modalCartWrapper ? $modalCartWrapper.remove() : null;
};

/***/ }),

/***/ "./js/functions/cart/create-cart-counter.js":
/*!**************************************************!*\
  !*** ./js/functions/cart/create-cart-counter.js ***!
  \**************************************************/
/*! exports provided: createCartCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCartCounter", function() { return createCartCounter; });
/* harmony import */ var _get_cart_items_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-cart-items-number */ "./js/functions/cart/get-cart-items-number.js");
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");


var createCartCounter = function createCartCounter() {
  var number = Object(_get_cart_items_number__WEBPACK_IMPORTED_MODULE_0__["getCartItemsNumber"])();
  Object(_create_div__WEBPACK_IMPORTED_MODULE_1__["createDiv"])('#cart', 'top-panel__counter', "(".concat(number, ")"));
};

/***/ }),

/***/ "./js/functions/cart/create-cart.js":
/*!******************************************!*\
  !*** ./js/functions/cart/create-cart.js ***!
  \******************************************/
/*! exports provided: createCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCart", function() { return createCart; });
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");
/* harmony import */ var _remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove-all-child-nodes */ "./js/functions/remove-all-child-nodes.js");


var createCart = function createCart(elem) {
  var $item = document.querySelector('#' + elem);
  var $cloned = $item.cloneNode(true);
  var $modal = document.querySelector('.cart');
  $cloned.classList.add('cart__item');
  $modal.appendChild($cloned);
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart__item', 'cart__quantity');
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart__quantity', 'cart__quantity-change');
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart__quantity-change', 'cart__plus');
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart__quantity-change', 'cart__minus');
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart__quantity', 'cart__quantity-value');
  Object(_remove_all_child_nodes__WEBPACK_IMPORTED_MODULE_1__["removeAllChildNodes"])($modal, '.rating');
};

/***/ }),

/***/ "./js/functions/cart/decrease-item-quantity.js":
/*!*****************************************************!*\
  !*** ./js/functions/cart/decrease-item-quantity.js ***!
  \*****************************************************/
/*! exports provided: decreaseItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseItemQuantity", function() { return decreaseItemQuantity; });
var decreaseItemQuantity = function decreaseItemQuantity(quantity) {
  return quantity >= 1 ? --quantity : 0;
};

/***/ }),

/***/ "./js/functions/cart/display-price.js":
/*!********************************************!*\
  !*** ./js/functions/cart/display-price.js ***!
  \********************************************/
/*! exports provided: displayPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPrice", function() { return displayPrice; });
var displayPrice = function displayPrice(elem, num) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '$';
  elem.innerHTML = text + num + ' USD';
};

/***/ }),

/***/ "./js/functions/cart/display-quantity.js":
/*!***********************************************!*\
  !*** ./js/functions/cart/display-quantity.js ***!
  \***********************************************/
/*! exports provided: displayQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayQuantity", function() { return displayQuantity; });
var displayQuantity = function displayQuantity(elem, num) {
  elem.innerHTML = num + ' pcs';
};

/***/ }),

/***/ "./js/functions/cart/get-cart-items-number.js":
/*!****************************************************!*\
  !*** ./js/functions/cart/get-cart-items-number.js ***!
  \****************************************************/
/*! exports provided: getCartItemsNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartItemsNumber", function() { return getCartItemsNumber; });
/* harmony import */ var _get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items-from-localstorage */ "./js/functions/cart/get-items-from-localstorage.js");

var getCartItemsNumber = function getCartItemsNumber() {
  return Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id') ? Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id').length : 0;
};

/***/ }),

/***/ "./js/functions/cart/get-items-from-localstorage.js":
/*!**********************************************************!*\
  !*** ./js/functions/cart/get-items-from-localstorage.js ***!
  \**********************************************************/
/*! exports provided: getItemsFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsFromLocalStorage", function() { return getItemsFromLocalStorage; });
var getItemsFromLocalStorage = function getItemsFromLocalStorage(id) {
  return JSON.parse(localStorage.getItem(id));
};

/***/ }),

/***/ "./js/functions/cart/get-price.js":
/*!****************************************!*\
  !*** ./js/functions/cart/get-price.js ***!
  \****************************************/
/*! exports provided: getPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrice", function() { return getPrice; });
var getPrice = function getPrice(total, quantity) {
  return quantity >= 1 ? +(total / quantity).toFixed(2) : 0;
};

/***/ }),

/***/ "./js/functions/cart/get-selected-items-array.js":
/*!*******************************************************!*\
  !*** ./js/functions/cart/get-selected-items-array.js ***!
  \*******************************************************/
/*! exports provided: getSelectedItemsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedItemsArray", function() { return getSelectedItemsArray; });
/* harmony import */ var _get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items-from-localstorage */ "./js/functions/cart/get-items-from-localstorage.js");

var getSelectedItemsArray = function getSelectedItemsArray() {
  return localStorage.getItem('id') ? Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id') : [];
};

/***/ }),

/***/ "./js/functions/cart/get-total-item-price.js":
/*!***************************************************!*\
  !*** ./js/functions/cart/get-total-item-price.js ***!
  \***************************************************/
/*! exports provided: getTotalItemPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalItemPrice", function() { return getTotalItemPrice; });
var getTotalItemPrice = function getTotalItemPrice(elem, quantity) {
  var text = elem.innerHTML;
  var number = +text.slice(1, -4);
  return +(number * quantity).toFixed(2);
};

/***/ }),

/***/ "./js/functions/cart/increase-item-quantity.js":
/*!*****************************************************!*\
  !*** ./js/functions/cart/increase-item-quantity.js ***!
  \*****************************************************/
/*! exports provided: increaseItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseItemQuantity", function() { return increaseItemQuantity; });
var increaseItemQuantity = function increaseItemQuantity(item, obj) {
  ++obj[item];
};

/***/ }),

/***/ "./js/functions/cart/open-cart.js":
/*!****************************************!*\
  !*** ./js/functions/cart/open-cart.js ***!
  \****************************************/
/*! exports provided: openCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCart", function() { return openCart; });
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");
/* harmony import */ var _get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-items-from-localstorage */ "./js/functions/cart/get-items-from-localstorage.js");
/* harmony import */ var _add_new_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-new-class */ "./js/functions/add-new-class.js");
/* harmony import */ var _show_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-cart */ "./js/functions/cart/show-cart.js");
/* harmony import */ var _show_empty_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-empty-cart */ "./js/functions/cart/show-empty-cart.js");





var openCart = function openCart(e) {
  var target = e.target;
  var $itemNumber = document.querySelector('.top-panel__counter');
  var $cartLogo = document.querySelector('#cart .top-panel__logo');

  if (target.id === 'cart' || target.innerText === 'OPEN CART' || target.innerHTML === 'Cart' || target === $cartLogo || target === $itemNumber) {
    var $formField = document.querySelector('.search-form');
    var clazzMod = 'modal-close-btn--bottom-right';
    var $modalWrap = document.querySelector('.modal-shop-wrapper');

    if ($formField.style.display === 'flex') {
      $formField.style.display = 'none';
    }

    if ($modalWrap) {
      $modalWrap.remove('.modal-shop-wrapper');
    }

    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('#products', 'cart-wrapper');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart-wrapper', 'cart');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart', 'modal-close-btn', 'Close');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart', 'modal-close-btn', 'Clear cart');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart', 'modal-close-btn', 'Go shopping');
    Object(_add_new_class__WEBPACK_IMPORTED_MODULE_2__["addNewClass"])('.modal-close-btn', clazzMod, 'Go shopping');
    Object(_add_new_class__WEBPACK_IMPORTED_MODULE_2__["addNewClass"])('.modal-close-btn', 'modal-close-btn--bottom', 'Clear cart');
    var localStorageItems = Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_1__["getItemsFromLocalStorage"])('id');
    localStorageItems ? Object(_show_cart__WEBPACK_IMPORTED_MODULE_3__["showCart"])(localStorageItems) : Object(_show_empty_cart__WEBPACK_IMPORTED_MODULE_4__["showEmptyCart"])();
  }
};

/***/ }),

/***/ "./js/functions/cart/proccess-cart.js":
/*!********************************************!*\
  !*** ./js/functions/cart/proccess-cart.js ***!
  \********************************************/
/*! exports provided: proccessCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proccessCart", function() { return proccessCart; });
/* harmony import */ var _cart_refresh_cart_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/refresh-cart-counter */ "./js/functions/cart/refresh-cart-counter.js");
/* harmony import */ var _refresh_item_price_quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-item-price-quantity */ "./js/functions/cart/refresh-item-price-quantity.js");
/* harmony import */ var _remove_item_from_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-item-from-cart */ "./js/functions/cart/remove-item-from-cart.js");
/* harmony import */ var _shop_add_item_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop/add-item-to-cart */ "./js/functions/shop/add-item-to-cart.js");
/* harmony import */ var _set_item_to_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-item-to-localstorage */ "./js/functions/cart/set-item-to-localstorage.js");
/* harmony import */ var _get_selected_items_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-selected-items-array */ "./js/functions/cart/get-selected-items-array.js");






var proccessCart = function proccessCart(e) {
  var target = e.target;
  var className = target.className;

  if (target.innerHTML === 'Add to cart' || className === 'cart__plus' || className === 'cart__minus') {
    var $selectedItem = target.closest('.slider-item');
    var selectedItemsArray = Object(_get_selected_items_array__WEBPACK_IMPORTED_MODULE_5__["getSelectedItemsArray"])();
    className === 'cart__minus' ? Object(_remove_item_from_cart__WEBPACK_IMPORTED_MODULE_2__["removeItemFromCart"])(selectedItemsArray, $selectedItem) : Object(_shop_add_item_to_cart__WEBPACK_IMPORTED_MODULE_3__["addItemToCart"])(selectedItemsArray, $selectedItem);
    Object(_set_item_to_localstorage__WEBPACK_IMPORTED_MODULE_4__["setItemToLocalStorage"])('id', selectedItemsArray);
    Object(_cart_refresh_cart_counter__WEBPACK_IMPORTED_MODULE_0__["refreshCartCounter"])();

    if (target.innerHTML !== 'Add to cart') {
      Object(_refresh_item_price_quantity__WEBPACK_IMPORTED_MODULE_1__["refreshItemPriceQuantity"])(e);
    }
  }
};

/***/ }),

/***/ "./js/functions/cart/refresh-cart-counter.js":
/*!***************************************************!*\
  !*** ./js/functions/cart/refresh-cart-counter.js ***!
  \***************************************************/
/*! exports provided: refreshCartCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshCartCounter", function() { return refreshCartCounter; });
/* harmony import */ var _get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items-from-localstorage */ "./js/functions/cart/get-items-from-localstorage.js");

var refreshCartCounter = function refreshCartCounter() {
  var $itemNumber = document.querySelector('.top-panel__counter');

  if (Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id')) {
    $itemNumber.innerHTML = "(".concat(Object(_get_items_from_localstorage__WEBPACK_IMPORTED_MODULE_0__["getItemsFromLocalStorage"])('id').length, ")");
  } else {
    $itemNumber.innerHTML = '(0)';
  }
};

/***/ }),

/***/ "./js/functions/cart/refresh-item-price-quantity.js":
/*!**********************************************************!*\
  !*** ./js/functions/cart/refresh-item-price-quantity.js ***!
  \**********************************************************/
/*! exports provided: refreshItemPriceQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshItemPriceQuantity", function() { return refreshItemPriceQuantity; });
/* harmony import */ var _show_empty_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-empty-cart */ "./js/functions/cart/show-empty-cart.js");
/* harmony import */ var _get_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-price */ "./js/functions/cart/get-price.js");
/* harmony import */ var _get_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-element */ "./js/functions/get-element.js");
/* harmony import */ var _remove_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../remove-node */ "./js/functions/remove-node.js");
/* harmony import */ var _display_quantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-quantity */ "./js/functions/cart/display-quantity.js");
/* harmony import */ var _display_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-price */ "./js/functions/cart/display-price.js");
/* harmony import */ var _decrease_item_quantity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decrease-item-quantity */ "./js/functions/cart/decrease-item-quantity.js");







var refreshItemPriceQuantity = function refreshItemPriceQuantity(e) {
  var target = e.target;
  var $parent = target.closest('.cart__item');
  var $itemQuantity = $parent.querySelector('.cart__quantity-value');
  var $itemPrice = $parent.querySelector('.slider-item__price');
  var itemPrice = +$itemPrice.innerHTML.slice(1, -4);
  var itemQuantity = +$itemQuantity.innerHTML.slice(0, -4);
  var price = Object(_get_price__WEBPACK_IMPORTED_MODULE_1__["getPrice"])(itemPrice, itemQuantity);
  var $totalPrice = Object(_get_element__WEBPACK_IMPORTED_MODULE_2__["getElement"])('.cart__total-price');
  var totalPrice = +$totalPrice.innerHTML.slice(8, -4);
  var newQuantity;
  var newTotalCartPrice;

  if (target.className === 'cart__plus') {
    newQuantity = ++itemQuantity;
    newTotalCartPrice = +(totalPrice + price).toFixed(2);
  } else if (target.className === 'cart__minus') {
    newQuantity = Object(_decrease_item_quantity__WEBPACK_IMPORTED_MODULE_6__["decreaseItemQuantity"])(itemQuantity);
    newTotalCartPrice = +(totalPrice - price).toFixed(2);
  }

  var newPrice = (price * newQuantity).toFixed(2);
  Object(_display_quantity__WEBPACK_IMPORTED_MODULE_4__["displayQuantity"])($itemQuantity, newQuantity);
  Object(_display_price__WEBPACK_IMPORTED_MODULE_5__["displayPrice"])($itemPrice, newPrice);
  Object(_display_price__WEBPACK_IMPORTED_MODULE_5__["displayPrice"])($totalPrice, newTotalCartPrice, 'Total: $');

  if (newPrice === '0.00') {
    Object(_remove_node__WEBPACK_IMPORTED_MODULE_3__["removeNode"])($parent);
  }

  if (newTotalCartPrice === 0) {
    Object(_show_empty_cart__WEBPACK_IMPORTED_MODULE_0__["showEmptyCart"])();
  }
};

/***/ }),

/***/ "./js/functions/cart/remove-item-from-cart.js":
/*!****************************************************!*\
  !*** ./js/functions/cart/remove-item-from-cart.js ***!
  \****************************************************/
/*! exports provided: removeItemFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCart", function() { return removeItemFromCart; });
var removeItemFromCart = function removeItemFromCart(arr, selectedItem) {
  var indexToRemove = arr.indexOf(selectedItem.id);
  arr.splice(indexToRemove, 1);
};

/***/ }),

/***/ "./js/functions/cart/remove-item-from-localstorage.js":
/*!************************************************************!*\
  !*** ./js/functions/cart/remove-item-from-localstorage.js ***!
  \************************************************************/
/*! exports provided: removeItemFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromLocalStorage", function() { return removeItemFromLocalStorage; });
var removeItemFromLocalStorage = function removeItemFromLocalStorage(id) {
  localStorage.removeItem(id);
};

/***/ }),

/***/ "./js/functions/cart/set-item-quantity.js":
/*!************************************************!*\
  !*** ./js/functions/cart/set-item-quantity.js ***!
  \************************************************/
/*! exports provided: setItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItemQuantity", function() { return setItemQuantity; });
var setItemQuantity = function setItemQuantity(item, obj, num) {
  obj[item] = num;
};

/***/ }),

/***/ "./js/functions/cart/set-item-to-localstorage.js":
/*!*******************************************************!*\
  !*** ./js/functions/cart/set-item-to-localstorage.js ***!
  \*******************************************************/
/*! exports provided: setItemToLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItemToLocalStorage", function() { return setItemToLocalStorage; });
var setItemToLocalStorage = function setItemToLocalStorage(id, arr) {
  localStorage.setItem(id, JSON.stringify(arr));
};

/***/ }),

/***/ "./js/functions/cart/show-cart.js":
/*!****************************************!*\
  !*** ./js/functions/cart/show-cart.js ***!
  \****************************************/
/*! exports provided: showCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCart", function() { return showCart; });
/* harmony import */ var _check_item_in_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-item-in-localstorage */ "./js/functions/cart/check-item-in-localstorage.js");
/* harmony import */ var _increase_item_quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./increase-item-quantity */ "./js/functions/cart/increase-item-quantity.js");
/* harmony import */ var _add_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-item */ "./js/functions/cart/add-item.js");
/* harmony import */ var _set_item_quantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-item-quantity */ "./js/functions/cart/set-item-quantity.js");
/* harmony import */ var _create_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-cart */ "./js/functions/cart/create-cart.js");
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");
/* harmony import */ var _get_total_item_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-total-item-price */ "./js/functions/cart/get-total-item-price.js");
/* harmony import */ var _display_quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-quantity */ "./js/functions/cart/display-quantity.js");
/* harmony import */ var _display_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-price */ "./js/functions/cart/display-price.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var showCart = function showCart(localStorageItems) {
  var checkedItems = [];
  var checkedItemsQuantity = {};

  var _iterator = _createForOfIteratorHelper(localStorageItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (Object(_check_item_in_localstorage__WEBPACK_IMPORTED_MODULE_0__["checkItem"])(item, checkedItems)) {
        Object(_increase_item_quantity__WEBPACK_IMPORTED_MODULE_1__["increaseItemQuantity"])(item, checkedItemsQuantity);
      } else {
        Object(_add_item__WEBPACK_IMPORTED_MODULE_2__["addItem"])(item, checkedItems);
        Object(_set_item_quantity__WEBPACK_IMPORTED_MODULE_3__["setItemQuantity"])(item, checkedItemsQuantity, 1);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
  checkedItems.forEach(_create_cart__WEBPACK_IMPORTED_MODULE_4__["createCart"]);
  Object(_create_div__WEBPACK_IMPORTED_MODULE_5__["createDiv"])('.cart', 'cart__item');
  Object(_create_div__WEBPACK_IMPORTED_MODULE_5__["createDiv"])('.cart__item', 'cart__total-price');
  var $cartValueList = document.querySelectorAll('.cart__quantity-value');
  var $itemsInCart = document.querySelectorAll('.cart__item');
  var $modalCart = document.querySelector('.cart');
  var $itemsPriceList = $modalCart.querySelectorAll('.slider-item__price');
  var total = 0;

  for (var i = 0; i < $itemsInCart.length; i++) {
    for (var key in checkedItemsQuantity) {
      var $price = $itemsPriceList[i];
      var quantity = checkedItemsQuantity[key];

      if ($itemsInCart[i].id === key) {
        var totalItemPrice = Object(_get_total_item_price__WEBPACK_IMPORTED_MODULE_6__["getTotalItemPrice"])($price, quantity);
        total += totalItemPrice;
        Object(_display_quantity__WEBPACK_IMPORTED_MODULE_7__["displayQuantity"])($cartValueList[i], quantity);
        Object(_display_price__WEBPACK_IMPORTED_MODULE_8__["displayPrice"])($price, totalItemPrice);
      }
    }
  }

  var $lastItem = $itemsInCart[$itemsInCart.length - 1];
  var $totalPrice = $lastItem.querySelector('.cart__total-price');
  Object(_display_price__WEBPACK_IMPORTED_MODULE_8__["displayPrice"])($totalPrice, total, 'Total: $');
};

/***/ }),

/***/ "./js/functions/cart/show-empty-cart.js":
/*!**********************************************!*\
  !*** ./js/functions/cart/show-empty-cart.js ***!
  \**********************************************/
/*! exports provided: showEmptyCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEmptyCart", function() { return showEmptyCart; });
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");

var showEmptyCart = function showEmptyCart() {
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart', 'cart__text', "Cart is empty, let's go shopping =))");
  Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.cart', 'cart__img');
};

/***/ }),

/***/ "./js/functions/change-header-color.js":
/*!*********************************************!*\
  !*** ./js/functions/change-header-color.js ***!
  \*********************************************/
/*! exports provided: changeHeaderColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHeaderColor", function() { return changeHeaderColor; });
var changeHeaderColor = function changeHeaderColor() {
  var $header = document.querySelector('.header');
  window.pageYOffset === 0 ? $header.classList.remove('header--bg-green') : $header.classList.add('header--bg-green');
};

/***/ }),

/***/ "./js/functions/close-burger-menu.js":
/*!*******************************************!*\
  !*** ./js/functions/close-burger-menu.js ***!
  \*******************************************/
/*! exports provided: closeBurgerMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBurgerMenu", function() { return closeBurgerMenu; });
var closeBurgerMenu = function closeBurgerMenu() {
  var $header = document.querySelector('.header');
  var $navBtn = $header.querySelector('#navBtn');
  $navBtn.checked = false;
};

/***/ }),

/***/ "./js/functions/create-div.js":
/*!************************************!*\
  !*** ./js/functions/create-div.js ***!
  \************************************/
/*! exports provided: createDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDiv", function() { return createDiv; });
var createDiv = function createDiv(parentID, className, innerText) {
  var $parentList = document.querySelectorAll(parentID);
  var $newDiv = document.createElement('div');
  var $parent = !$parentList[$parentList.length - 1] ? $parentList[0] : $parentList[$parentList.length - 1];
  $newDiv.classList.add(className);
  innerText ? $newDiv.innerHTML = innerText : null;
  $parent.appendChild($newDiv);
};

/***/ }),

/***/ "./js/functions/get-element.js":
/*!*************************************!*\
  !*** ./js/functions/get-element.js ***!
  \*************************************/
/*! exports provided: getElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
var getElement = function getElement(clazz) {
  return document.querySelector(clazz);
};

/***/ }),

/***/ "./js/functions/hidden-blocks/hide-blocks.js":
/*!***************************************************!*\
  !*** ./js/functions/hidden-blocks/hide-blocks.js ***!
  \***************************************************/
/*! exports provided: hideBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideBlocks", function() { return hideBlocks; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var hideBlocks = function hideBlocks(e, list) {
  var target = e.target;

  if (target.classList.contains('hidden-blocks__title')) {
    var _iterator = _createForOfIteratorHelper(list),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.style.opacity = '0';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};

/***/ }),

/***/ "./js/functions/hidden-blocks/show-blocks.js":
/*!***************************************************!*\
  !*** ./js/functions/hidden-blocks/show-blocks.js ***!
  \***************************************************/
/*! exports provided: showBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBlock", function() { return showBlock; });
var showBlock = function showBlock(e, titles, list) {
  var target = e.target;

  for (var i = 0; i < titles.length; i++) {
    if (target.htmlFor === titles[i].htmlFor) {
      list[i].style.opacity = '1';
    }
  }
};

/***/ }),

/***/ "./js/functions/hidden-blocks/show-current-block.js":
/*!**********************************************************!*\
  !*** ./js/functions/hidden-blocks/show-current-block.js ***!
  \**********************************************************/
/*! exports provided: showCurrentBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCurrentBlock", function() { return showCurrentBlock; });
/* harmony import */ var _hide_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-blocks */ "./js/functions/hidden-blocks/hide-blocks.js");
/* harmony import */ var _show_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-blocks */ "./js/functions/hidden-blocks/show-blocks.js");


var showCurrentBlock = function showCurrentBlock(e, titles, list) {
  Object(_hide_blocks__WEBPACK_IMPORTED_MODULE_0__["hideBlocks"])(e, list);
  Object(_show_blocks__WEBPACK_IMPORTED_MODULE_1__["showBlock"])(e, titles, list);
};

/***/ }),

/***/ "./js/functions/login-form-email-input/close-confirm-window.js":
/*!*********************************************************************!*\
  !*** ./js/functions/login-form-email-input/close-confirm-window.js ***!
  \*********************************************************************/
/*! exports provided: closeConfirmWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeConfirmWindow", function() { return closeConfirmWindow; });
var closeConfirmWindow = function closeConfirmWindow(elem, classToRemove) {
  elem.classList.remove(classToRemove);
};

/***/ }),

/***/ "./js/functions/login-form-reset-password/close-reset-window.js":
/*!**********************************************************************!*\
  !*** ./js/functions/login-form-reset-password/close-reset-window.js ***!
  \**********************************************************************/
/*! exports provided: closeResetWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeResetWindow", function() { return closeResetWindow; });
var closeResetWindow = function closeResetWindow(e, elem) {
  elem.classList.remove('modal-login__password-reset--visible');
};

/***/ }),

/***/ "./js/functions/login-form-reset-password/open-reset-window.js":
/*!*********************************************************************!*\
  !*** ./js/functions/login-form-reset-password/open-reset-window.js ***!
  \*********************************************************************/
/*! exports provided: openResetWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openResetWindow", function() { return openResetWindow; });
var openResetWindow = function openResetWindow(e, elem) {
  if (e.target.className === 'modal-login__link') {
    elem.classList.add('modal-login__password-reset--visible');
  }
};

/***/ }),

/***/ "./js/functions/login-form-tabs/open-tab.js":
/*!**************************************************!*\
  !*** ./js/functions/login-form-tabs/open-tab.js ***!
  \**************************************************/
/*! exports provided: openTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony import */ var _remove_tab_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-tab-class */ "./js/functions/login-form-tabs/remove-tab-class.js");

var openTab = function openTab(e) {
  var target = e.target;
  var $formList = document.querySelectorAll('.modal-login__tab');
  var $switcherList = document.querySelectorAll('.switcher__item');
  var classToShow = 'modal-login__tab--show';
  var classWhite = 'switcher__item--white';
  Object(_remove_tab_class__WEBPACK_IMPORTED_MODULE_0__["removeTabClass"])($switcherList, classWhite);
  target.classList.add(classWhite);
  Object(_remove_tab_class__WEBPACK_IMPORTED_MODULE_0__["removeTabClass"])($formList, classToShow);
  var targetIndex = Array.prototype.indexOf.call($switcherList, target);
  var $formToShow = $formList[targetIndex];
  $formToShow.classList.add(classToShow);
};

/***/ }),

/***/ "./js/functions/login-form-tabs/remove-tab-class.js":
/*!**********************************************************!*\
  !*** ./js/functions/login-form-tabs/remove-tab-class.js ***!
  \**********************************************************/
/*! exports provided: removeTabClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabClass", function() { return removeTabClass; });
var removeTabClass = function removeTabClass(arr, clazz) {
  arr.forEach(function (item) {
    item.classList.remove(clazz);
  });
};

/***/ }),

/***/ "./js/functions/login-form/check-form-fill.js":
/*!****************************************************!*\
  !*** ./js/functions/login-form/check-form-fill.js ***!
  \****************************************************/
/*! exports provided: checkFormFill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFormFill", function() { return checkFormFill; });
var checkFormFill = function checkFormFill(elem) {
  var $parent = elem.parentNode;
  var $list = $parent.childNodes;
  var $confirmWindowText = document.querySelector('.confirm-window__text');

  for (var i = 0; i < $list.length; i++) {
    if ($list[i].tagName === 'INPUT' && $list[i].value === "") {
      $confirmWindowText.textContent = "Please, fill all fields";
      break;
    } else if ($list[i].tagName === 'INPUT' && $list[i].value !== "") {
      if ($list[i].type === 'email' && $list[i].value.indexOf('@') < 1) {
        $confirmWindowText.textContent = "Please, fill all fields";
        break;
      }

      $confirmWindowText.textContent = 'Data sent successfully!';
    }
  }
};

/***/ }),

/***/ "./js/functions/login-form/close-login-modal.js":
/*!******************************************************!*\
  !*** ./js/functions/login-form/close-login-modal.js ***!
  \******************************************************/
/*! exports provided: closeLoginModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeLoginModal", function() { return closeLoginModal; });
var closeLoginModal = function closeLoginModal(e, elem) {
  var target = e.target;

  if (target === elem) {
    var $modalWindow = document.querySelector('.modal-login');
    $modalWindow.style.visibility = 'hidden';
  }
};

/***/ }),

/***/ "./js/functions/login-form/open-confirm-window.js":
/*!********************************************************!*\
  !*** ./js/functions/login-form/open-confirm-window.js ***!
  \********************************************************/
/*! exports provided: openConfirmWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openConfirmWindow", function() { return openConfirmWindow; });
/* harmony import */ var _check_form_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-form-fill */ "./js/functions/login-form/check-form-fill.js");
/* harmony import */ var _login_form_email_input_close_confirm_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-form-email-input/close-confirm-window */ "./js/functions/login-form-email-input/close-confirm-window.js");


var openConfirmWindow = function openConfirmWindow(e) {
  e.preventDefault();
  var target = e.target;
  var displayClass = 'confirm-window--display';
  var $confirmWindow = document.querySelector('.confirm-window');

  if (target.classList.contains('form__btn') || target.classList.contains('form-btn')) {
    Object(_check_form_fill__WEBPACK_IMPORTED_MODULE_0__["checkFormFill"])(target, $confirmWindow);
    $confirmWindow.classList.add(displayClass);
    setTimeout(_login_form_email_input_close_confirm_window__WEBPACK_IMPORTED_MODULE_1__["closeConfirmWindow"], 2500, $confirmWindow, displayClass);
  }

  ;
};

/***/ }),

/***/ "./js/functions/login-form/open-login-modal.js":
/*!*****************************************************!*\
  !*** ./js/functions/login-form/open-login-modal.js ***!
  \*****************************************************/
/*! exports provided: openLoginModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLoginModal", function() { return openLoginModal; });
/* harmony import */ var _close_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../close-burger-menu */ "./js/functions/close-burger-menu.js");

var openLoginModal = function openLoginModal(e, elem) {
  e.preventDefault();
  Object(_close_burger_menu__WEBPACK_IMPORTED_MODULE_0__["closeBurgerMenu"])();
  var target = e.target;
  var $elemTitle = document.querySelector('#login-text');
  var $elemLogo = elem.querySelector('.top-panel__logo');
  var $formField = document.querySelector('.search-form');

  if (target === elem || target === $elemTitle || target === $elemLogo) {
    var $modalWindow = document.querySelector('.modal-login');
    $modalWindow.style.visibility = 'visible';
  }

  if ($formField.style.display === 'flex') {
    $formField.style.display = 'none';
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/add-class.js":
/*!**********************************************!*\
  !*** ./js/functions/rate-stars/add-class.js ***!
  \**********************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
var addClass = function addClass(arr, className) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add(className);
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/clear-rate.js":
/*!***********************************************!*\
  !*** ./js/functions/rate-stars/clear-rate.js ***!
  \***********************************************/
/*! exports provided: clearRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRate", function() { return clearRate; });
/* harmony import */ var _add_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-class */ "./js/functions/rate-stars/add-class.js");
/* harmony import */ var _mouse_out_active_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse-out-active-class */ "./js/functions/rate-stars/mouse-out-active-class.js");


var clearRate = function clearRate(e) {
  var target = e.target;

  if (target.classList.contains('rating__path')) {
    var $ratingParent = target.parentNode.parentNode.parentNode;
    var $ratingItem = $ratingParent.querySelectorAll('.rating__path');
    Object(_add_class__WEBPACK_IMPORTED_MODULE_0__["addClass"])($ratingItem, 'active');
    Object(_mouse_out_active_class__WEBPACK_IMPORTED_MODULE_1__["mouseOutActiveClass"])($ratingItem);
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/mouse-out-active-class.js":
/*!***********************************************************!*\
  !*** ./js/functions/rate-stars/mouse-out-active-class.js ***!
  \***********************************************************/
/*! exports provided: mouseOutActiveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOutActiveClass", function() { return mouseOutActiveClass; });
var mouseOutActiveClass = function mouseOutActiveClass(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].classList.contains('current-active')) {
      break;
    } else {
      arr[i].classList.remove('active');
    }
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/mouse-over-active-class.js":
/*!************************************************************!*\
  !*** ./js/functions/rate-stars/mouse-over-active-class.js ***!
  \************************************************************/
/*! exports provided: mouseOverActiveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseOverActiveClass", function() { return mouseOverActiveClass; });
var mouseOverActiveClass = function mouseOverActiveClass(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('active')) {
      break;
    } else {
      arr[i].classList.add('active');
    }
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/remove-class.js":
/*!*************************************************!*\
  !*** ./js/functions/rate-stars/remove-class.js ***!
  \*************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
var removeClass = function removeClass(arr, clazz) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove(clazz);
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/set-rate.js":
/*!*********************************************!*\
  !*** ./js/functions/rate-stars/set-rate.js ***!
  \*********************************************/
/*! exports provided: setRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRate", function() { return setRate; });
/* harmony import */ var _remove_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-class */ "./js/functions/rate-stars/remove-class.js");

var setRate = function setRate(e) {
  var target = e.target;

  if (target.classList.contains('rating__path')) {
    var $ratingParent = target.parentNode.parentNode.parentNode;
    var $ratingItem = $ratingParent.querySelectorAll('.rating__path');
    Object(_remove_class__WEBPACK_IMPORTED_MODULE_0__["removeClass"])($ratingItem, 'current-active');
    target.classList.add('active', 'current-active');
  }
};

/***/ }),

/***/ "./js/functions/rate-stars/show-rate.js":
/*!**********************************************!*\
  !*** ./js/functions/rate-stars/show-rate.js ***!
  \**********************************************/
/*! exports provided: showRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRate", function() { return showRate; });
/* harmony import */ var _remove_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-class */ "./js/functions/rate-stars/remove-class.js");
/* harmony import */ var _mouse_over_active_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse-over-active-class */ "./js/functions/rate-stars/mouse-over-active-class.js");


var showRate = function showRate(e) {
  var target = e.target;
  var $ratingItem;

  if (target.classList.contains('rating__path')) {
    var $ratingParent = target.parentNode.parentNode.parentNode;
    $ratingItem = $ratingParent.querySelectorAll('.rating__path');
    Object(_remove_class__WEBPACK_IMPORTED_MODULE_0__["removeClass"])($ratingItem, 'active');
    target.classList.add('active');
    Object(_mouse_over_active_class__WEBPACK_IMPORTED_MODULE_1__["mouseOverActiveClass"])($ratingItem);
  }

  return $ratingItem;
};

/***/ }),

/***/ "./js/functions/remove-all-child-nodes.js":
/*!************************************************!*\
  !*** ./js/functions/remove-all-child-nodes.js ***!
  \************************************************/
/*! exports provided: removeAllChildNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllChildNodes", function() { return removeAllChildNodes; });
var removeAllChildNodes = function removeAllChildNodes(elem, clazz) {
  var $nodes = elem.querySelectorAll(clazz);
  $nodes.forEach(function ($node) {
    return $node.remove();
  });
};

/***/ }),

/***/ "./js/functions/remove-node.js":
/*!*************************************!*\
  !*** ./js/functions/remove-node.js ***!
  \*************************************/
/*! exports provided: removeNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
var removeNode = function removeNode(elem) {
  elem.parentNode.removeChild(elem);
};

/***/ }),

/***/ "./js/functions/scroll-to-anchor.js":
/*!******************************************!*\
  !*** ./js/functions/scroll-to-anchor.js ***!
  \******************************************/
/*! exports provided: scrollToAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToAnchor", function() { return scrollToAnchor; });
var scrollToAnchor = function scrollToAnchor(e) {
  e.preventDefault();
  var target = e.target;

  if (target.hasAttribute('href')) {
    var blockID = target.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/***/ }),

/***/ "./js/functions/search-form/close-search-field.js":
/*!********************************************************!*\
  !*** ./js/functions/search-form/close-search-field.js ***!
  \********************************************************/
/*! exports provided: closeSearchField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSearchField", function() { return closeSearchField; });
var closeSearchField = function closeSearchField() {
  var $formField = document.querySelector('.search-form');
  $formField.style.display = 'none';
};

/***/ }),

/***/ "./js/functions/search-form/open-search-field.js":
/*!*******************************************************!*\
  !*** ./js/functions/search-form/open-search-field.js ***!
  \*******************************************************/
/*! exports provided: openSearchField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSearchField", function() { return openSearchField; });
/* harmony import */ var _close_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../close-burger-menu */ "./js/functions/close-burger-menu.js");

var openSearchField = function openSearchField(e, elem) {
  var target = e.target;
  var $elemTitle = document.querySelector('#search-text');
  var $elemLogo = elem.querySelector('.top-panel__logo');
  var $formField = document.querySelector('.search-form');
  e.preventDefault();
  Object(_close_burger_menu__WEBPACK_IMPORTED_MODULE_0__["closeBurgerMenu"])();

  if (target === elem || target === $elemTitle || target === $elemLogo) {
    $formField.style.display = 'flex';
  }
};

/***/ }),

/***/ "./js/functions/shop/add-item-to-cart.js":
/*!***********************************************!*\
  !*** ./js/functions/shop/add-item-to-cart.js ***!
  \***********************************************/
/*! exports provided: addItemToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCart", function() { return addItemToCart; });
var addItemToCart = function addItemToCart(arr, selectedItem) {
  arr.push(selectedItem.id);
};

/***/ }),

/***/ "./js/functions/shop/close-shop-modal.js":
/*!***********************************************!*\
  !*** ./js/functions/shop/close-shop-modal.js ***!
  \***********************************************/
/*! exports provided: closeShopModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeShopModal", function() { return closeShopModal; });
/* harmony import */ var _cart_refresh_cart_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/refresh-cart-counter */ "./js/functions/cart/refresh-cart-counter.js");

var closeShopModal = function closeShopModal(e, elem) {
  var target = e.target;

  if (target.className === elem) {
    var clazz = target.parentNode.parentNode.className;
    var $modalToClose = document.querySelector('.' + clazz);
    $modalToClose.remove();
  }

  Object(_cart_refresh_cart_counter__WEBPACK_IMPORTED_MODULE_0__["refreshCartCounter"])();
};

/***/ }),

/***/ "./js/functions/shop/create-modal-shop.js":
/*!************************************************!*\
  !*** ./js/functions/shop/create-modal-shop.js ***!
  \************************************************/
/*! exports provided: createModalShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModalShop", function() { return createModalShop; });
var createModalShop = function createModalShop(elem, clazz) {
  var $cloned = elem.cloneNode(true);
  var $modalShop = document.querySelector('.modal-shop');
  $cloned.classList.add(clazz);
  $modalShop.appendChild($cloned);
};

/***/ }),

/***/ "./js/functions/shop/open-shop-modal.js":
/*!**********************************************!*\
  !*** ./js/functions/shop/open-shop-modal.js ***!
  \**********************************************/
/*! exports provided: openShopModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openShopModal", function() { return openShopModal; });
/* harmony import */ var _create_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-div */ "./js/functions/create-div.js");
/* harmony import */ var _create_modal_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-modal-shop */ "./js/functions/shop/create-modal-shop.js");
/* harmony import */ var _close_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close-burger-menu */ "./js/functions/close-burger-menu.js");
/* harmony import */ var _cart_close_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/close-cart */ "./js/functions/cart/close-cart.js");




var openShopModal = function openShopModal(e) {
  var $items = document.querySelectorAll('#products .slider-item');
  var $modalShopButton = document.querySelector('.modal-btn__link');
  var target = e.target;
  Object(_close_burger_menu__WEBPACK_IMPORTED_MODULE_2__["closeBurgerMenu"])();

  if (target === $modalShopButton || target.innerHTML === 'Shop' || target.innerHTML === 'Go shopping') {
    Object(_cart_close_cart__WEBPACK_IMPORTED_MODULE_3__["closeCart"])();
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('#products', 'modal-shop-wrapper');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.modal-shop-wrapper', 'modal-shop');
    Object(_create_div__WEBPACK_IMPORTED_MODULE_0__["createDiv"])('.modal-shop', 'modal-close-btn', 'Close');
    $items.forEach(function (item) {
      if (item.id) {
        Object(_create_modal_shop__WEBPACK_IMPORTED_MODULE_1__["createModalShop"])(item, 'modal-shop__item');
      }
    });
  }
};

/***/ }),

/***/ "./js/functions/sliders/slick-slider-bottom.js":
/*!*****************************************************!*\
  !*** ./js/functions/sliders/slick-slider-bottom.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('.slider-bottom').slick({
    arrows: true,
    prevArrow: $('.slider-arrows__left--white'),
    nextArrow: $('.slider-arrows__right--white'),
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'easeOutExpo'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/functions/sliders/slick-slider.js":
/*!**********************************************!*\
  !*** ./js/functions/sliders/slick-slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    prevArrow: $('.slider-arrows__left'),
    nextArrow: $('.slider-arrows__right'),
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'easeOutExpo',
    responsive: [{
      breakpoint: 960,
      settings: {
        arrows: true,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1000,
        easing: 'easeOutExpo'
      }
    }, {
      breakpoint: 760,
      settings: {
        arrows: true,
        prevArrow: $('.slider-arrows__left'),
        nextArrow: $('.slider-arrows__right'),
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easeOutExpo'
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/slick/slick.js */ "./js/libs/slick/slick.js");
/* harmony import */ var _libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_sliders_slick_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/sliders/slick-slider */ "./js/functions/sliders/slick-slider.js");
/* harmony import */ var _functions_sliders_slick_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_sliders_slick_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_sliders_slick_slider_bottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/sliders/slick-slider-bottom */ "./js/functions/sliders/slick-slider-bottom.js");
/* harmony import */ var _functions_sliders_slick_slider_bottom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_sliders_slick_slider_bottom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_scroll_to_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/scroll-to-anchor */ "./js/functions/scroll-to-anchor.js");
/* harmony import */ var _functions_change_header_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/change-header-color */ "./js/functions/change-header-color.js");
/* harmony import */ var _functions_close_burger_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/close-burger-menu */ "./js/functions/close-burger-menu.js");
/* harmony import */ var _functions_search_form_close_search_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/search-form/close-search-field */ "./js/functions/search-form/close-search-field.js");
/* harmony import */ var _functions_search_form_open_search_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/search-form/open-search-field */ "./js/functions/search-form/open-search-field.js");
/* harmony import */ var _functions_login_form_open_login_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/login-form/open-login-modal */ "./js/functions/login-form/open-login-modal.js");
/* harmony import */ var _functions_login_form_close_login_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/login-form/close-login-modal */ "./js/functions/login-form/close-login-modal.js");
/* harmony import */ var _functions_login_form_tabs_open_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/login-form-tabs/open-tab */ "./js/functions/login-form-tabs/open-tab.js");
/* harmony import */ var _functions_login_form_reset_password_open_reset_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/login-form-reset-password/open-reset-window */ "./js/functions/login-form-reset-password/open-reset-window.js");
/* harmony import */ var _functions_login_form_reset_password_close_reset_window__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/login-form-reset-password/close-reset-window */ "./js/functions/login-form-reset-password/close-reset-window.js");
/* harmony import */ var _functions_login_form_open_confirm_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/login-form/open-confirm-window */ "./js/functions/login-form/open-confirm-window.js");
/* harmony import */ var _functions_shop_open_shop_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functions/shop/open-shop-modal */ "./js/functions/shop/open-shop-modal.js");
/* harmony import */ var _functions_shop_close_shop_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functions/shop/close-shop-modal */ "./js/functions/shop/close-shop-modal.js");
/* harmony import */ var _functions_cart_create_cart_counter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functions/cart/create-cart-counter */ "./js/functions/cart/create-cart-counter.js");
/* harmony import */ var _functions_cart_open_cart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functions/cart/open-cart */ "./js/functions/cart/open-cart.js");
/* harmony import */ var _functions_cart_clear_cart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functions/cart/clear-cart */ "./js/functions/cart/clear-cart.js");
/* harmony import */ var _functions_cart_proccess_cart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./functions/cart/proccess-cart */ "./js/functions/cart/proccess-cart.js");
/* harmony import */ var _functions_rate_stars_show_rate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./functions/rate-stars/show-rate */ "./js/functions/rate-stars/show-rate.js");
/* harmony import */ var _functions_rate_stars_clear_rate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./functions/rate-stars/clear-rate */ "./js/functions/rate-stars/clear-rate.js");
/* harmony import */ var _functions_rate_stars_set_rate__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./functions/rate-stars/set-rate */ "./js/functions/rate-stars/set-rate.js");
/* harmony import */ var _functions_hidden_blocks_show_current_block__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./functions/hidden-blocks/show-current-block */ "./js/functions/hidden-blocks/show-current-block.js");
/* harmony import */ var _functions_accordeon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./functions/accordeon */ "./js/functions/accordeon.js");
document.cookie = 'cookie1=value1; SameSite=Lax';


























var $body = document.querySelector('body');
var $searchButton = document.querySelector('#search');
var $closeSearchFieldButton = document.querySelector('#search-cancel');
var $header = document.querySelector('.header');
var $navBtn = $header.querySelector('#navBtn');
var $tabs = document.querySelector('#tabs');
var $resetWindowButton = document.querySelector('.modal-login__link');
var $resetPasswordWindow = document.querySelector('.modal-login__password-reset');
var $resetPasswordWindowCloseBtn = document.querySelector('.modal-login__password-reset .form__close');
var $loginButton = document.querySelector('#login');
var $closeButton = document.querySelector('#close');
var $modalLoginWindowInner = document.querySelector('.modal-login__inner');
var $modalLoginTabShowed = document.querySelector('.modal-login__tab--show');
var $navList = document.querySelector('.nav__list');
var $arrowFirstScreen = document.querySelector('#arrow');
var $productsLink = document.querySelector('.scroll-link__link');
var $main = document.querySelector('.main');
var $sectionProducts = document.querySelector('#products');
var $slider = document.querySelector('.slider');
var $hiddenBlocksInputs = document.querySelector('.hidden-blocks__inner');
var $hiddenBlocksList = document.querySelectorAll('.hidden-blocks__item');
var $hiddenBlocksTitles = document.querySelectorAll('.hidden-blocks__title'); // Nav menu ------------------------------------------------------------------------------

Object(_functions_close_burger_menu__WEBPACK_IMPORTED_MODULE_6__["closeBurgerMenu"])(); // Search form ---------------------------------------------------------------------------

$searchButton.addEventListener('click', function (e) {
  Object(_functions_search_form_open_search_field__WEBPACK_IMPORTED_MODULE_8__["openSearchField"])(e, $searchButton);
});
$closeSearchFieldButton.addEventListener('click', _functions_search_form_close_search_field__WEBPACK_IMPORTED_MODULE_7__["closeSearchField"]);
$navBtn.addEventListener('change', _functions_search_form_close_search_field__WEBPACK_IMPORTED_MODULE_7__["closeSearchField"]); // Login form tabs -----------------------------------------------------------------------

$tabs.addEventListener('click', _functions_login_form_tabs_open_tab__WEBPACK_IMPORTED_MODULE_11__["openTab"]); // Reset password menu -------------------------------------------------------------------

$resetWindowButton.addEventListener('click', function (e) {
  Object(_functions_login_form_reset_password_open_reset_window__WEBPACK_IMPORTED_MODULE_12__["openResetWindow"])(e, $resetPasswordWindow);
});
$resetPasswordWindowCloseBtn.addEventListener('click', function (e) {
  Object(_functions_login_form_reset_password_close_reset_window__WEBPACK_IMPORTED_MODULE_13__["closeResetWindow"])(e, $resetPasswordWindow);
}); // Login form open/close -----------------------------------------------------------------

$loginButton.addEventListener('click', function (e) {
  Object(_functions_login_form_open_login_modal__WEBPACK_IMPORTED_MODULE_9__["openLoginModal"])(e, $loginButton);
});
$closeButton.addEventListener('click', function (e) {
  Object(_functions_login_form_reset_password_close_reset_window__WEBPACK_IMPORTED_MODULE_13__["closeResetWindow"])(e, $resetPasswordWindow);
  Object(_functions_login_form_close_login_modal__WEBPACK_IMPORTED_MODULE_10__["closeLoginModal"])(e, $closeButton);
}); // Email input ---------------------------------------------------------------------------

$modalLoginWindowInner.addEventListener('click', _functions_login_form_open_confirm_window__WEBPACK_IMPORTED_MODULE_14__["openConfirmWindow"]); // Sing in input -------------------------------------------------------------------------

$modalLoginTabShowed.addEventListener('click', _functions_login_form_open_confirm_window__WEBPACK_IMPORTED_MODULE_14__["openConfirmWindow"]); // Scroll on page ------------------------------------------------------------------------

$navList.addEventListener('click', _functions_scroll_to_anchor__WEBPACK_IMPORTED_MODULE_4__["scrollToAnchor"]);
$arrowFirstScreen.addEventListener('click', _functions_scroll_to_anchor__WEBPACK_IMPORTED_MODULE_4__["scrollToAnchor"]);
$productsLink.addEventListener('click', _functions_scroll_to_anchor__WEBPACK_IMPORTED_MODULE_4__["scrollToAnchor"]); // Header menu color  --------------------------------------------------------------------

window.addEventListener('scroll', _functions_change_header_color__WEBPACK_IMPORTED_MODULE_5__["changeHeaderColor"]); // Shop Modal

$main.addEventListener('click', _functions_shop_open_shop_modal__WEBPACK_IMPORTED_MODULE_15__["openShopModal"]);
$sectionProducts.addEventListener('click', function (e) {
  Object(_functions_shop_close_shop_modal__WEBPACK_IMPORTED_MODULE_16__["closeShopModal"])(e, 'modal-close-btn');
}); // Cart ----------------------------------------------------------------------------------

Object(_functions_cart_create_cart_counter__WEBPACK_IMPORTED_MODULE_17__["createCartCounter"])();
$body.addEventListener('click', _functions_cart_open_cart__WEBPACK_IMPORTED_MODULE_18__["openCart"]);
$body.addEventListener('click', _functions_cart_clear_cart__WEBPACK_IMPORTED_MODULE_19__["clearCart"]); // Changes to cart -----------------------------------------------------------------------

$sectionProducts.addEventListener('click', _functions_cart_proccess_cart__WEBPACK_IMPORTED_MODULE_20__["proccessCart"]); // Rate stars ----------------------------------------------------------------------------

$slider.addEventListener('mouseover', _functions_rate_stars_show_rate__WEBPACK_IMPORTED_MODULE_21__["showRate"]);
$slider.addEventListener('mouseout', _functions_rate_stars_clear_rate__WEBPACK_IMPORTED_MODULE_22__["clearRate"]);
$slider.addEventListener('click', _functions_rate_stars_set_rate__WEBPACK_IMPORTED_MODULE_23__["setRate"]); // Hidden blocks -------------------------------------------------------------------------

$hiddenBlocksInputs.addEventListener('click', function (e) {
  Object(_functions_hidden_blocks_show_current_block__WEBPACK_IMPORTED_MODULE_24__["showCurrentBlock"])(e, $hiddenBlocksTitles, $hiddenBlocksList);
}); // Accordeon -----------------------------------------------------------------------------

$body.addEventListener('click', _functions_accordeon__WEBPACK_IMPORTED_MODULE_25__["openPanel"]);

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi @babel/polyfill ./js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/index.js */"./js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map