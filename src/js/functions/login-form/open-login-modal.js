import {closeBurgerMenu} from "../close-burger-menu";

export const openLoginModal = (e, elem) => {
    e.preventDefault();
    closeBurgerMenu();

    const target = e.target;
    const $elemTitle = document.querySelector('#login-text');
    const $elemLogo = elem.querySelector('.top-panel__logo');
    const $formField = document.querySelector('.search-form');

    if (target === elem || target === $elemTitle || target === $elemLogo) {
        const $modalWindow = document.querySelector('.modal-login');
        $modalWindow.style.visibility = 'visible';
    }

    if ($formField.style.display === 'flex') {
        $formField.style.display = 'none';
    }
}