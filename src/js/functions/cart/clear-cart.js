import {getItemsFromLocalStorage} from "./get-items-from-localstorage";
import {refreshCartCounter} from "./refresh-cart-counter";
import {removeItemFromLocalStorage} from "./remove-item-from-localstorage";
import {removeAllChildNodes} from '../remove-all-child-nodes';
import {showEmptyCart} from './show-empty-cart';

export const clearCart = (e) => {
    const target = e.target;
    const localStorageItems = getItemsFromLocalStorage('id');

    if (target.innerHTML === 'Clear cart' && localStorageItems) {
        const $parent = document.querySelector('.cart');

        removeItemFromLocalStorage('id');
        removeAllChildNodes($parent, '.cart__item');

        showEmptyCart();
        refreshCartCounter();
    }
}