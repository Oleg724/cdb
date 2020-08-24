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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/slick/slick.js */ "./js/libs/slick/slick.js");
/* harmony import */ var _libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_slick_slick_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.cookie = 'cookie1=value1; SameSite=Lax'; // document.cookie = 'cookie2=value2; SameSite=None; Secure';

var mainClass = '.main';
var main = document.querySelector(mainClass);
var header = document.querySelector('.header'); // Nav menu --------------------------------------------------------------------------------

var navBtn = header.querySelector('#navBtn');

var closeBurgerMenu = function closeBurgerMenu() {
  navBtn.checked = false;
}; // Search form -----------------------------------------------------------------------------


var searchButton = document.querySelector('#search');
var closeSearchFieldButton = document.querySelector('#search-cancel');
var formField = document.querySelector('.search-form');

var openSearchField = function openSearchField(e) {
  e.preventDefault();
  closeBurgerMenu();
  var target = e.target;
  var searchButtonTitle = document.querySelector('#search-text');
  var searchButtonLogo = searchButton.querySelector('.top-panel__logo');

  if (target === searchButton || target === searchButtonTitle || target === searchButtonLogo) {
    formField.style.display = 'flex';
  }
};

var closeSearchField = function closeSearchField() {
  var formField = document.querySelector('.search-form');
  formField.style.display = 'none';
};

searchButton.addEventListener('click', openSearchField);
closeSearchFieldButton.addEventListener('click', closeSearchField);
navBtn.addEventListener('change', function () {
  closeSearchField();
}); // Login form open/close --------------------------------------------------------------------

var loginButton = document.querySelector('#login');
var closeButton = document.querySelector('#close');

var openModal = function openModal(e) {
  e.preventDefault();
  closeBurgerMenu();
  var target = e.target;
  var loginButtonTitle = document.querySelector('#login-text');
  var loginButtonLogo = loginButton.querySelector('.top-panel__logo');

  if (target === loginButton || target === loginButtonTitle || target === loginButtonLogo) {
    var modalWindow = document.querySelector('.modal-login');
    modalWindow.style.visibility = 'visible';
  }

  if (formField.style.display === 'flex') {
    formField.style.display = 'none';
  }
};

var closeModal = function closeModal(e) {
  var target = e.target;

  if (target === closeButton) {
    var modalWindow = document.querySelector('.modal-login');
    modalWindow.style.visibility = 'hidden';
  }
};

loginButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal); // Login form tabs ----------------------------------------------------------------------

var tabs = document.querySelector('#tabs');

var removeTabClass = function removeTabClass(arr, classToRemove) {
  arr.forEach(function (item) {
    item.classList.remove(classToRemove);
  });
};

var openTab = function openTab(e) {
  var target = e.target;
  var formList = document.querySelectorAll('.modal-login__tab');
  var switcherList = document.querySelectorAll('.switcher__item');
  var classToShow = 'modal-login__tab--show';
  var classWhite = 'switcher__item--white';
  removeTabClass(switcherList, classWhite);
  target.classList.add(classWhite);
  removeTabClass(formList, classToShow);
  var targetIndex = Array.prototype.indexOf.call(switcherList, target);
  var formToShow = formList[targetIndex];
  formToShow.classList.add(classToShow);
};

tabs.addEventListener('click', openTab); // Reset password menu --------------------------------------------------------------------

var resetPasswordWindow = document.querySelector('.modal-login__password-reset');
var resetWindowButton = document.querySelector('.modal-login__link');

var openResetWindow = function openResetWindow(e) {
  var target = e.target;

  if (target.className === 'modal-login__link') {
    resetPasswordWindow.classList.add('modal-login__password-reset--visible');
  }
};

var closeResetWindow = function closeResetWindow(e) {
  var target = e.target;

  if (target.className === 'form__close') {
    resetPasswordWindow.classList.remove('modal-login__password-reset--visible');
  }
};

resetWindowButton.addEventListener('click', openResetWindow);
resetPasswordWindow.addEventListener('click', closeResetWindow); // Email input ----------------------------------------------------------------------------

var modalLoginWindowInner = document.querySelector('.modal-login__inner');

var closeConfirmWindow = function closeConfirmWindow(div, classToRemove) {
  div.classList.remove(classToRemove);
};

