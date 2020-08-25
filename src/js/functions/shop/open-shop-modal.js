import {createDiv} from "../create-div";
import {createModalShop} from "./create-modal-shop";
import {closeBurgerMenu} from '../close-burger-menu';
import {closeCart} from '../cart/close-cart';

export const openShopModal = (e) => {
    const $items = document.querySelectorAll('#products .slider-item');
    const $modalShopButton = document.querySelector('.modal-btn__link');
    const target = e.target;

    closeBurgerMenu();

    if (target === $modalShopButton
        || target.innerHTML === 'Shop'
        || target.innerHTML === 'Go shopping') {

        closeCart();

        createDiv('#products', 'modal-shop-wrapper');
        createDiv('.modal-shop-wrapper', 'modal-shop');
        createDiv('.modal-shop', 'modal-close-btn', 'Close');

        $items.forEach((item) => {
            if (item.id) {
                createModalShop(item, 'modal-shop__item')
            }
        });
    }
}