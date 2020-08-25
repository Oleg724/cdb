import {createDiv} from "../create-div";
import {getItemsFromLocalStorage} from "./get-items-from-localstorage";
import {createCart} from "./create-cart";
import {addNewClass} from '../add-new-class';

export const openCart = (e) => {
    const target = e.target;
    console.log(target)
    const itemNumber = document.querySelector('.top-panel__counter');
    const cartLogo = document.querySelector('#cart .top-panel__logo');
    const formField = document.querySelector('.search-form');

    if (target.id === 'cart'
        || target.innerText === 'OPEN CART'
        || target.innerHTML === 'Cart'
        || target === cartLogo
        || target === itemNumber) {

        const returnToShopText = 'Go shopping';
        const returnToShopButton = 'modal-close-btn' + '--bottom-right';
        const divToDelete = document.querySelector('.modal-shop-wrapper');

        if (formField.style.display === 'flex') {
            formField.style.display = 'none';
        }

        if (divToDelete) {
            divToDelete.remove('.modal-shop-wrapper');
        }

        createDiv('#products', 'cart-wrapper');
        createDiv('.cart-wrapper', 'cart');
        createDiv('.cart', 'modal-close-btn', 'Close');
        createDiv('.cart', 'modal-close-btn', 'Clear cart');
        createDiv('.cart', 'modal-close-btn', returnToShopText);

        addNewClass('.modal-close-btn', returnToShopButton, returnToShopText);
        addNewClass('.modal-close-btn', 'modal-close-btn--bottom', 'Clear cart');

        const localStorageItems = getItemsFromLocalStorage('id');
        const checkedItems = [];
        const checkedItemsQuantity = {};

        if (localStorageItems) {
            for (let item of localStorageItems) {
                if (!checkedItems.includes(item)) {
                    checkedItems.push(item);
                    checkedItemsQuantity[item] = 1;
                }
                else {
                    ++checkedItemsQuantity[item];
                }
            };

            checkedItems.forEach(createCart);
            createDiv('.cart', 'cart__item');
            createDiv('.cart__item', 'cart__total-price');

            const cartValueList = document.querySelectorAll('.cart__quantity-value');
            const itemsInCart = document.querySelectorAll('.cart__item');
            const modalCartDiv = document.querySelector('.cart');
            const itemPriceList = modalCartDiv.querySelectorAll('.slider-item__price');
            let totalCartPrice = 0;

            for (let i = 0; i < itemsInCart.length; i++) {
                for (let key in checkedItemsQuantity) {
                    if (itemsInCart[i].id === key) {
                        cartValueList[i].innerHTML = checkedItemsQuantity[key] + ' pcs';

                        const itemPriceText = itemPriceList[i].innerHTML;
                        const itemPrice = +itemPriceText.slice(1, -4);
                        const totalItemPrice = +(itemPrice * checkedItemsQuantity[key]).toFixed(2);
                        totalCartPrice += totalItemPrice;
                        itemPriceList[i].innerHTML = '$' + totalItemPrice + ' USD';
                    }
                }
            }

            const totalPriceDiv = itemsInCart[itemsInCart.length - 1].querySelector('.cart__total-price');
            totalPriceDiv.innerHTML = 'Total: $' + totalCartPrice + ' USD';

        }
        else {
            createDiv('.cart', 'cart__text', "Cart is empty, let's go shopping =))");
            createDiv('.cart', 'cart__img');
        }
    }
}