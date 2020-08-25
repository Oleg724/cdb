import {createDiv} from "../create-div";

export const refreshItemPriceQuantity = (e) => {
    const target = e.target;
    const parentDiv = target.closest('.cart__item');
    const itemQuantityDiv = parentDiv.querySelector('.cart__quantity-value');
    const itemPriceDiv = parentDiv.querySelector('.slider-item__price');

    let itemPrice = +itemPriceDiv.innerHTML.slice(1, -4);
    let itemQuantity = +itemQuantityDiv.innerHTML.slice(0, -4);

    let price;

    if (itemQuantity >= 1) {
        price = +(itemPrice/itemQuantity).toFixed(2);
    }
    else {
        price = 0;
    }

    const totalPriceDiv = document.querySelector('.cart__total-price');
    const totalPrice = +totalPriceDiv.innerHTML.slice(8, -4);
    let newQuantity;
    let newTotalCartPrice;

    if (target.className === 'cart__plus') {
        newQuantity = ++itemQuantity;
        newTotalCartPrice = +(totalPrice + price).toFixed(2);
    }
    else if (target.className === 'cart__minus') {
        if (itemQuantity >= 1) {
            newQuantity = --itemQuantity;
        }
        else {
            newQuantity = 0;
        }

        newTotalCartPrice = +(totalPrice - price).toFixed(2);
    }

    const newPrice = (price * newQuantity).toFixed(2);

    itemQuantityDiv.innerHTML = newQuantity + ' pcs';
    itemPriceDiv.innerHTML = '$' +  newPrice  + ' USD';
    totalPriceDiv.innerHTML = 'Total: $' + newTotalCartPrice + ' USD';

    if (newPrice === '0.00') {
        parentDiv.parentNode.removeChild(parentDiv);
    }

    if (newTotalCartPrice === 0) {
        createDiv('.cart', 'cart__text', "Cart is empty, let's go shopping");
        createDiv('.cart', 'cart__img');
    }
}