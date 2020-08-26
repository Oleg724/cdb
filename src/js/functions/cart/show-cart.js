import {checkItem} from "./check-item-in-localstorage";
import {increaseItemQuantity} from "./increase-item-quantity";
import {addItem} from "./add-item";
import {setItemQuantity} from "./set-item-quantity";
import {createCart} from "./create-cart";
import {createDiv} from "../create-div";
import {getTotalItemPrice} from "./get-total-item-price";
import {displayQuantity} from "./display-quantity";
import {displayPrice} from "./display-price";

export const showCart = (localStorageItems) => {
    const checkedItems = [];
    const checkedItemsQuantity = {};

    for (let item of localStorageItems) {
        if (checkItem(item, checkedItems)) {
            increaseItemQuantity(item, checkedItemsQuantity);
        } else {
            addItem(item, checkedItems);
            setItemQuantity(item, checkedItemsQuantity, 1);
        }
    };

    checkedItems.forEach(createCart);
    createDiv('.cart', 'cart__item');
    createDiv('.cart__item', 'cart__total-price');

    const $cartValueList = document.querySelectorAll('.cart__quantity-value');
    const $itemsInCart = document.querySelectorAll('.cart__item');
    const $modalCart = document.querySelector('.cart');
    const $itemsPriceList = $modalCart.querySelectorAll('.slider-item__price');

    let total = 0;

    for (let i = 0; i < $itemsInCart.length; i++) {
        for (let key in checkedItemsQuantity) {

            const $price = $itemsPriceList[i];
            const quantity = checkedItemsQuantity[key];

            if ($itemsInCart[i].id === key) {
                const totalItemPrice = getTotalItemPrice($price, quantity);
                total += totalItemPrice;

                displayQuantity($cartValueList[i], quantity);
                displayPrice($price, totalItemPrice);
            }
        }
    }

    const $lastItem = $itemsInCart[$itemsInCart.length - 1];
    const $totalPrice = $lastItem.querySelector('.cart__total-price');

    displayPrice($totalPrice, total, 'Total: $');
}