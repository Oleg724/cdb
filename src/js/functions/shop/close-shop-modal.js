import {refreshCartCounter} from '../cart/refresh-cart-counter';

export const closeShopModal = (e, elem) => {
    const target = e.target;

    if (target.className === elem) {
        const clazz = target.parentNode.parentNode.className;
        const $modalToClose = document.querySelector('.' + clazz);

        $modalToClose.remove();
    }

    refreshCartCounter()
}