import {refreshCartCounter} from '../cart/refresh-cart-counter';
import {refreshItemPriceQuantity} from './refresh-item-price-quantity';
import {removeItemFromCart} from './remove-item-from-cart';
import {addItemToCart} from '../shop/add-item-to-cart';
import {setItemToLocalStorage} from './set-item-to-localstorage';
import {getSelectedItemsArray} from './get-selected-items-array';

export const proccessCart = (e) => {
    const target = e.target;
    const {className} = target;

    if (target.innerHTML === 'Add to cart'
        || className === 'cart__plus'
        || className === 'cart__minus') {

        let $selectedItem = target.closest('.slider-item');

        const selectedItemsArray = getSelectedItemsArray();

        className === 'cart__minus'
            ? removeItemFromCart(selectedItemsArray, $selectedItem)
            : addItemToCart(selectedItemsArray, $selectedItem);

        setItemToLocalStorage('id', selectedItemsArray);
        refreshCartCounter();

        if (target.innerHTML !== 'Add to cart') {
            refreshItemPriceQuantity(e);
        }
    }
}