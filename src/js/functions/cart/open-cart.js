import {createDiv} from "../create-div";
import {getItemsFromLocalStorage} from "./get-items-from-localstorage";
import {addNewClass} from '../add-new-class';
import {showCart} from './show-cart';
import {showEmptyCart} from './show-empty-cart';

export const openCart = (e) => {
    const target = e.target;
    const $itemNumber = document.querySelector('.top-panel__counter');
    const $cartLogo = document.querySelector('#cart .top-panel__logo');

    if (target.id === 'cart'
        || target.innerText === 'OPEN CART'
        || target.innerHTML === 'Cart'
        || target === $cartLogo
        || target === $itemNumber) {

        const $formField = document.querySelector('.search-form');
        const clazzMod = 'modal-close-btn--bottom-right';
        const $modalWrap = document.querySelector('.modal-shop-wrapper');

        if ($formField.style.display === 'flex') {
            $formField.style.display = 'none';
        }

        if ($modalWrap) {
            $modalWrap.remove('.modal-shop-wrapper');
        }

        createDiv('#products', 'cart-wrapper');
        createDiv('.cart-wrapper', 'cart');
        createDiv('.cart', 'modal-close-btn', 'Close');
        createDiv('.cart', 'modal-close-btn', 'Clear cart');
        createDiv('.cart', 'modal-close-btn', 'Go shopping');

        addNewClass('.modal-close-btn', clazzMod, 'Go shopping');
        addNewClass('.modal-close-btn', 'modal-close-btn--bottom', 'Clear cart');

        const localStorageItems = getItemsFromLocalStorage('id');

        localStorageItems
            ? showCart(localStorageItems)
            : showEmptyCart();
    }
}