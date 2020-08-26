import {createDiv} from "../create-div";

export const showEmptyCart = () => {
    createDiv('.cart', 'cart__text', "Cart is empty, let's go shopping =))");
    createDiv('.cart', 'cart__img');
}