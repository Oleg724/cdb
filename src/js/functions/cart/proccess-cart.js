import {refreshCartCounter} from '../cart/refresh-cart-counter';
import {refreshItemPriceQuantity} from './refresh-item-price-quantity';
import {removeItemFromCart} from './remove-item-from-cart';
import {addItemToCart} from './add-item-to-cart';
import {setItemToLocalStorage} from './set-item-to-localstorage';
import {getSelectedItemsArray} from './get-selected-items-array';

export const proccessCart = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.innerHTML === 'Add to cart'
        || target.className === 'cart__plus'
        || target.className === 'cart__minus') {

        let selectedItem = target.closest('.slider-item');

        const selectedItemsArray = getSelectedItemsArray();

        target.className === 'cart__minus'
            ? removeItemFromCart(selectedItemsArray, selectedItem)
            : addItemToCart(selectedItemsArray, selectedItem);

        setItemToLocalStorage('id', selectedItemsArray);
        refreshCartCounter();
        refreshItemPriceQuantity(e);
    }
}