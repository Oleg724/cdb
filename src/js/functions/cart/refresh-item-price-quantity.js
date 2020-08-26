import {showEmptyCart} from "./show-empty-cart";
import {getPrice} from "./get-price";
import {getElement} from "../get-element";
import {removeNode} from "../remove-node";
import {displayQuantity} from "./display-quantity";
import {displayPrice} from "./display-price";
import {decreaseItemQuantity} from "./decrease-item-quantity";

export const refreshItemPriceQuantity = (e) => {
    const target = e.target;
    const $parent = target.closest('.cart__item');
    const $itemQuantity = $parent.querySelector('.cart__quantity-value');
    const $itemPrice = $parent.querySelector('.slider-item__price');

    const itemPrice = +$itemPrice.innerHTML.slice(1, -4);
    let itemQuantity = +$itemQuantity.innerHTML.slice(0, -4);

    const price = getPrice(itemPrice, itemQuantity);

    const $totalPrice = getElement('.cart__total-price');
    const totalPrice = +$totalPrice.innerHTML.slice(8, -4);

    let newQuantity;
    let newTotalCartPrice;

    if (target.className === 'cart__plus') {
        newQuantity = ++itemQuantity;
        newTotalCartPrice = +(totalPrice + price).toFixed(2);
    }
    else if (target.className === 'cart__minus') {
        newQuantity = decreaseItemQuantity(itemQuantity);
        newTotalCartPrice = +(totalPrice - price).toFixed(2);
    }

    const newPrice = (price * newQuantity).toFixed(2);

    displayQuantity($itemQuantity, newQuantity);
    displayPrice($itemPrice, newPrice);
    displayPrice($totalPrice, newTotalCartPrice, 'Total: $');

    if (newPrice === '0.00') {
        removeNode($parent);
    }

    if (newTotalCartPrice === 0) {
        showEmptyCart();
    }
}