var checkFormFill = function checkFormFill(elem) {
  var parentNode = elem.parentNode;
  var nodeList = parentNode.childNodes;
  var confirmWindowText = document.querySelector('.confirm-window__text');

  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].tagName === 'INPUT' && nodeList[i].value === "") {
      confirmWindowText.textContent = "Please, fill all fields";
      break;
    } else if (nodeList[i].tagName === 'INPUT' && nodeList[i].value !== "") {
      if (nodeList[i].type === 'email' && nodeList[i].value.indexOf('@') < 1) {
        confirmWindowText.textContent = "Please, fill all fields";
        break;
      }

      confirmWindowText.textContent = 'Data sent successfully!';
    }
  }
};

var openConfirmWindow = function openConfirmWindow(e) {
  e.preventDefault();
  var target = e.target;
  var displayClass = 'confirm-window--display';
  var confirmWindow = document.querySelector('.confirm-window');

  if (target.classList.contains('form__btn') || target.classList.contains('form-btn')) {
    checkFormFill(target, confirmWindow);
    confirmWindow.classList.add(displayClass);
    setTimeout(closeConfirmWindow, 2500, confirmWindow, displayClass);
  }

  ;
};

modalLoginWindowInner.addEventListener('click', openConfirmWindow); // Sing in input -------------------------------------------------------------------------

var modalLoginTabShowed = document.querySelector('.modal-login__tab--show');
modalLoginTabShowed.addEventListener('click', openConfirmWindow); // Scroll on page ------------------------------------------------------------------------

var navList = document.querySelector('.nav__list');
var arrowFirstScreen = document.querySelector('#arrow');
var productsLink = document.querySelector('.scroll-link__link');

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

navList.addEventListener('click', scrollToAnchor);
arrowFirstScreen.addEventListener('click', scrollToAnchor);
productsLink.addEventListener('click', scrollToAnchor); // Header menu color  --------------------------------------------------------------------

var changeHeaderColor = function changeHeaderColor(e) {
  if (window.pageYOffset === 0) {
    header.classList.remove('header--bg-green');
  } else {
    header.classList.add('header--bg-green');
  }
};

window.addEventListener('scroll', changeHeaderColor); // Shop Modal

var modalCart = 'cart';
var modalShopWrapper = 'modal-shop-wrapper';
var modalShop = 'modal-shop';
var modalShopItem = 'modal-shop__item';
var modalShopItemNewDiv = 'slider-item__description';
var modalCloseButton = 'modal-close-btn';
var sectionProductsID = '#products';
var modalCartWrapper = 'cart-wrapper';
var items = document.querySelectorAll('.slider-item');
var modalShopButton = document.querySelector('.modal-btn__link');
var sectionProductsDiv = document.querySelector(sectionProductsID);

var createDiv = function createDiv(parentID, className, innerText) {
  var parentList = document.querySelectorAll(parentID);
  var parent;

  if (!parentList[parentList.length - 1]) {
    parent = parentList[0];
  } else {
    parent = parentList[parentList.length - 1];
  }

  var newDiv = document.createElement('div');
  newDiv.classList.add(className);
  if (innerText) newDiv.innerHTML = innerText;
  parent.appendChild(newDiv);
};

var createModalShop = function createModalShop(elem) {
  var clonedElem = elem.cloneNode(true);
  var modalShopDiv = document.querySelector('.' + modalShop);
  clonedElem.classList.add(modalShopItem);
  modalShopDiv.appendChild(clonedElem);
};

var openShopModal = function openShopModal(e) {
  var target = e.target;
  closeBurgerMenu();

  if (target === modalShopButton || target.innerHTML === 'Shop' || target.innerHTML === 'Go shopping') {
    closeCart();
    createDiv(sectionProductsID, modalShopWrapper);
    createDiv('.' + modalShopWrapper, modalShop);
    createDiv('.' + modalShop, modalCloseButton, 'Close');
    items.forEach(createModalShop);
  }
};

var closeModalWindow = function closeModalWindow(e) {
  var target = e.target;

  if (target.className === modalCloseButton) {
    var targetParent = target.parentNode.parentNode.className;
    var modalToClose = document.querySelector('.' + targetParent);
    modalToClose.remove();
  }
};

main.addEventListener('click', openShopModal);
sectionProductsDiv.addEventListener('click', closeModalWindow); // Cart -------------------------------------------------------------------------------

