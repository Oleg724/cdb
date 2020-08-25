import {getItemsFromLocalStorage} from "./get-items-from-localstorage";
import {createDiv} from "../create-div";
import {refreshCartCounter} from "./refresh-cart-counter";
import {removeItemFromLocalStaroge} from "./remove-item-from-localstorage";
import {removeChildDiv} from '../remove-child-div';

export const clearCart = (e) => {
    const target = e.target;
    const localStorageItems = getItemsFromLocalStorage('id');

    if (target.innerHTML === 'Clear cart' && localStorageItems) {
        const $parentDiv = document.querySelector('.cart');

        removeItemFromLocalStaroge('id');
        removeChildDiv($parentDiv, '.cart__item');

        createDiv('.cart', 'cart__text', "Cart is empty, let's go shopping");
        createDiv('.cart', 'cart__img');

        refreshCartCounter();
    }
}