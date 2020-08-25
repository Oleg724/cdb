import {getCartItemsNumber} from "./get-cart-items-number";
import {createDiv} from "../create-div";

export const createCartCounter = () => {
    const number = getCartItemsNumber();
    createDiv('#cart', 'top-panel__counter', `(${number})`);
}