var modalCartItem = 'cart__item';
var checkedItemQuantity = 'cart__quantity';

var addNewClass = function addNewClass(divClass, classToAdd, text) {
  var divs = document.querySelectorAll(divClass);
  divs.forEach(function (item) {
    if (item.innerHTML === text) {
      item.classList.add(classToAdd);
    }
  });
};

var removeChildDiv = function removeChildDiv(parentDiv, className) {
  var divsToDelete = parentDiv.querySelectorAll(className);
  divsToDelete.forEach(function (item) {
    item.remove();
  });
};

var getItemsFromLocalStorage = function getItemsFromLocalStorage() {
  var checkedItemsStr = localStorage.getItem('id');
  return JSON.parse(checkedItemsStr);
};

var createCartCounter = function createCartCounter() {
  var itemNumber;

  if (getItemsFromLocalStorage()) {
    itemNumber = getItemsFromLocalStorage().length;
  } else {
    itemNumber = 0;
  }

  createDiv('#' + modalCart, 'top-panel__counter', "(".concat(itemNumber, ")"));
};

createCartCounter();

var createCart = function createCart(elem) {
  var productItem = document.querySelector('#' + elem);
  var clonedElem = productItem.cloneNode(true);
  clonedElem.classList.add(modalCartItem);
  var modalDiv = document.querySelector('.' + modalCart);
  modalDiv.appendChild(clonedElem);
  createDiv('.cart__item', 'cart__quantity');
  createDiv('.cart__quantity', 'cart__quantity-change');
  createDiv('.cart__quantity-change', 'cart__plus');
  createDiv('.cart__quantity-change', 'cart__minus');
  createDiv('.cart__quantity', 'cart__quantity-value');
  removeChildDiv(modalDiv, '.rating');
};

var cartLogo = cart.querySelector('.top-panel__logo');

var openCart = function openCart(e) {
  var target = e.target;
  var itemNumber = document.querySelector('.top-panel__counter');

  if (target.id === modalCart || target.innerText === 'OPEN CART' || target.innerHTML === 'Cart' || target === cartLogo || target === itemNumber) {
    var clearCartText = 'Clear cart';
    var returnToShopText = 'Go shopping';
    var clearCartButton = modalCloseButton + '--bottom';
    var returnToShopButton = modalCloseButton + '--bottom-right';
    var divToDelete = document.querySelector('.' + modalShopWrapper);

    if (formField.style.display === 'flex') {
      formField.style.display = 'none';
    }

    if (divToDelete) {
      divToDelete.remove('.' + modalShopWrapper);
    }

    createDiv(sectionProductsID, modalCartWrapper);
    createDiv('.' + modalCartWrapper, modalCart);
    createDiv('.' + modalCart, modalCloseButton, 'Close');
    createDiv('.' + modalCart, modalCloseButton, clearCartText);
    createDiv('.' + modalCart, modalCloseButton, returnToShopText);
    addNewClass('.' + modalCloseButton, returnToShopButton, returnToShopText);
    addNewClass('.' + modalCloseButton, clearCartButton, clearCartText);
    var localStorageItems = getItemsFromLocalStorage();
    var checkedItems = [];
    var checkedItemsQuantity = {};

    if (localStorageItems) {
      var _iterator = _createForOfIteratorHelper(localStorageItems),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (!checkedItems.includes(item)) {
            checkedItems.push(item);
            checkedItemsQuantity[item] = 1;
          } else {
            ++checkedItemsQuantity[item];
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
      checkedItems.forEach(createCart);
      createDiv('.' + modalCart, modalCartItem);
      createDiv('.' + modalCartItem, 'cart__total-price');
      var cartValueList = document.querySelectorAll('.cart__quantity-value');
      var itemsInCart = document.querySelectorAll('.cart__item');
      var modalCartDiv = document.querySelector('.' + modalCart);
      var itemPriceList = modalCartDiv.querySelectorAll('.slider-item__price');
      var totalCartPrice = 0;

      for (var i = 0; i < itemsInCart.length; i++) {
        for (var key in checkedItemsQuantity) {
          if (itemsInCart[i].id === key) {
            cartValueList[i].innerHTML = checkedItemsQuantity[key] + ' pcs';
            var itemPriceText = itemPriceList[i].innerHTML;
            var itemPrice = +itemPriceText.slice(1, -4);
            var totalItemPrice = +(itemPrice * checkedItemsQuantity[key]).toFixed(2);
            totalCartPrice += totalItemPrice;
            itemPriceList[i].innerHTML = '$' + totalItemPrice + ' USD';
          }
        }
      }

      var totalPriceDiv = itemsInCart[itemsInCart.length - 1].querySelector('.cart__total-price');
      totalPriceDiv.innerHTML = 'Total: $' + totalCartPrice + ' USD';
    } else {
      createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping =))");
      createDiv('.' + modalCart, 'cart__img');
    }
  }
};

