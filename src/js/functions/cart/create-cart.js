import {createDiv} from "../create-div";
import {removeAllChildNodes} from "../remove-all-child-nodes";

export const createCart = (elem) => {
    const $item = document.querySelector('#' + elem);
    const $cloned = $item.cloneNode(true);
    const $modal = document.querySelector('.cart');

    $cloned.classList.add('cart__item');
    $modal.appendChild($cloned);

    createDiv('.cart__item', 'cart__quantity');
    createDiv('.cart__quantity', 'cart__quantity-change');
    createDiv('.cart__quantity-change', 'cart__plus');
    createDiv('.cart__quantity-change', 'cart__minus');
    createDiv('.cart__quantity', 'cart__quantity-value');

    removeAllChildNodes($modal, '.rating');
}