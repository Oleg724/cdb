import {closeBurgerMenu} from "../close-burger-menu";

export const openSearchField = (e, elem) => {
    const target = e.target;
    const $elemTitle = document.querySelector('#search-text');
    const $elemLogo = elem.querySelector('.top-panel__logo');
    const $formField = document.querySelector('.search-form');

    e.preventDefault();
    closeBurgerMenu();

    if (target === elem
        || target === $elemTitle
        || target === $elemLogo) {
        $formField.style.display = 'flex';
    }
}