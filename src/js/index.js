document.cookie = 'cookie1=value1; SameSite=Lax';

import './libs/slick/slick.js';
import '../scss/styles.scss';
import './functions/sliders/slick-slider';
import './functions/sliders/slick-slider-bottom';

import {scrollToAnchor} from './functions/scroll-to-anchor';
import {changeHeaderColor} from './functions/change-header-color';
import {closeBurgerMenu} from './functions/close-burger-menu';
import {closeSearchField} from "./functions/search-form/close-search-field";
import {openSearchField} from "./functions/search-form/open-search-field";
import {openLoginModal} from './functions/login-form/open-login-modal';
import {closeLoginModal} from './functions/login-form/close-login-modal';
import {openTab} from "./functions/login-form-tabs/open-tab";
import {openResetWindow} from './functions/login-form-reset-password/open-reset-window';
import {closeResetWindow} from './functions/login-form-reset-password/close-reset-window';
import {openConfirmWindow} from "./functions/login-form/open-confirm-window";
import {openShopModal} from './functions/shop/open-shop-modal';
import {closeShopModal} from './functions/shop/close-shop-modal';
import {createCartCounter} from './functions/cart/create-cart-counter';
import {openCart} from './functions/cart/open-cart';
import {clearCart} from './functions/cart/clear-cart';
import {proccessCart} from './functions/cart/proccess-cart';
import {showRate} from './functions/rate-stars/show-rate';
import {clearRate} from './functions/rate-stars/clear-rate';
import {setRate} from './functions/rate-stars/set-rate';
import {showCurrentBlock} from './functions/hidden-blocks/show-current-block';
import {openPanel} from './functions/accordeon';

const $body = document.querySelector('body');
const $searchButton = document.querySelector('#search');
const $closeSearchFieldButton = document.querySelector('#search-cancel');
const $header = document.querySelector('.header');
const $navBtn = $header.querySelector('#navBtn');
const $tabs = document.querySelector('#tabs');
const $resetWindowButton = document.querySelector('.modal-login__link');
const $resetPasswordWindow = document.querySelector('.modal-login__password-reset');
const $resetPasswordWindowCloseBtn = (
    document.querySelector('.modal-login__password-reset .form__close')
);
const $loginButton = document.querySelector('#login');
const $closeButton = document.querySelector('#close');
const $modalLoginWindowInner = document.querySelector('.modal-login__inner');
const $modalLoginTabShowed = document.querySelector('.modal-login__tab--show');
const $navList = document.querySelector('.nav__list');
const $arrowFirstScreen = document.querySelector('#arrow');
const $productsLink = document.querySelector('.scroll-link__link');
const $main = document.querySelector('.main');
const $sectionProducts = document.querySelector('#products');
const $slider = document.querySelector('.slider');
const $hiddenBlocksInputs = document.querySelector('.hidden-blocks__inner');
const $hiddenBlocksList = document.querySelectorAll('.hidden-blocks__item');
const $hiddenBlocksTitles = document.querySelectorAll('.hidden-blocks__title');

// Nav menu ------------------------------------------------------------------------------
closeBurgerMenu();

// Search form ---------------------------------------------------------------------------
$searchButton.addEventListener('click', (e) => {
    openSearchField(e, $searchButton)
});
$closeSearchFieldButton.addEventListener('click', closeSearchField);
$navBtn.addEventListener('change', closeSearchField);

// Login form tabs -----------------------------------------------------------------------
$tabs.addEventListener('click', openTab);

// Reset password menu -------------------------------------------------------------------
$resetWindowButton.addEventListener('click', (e) => {
    openResetWindow(e, $resetPasswordWindow);
});
$resetPasswordWindowCloseBtn.addEventListener('click', (e) => {
    closeResetWindow(e, $resetPasswordWindow);
});

// Login form open/close -----------------------------------------------------------------
$loginButton.addEventListener('click', (e) => {
    openLoginModal(e, $loginButton);
});
$closeButton.addEventListener('click', (e) => {
    closeResetWindow(e, $resetPasswordWindow);
    closeLoginModal(e, $closeButton);
});

// Email input ---------------------------------------------------------------------------
$modalLoginWindowInner.addEventListener('click', openConfirmWindow);

// Sing in input -------------------------------------------------------------------------
$modalLoginTabShowed.addEventListener('click', openConfirmWindow);

// Scroll on page ------------------------------------------------------------------------
$navList.addEventListener('click', scrollToAnchor);
$arrowFirstScreen.addEventListener('click', scrollToAnchor);
$productsLink.addEventListener('click', scrollToAnchor);

// Header menu color  --------------------------------------------------------------------
window.addEventListener('scroll', changeHeaderColor);

// Shop Modal
$main.addEventListener('click', openShopModal);
$sectionProducts.addEventListener('click', (e) => {
    closeShopModal(e, 'modal-close-btn')
});

// Cart ----------------------------------------------------------------------------------
createCartCounter();

$body.addEventListener('click', openCart);
$body.addEventListener('click', clearCart);

// Changes to cart -----------------------------------------------------------------------
$sectionProducts.addEventListener('click', proccessCart);

// Rate stars ----------------------------------------------------------------------------
$slider.addEventListener('mouseover', showRate);
$slider.addEventListener('mouseout', clearRate);
$slider.addEventListener('click', setRate);

// Hidden blocks -------------------------------------------------------------------------
$hiddenBlocksInputs.addEventListener('click', (e) => {
    showCurrentBlock(e, $hiddenBlocksTitles, $hiddenBlocksList)
});

// Accordeon -----------------------------------------------------------------------------
$body.addEventListener('click', openPanel);