var closeCart = function closeCart() {
  var modalCartWrapperDiv = document.querySelector('.' + modalCartWrapper);

  if (modalCartWrapperDiv) {
    modalCartWrapperDiv.remove();
  }
};

var clearCart = function clearCart(e) {
  var localStorageItems = getItemsFromLocalStorage();
  var target = e.target;

  if (target.innerHTML === 'Clear cart' && localStorageItems) {
    var parentDiv = document.querySelector('.' + modalCart);
    localStorage.removeItem('id');
    removeChildDiv(parentDiv, '.' + modalCartItem);
    createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping");
    createDiv('.' + modalCart, 'cart__img');
    refreshCartCounter();
  }
};

var refreshCartCounter = function refreshCartCounter() {
  var itemNumber = document.querySelector('.top-panel__counter');

  if (getItemsFromLocalStorage()) {
    itemNumber.innerHTML = "(".concat(getItemsFromLocalStorage().length, ")");
  } else {
    itemNumber.innerHTML = '(0)';
  }
};

var body = document.querySelector('body');
body.addEventListener('click', openCart);
body.addEventListener('click', clearCart); // Refresh item price/quantity -------------------------------------------------------------------------

var refreshItemPriceQuantity = function refreshItemPriceQuantity(e) {
  var target = e.target;
  var parentDiv = target.closest('.cart__item');
  var itemQuantityDiv = parentDiv.querySelector('.cart__quantity-value');
  var itemPriceDiv = parentDiv.querySelector('.slider-item__price');
  var itemPrice = +itemPriceDiv.innerHTML.slice(1, -4);
  var itemQuantity = +itemQuantityDiv.innerHTML.slice(0, -4);
  var price;

  if (itemQuantity >= 1) {
    price = +(itemPrice / itemQuantity).toFixed(2);
  } else {
    price = 0;
  }

  var totalPriceDiv = document.querySelector('.cart__total-price');
  var totalPrice = +totalPriceDiv.innerHTML.slice(8, -4);
  var newQuantity;
  var newTotalCartPrice;

  if (target.className === 'cart__plus') {
    newQuantity = ++itemQuantity;
    newTotalCartPrice = +(totalPrice + price).toFixed(2);
  } else if (target.className === 'cart__minus') {
    if (itemQuantity >= 1) {
      newQuantity = --itemQuantity;
    } else {
      newQuantity = 0;
    }

    newTotalCartPrice = +(totalPrice - price).toFixed(2);
  }

  var newPrice = (price * newQuantity).toFixed(2);
  itemQuantityDiv.innerHTML = newQuantity + ' pcs';
  itemPriceDiv.innerHTML = '$' + newPrice + ' USD';
  totalPriceDiv.innerHTML = 'Total: $' + newTotalCartPrice + ' USD';

  if (newPrice === '0.00') {
    parentDiv.parentNode.removeChild(parentDiv);
  }

  if (newTotalCartPrice === 0) {
    createDiv('.' + modalCart, 'cart__text', "Cart is empty, let's go shopping");
    createDiv('.' + modalCart, 'cart__img');
  }
}; // Add to cart --------------------------------------------------------------------------------


var addToCart = function addToCart(e) {
  e.preventDefault();
  var target = e.target;
  var selectedItemsArray;
  var addToCartText = 'Add to cart';

  if (target.innerHTML === addToCartText || target.className === 'cart__plus' || target.className === 'cart__minus') {
    if (localStorage.getItem('id')) {
      selectedItemsArray = JSON.parse(localStorage.getItem('id'));
    } else {
      selectedItemsArray = [];
    }

    var selectedItem = target.closest('.slider-item');

    if (target.className === 'cart__minus') {
      var indexToRemove = selectedItemsArray.indexOf(selectedItem.id);
      selectedItemsArray.splice(indexToRemove, 1);
    } else {
      selectedItemsArray.push(selectedItem.id);
    }

    localStorage.setItem('id', JSON.stringify(selectedItemsArray));
    refreshCartCounter();

    if (target.className === 'cart__plus' || target.className === 'cart__minus') {
      refreshItemPriceQuantity(e);
    }
  }
};

sectionProductsDiv.addEventListener('click', addToCart); // Rate stars ----------------------------------------------------------------------------

var slider = document.querySelector('.slider');
var ratingItem;

var mouseOverActiveClass = function mouseOverActiveClass(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('active')) {
      break;
    } else {
      arr[i].classList.add('active');
    }
  }
};

var mouseOutActiveClass = function mouseOutActiveClass(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].classList.contains('current-active')) {
      break;
    } else {
      arr[i].classList.remove('active');
    }
  }
};

var addClass = function addClass(arr, className) {
  for (var i = 0; i < arr.length; i++) {
    ratingItem[i].classList.add(className);
  }
};

var removeClass = function removeClass(arr, className) {
  for (var i = 0; i < arr.length; i++) {
    ratingItem[i].classList.remove(className);
  }
};

var showRate = function showRate(e) {
  var target = e.target;

  if (target.classList.contains('rating__path')) {
    var ratingParent = target.parentNode.parentNode.parentNode;
    ratingItem = ratingParent.querySelectorAll('.rating__path');
    removeClass(ratingItem, 'active');
    target.classList.add('active');
    mouseOverActiveClass(ratingItem);
  }
};

var clearRate = function clearRate(e) {
  var target = e.target;

  if (target.classList.contains('rating__path')) {
    addClass(ratingItem, 'active');
    mouseOutActiveClass(ratingItem);
  }
};

var setRate = function setRate(e) {
  var target = e.target;

  if (target.classList.contains('rating__path')) {
    removeClass(ratingItem, 'current-active');
    target.classList.add('active', 'current-active');
  }
};

slider.addEventListener('mouseover', showRate);
slider.addEventListener('mouseout', clearRate);
slider.addEventListener('click', setRate); // Hidden blocks -------------------------------------------------------------------------

var hiddenBlocksInputs = document.querySelector('.hidden-blocks__inner');
var hiddenBlocksList = document.querySelectorAll('.hidden-blocks__item');

var hideBlocks = function hideBlocks(e) {
  var target = e.target;

  if (target.classList.contains('hidden-blocks__title')) {
    var _iterator2 = _createForOfIteratorHelper(hiddenBlocksList),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        item.style.opacity = '0';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};

var showBlock = function showBlock(e) {
  var target = e.target;
  var hiddenBlocksTitles = document.querySelectorAll('.hidden-blocks__title');

  for (var i = 0; i < hiddenBlocksTitles.length; i++) {
    if (target.htmlFor === hiddenBlocksTitles[i].htmlFor) {
      hiddenBlocksList[i].style.opacity = '1';
    }
  }
};

var showCurrentBlock = function showCurrentBlock(e) {
  hideBlocks(e);
  showBlock(e);
};

hiddenBlocksInputs.addEventListener('click', showCurrentBlock); // Slick-slider -------------------------------------------------------------------------

$(document).ready(function () {
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
$(document).ready(function () {
  $('.slider-bottom').slick({
    arrows: true,
    prevArrow: $('.slider-arrows__left--white'),
    nextArrow: $('.slider-arrows__right--white'),
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'easeOutExpo'
  });
}); // Accordeon -------------------------------------------------------------------------

var panelHeadingDivs = document.querySelectorAll('.panel__heading');

var openPanel = function openPanel(e) {
  var target = e.target;
  var panelHeadingDiv = target.closest('.panel__heading');

  if (target.className === 'panel__link' || target.className === 'panel__icon') {
    var _iterator3 = _createForOfIteratorHelper(panelHeadingDivs),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var item = _step3.value;

        if (!panelHeadingDiv.classList.contains('in')) {
          item.classList.remove('in');
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    panelHeadingDiv.classList.toggle('in');
  }
};

body.addEventListener('click', openPanel);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

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