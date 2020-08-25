import {removeTabClass} from "./remove-tab-class";

export const openTab = (e) => {
    const target = e.target;
    const $formList = document.querySelectorAll('.modal-login__tab');
    const $switcherList = document.querySelectorAll('.switcher__item');
    const classToShow = 'modal-login__tab--show';
    const classWhite = 'switcher__item--white';

    removeTabClass($switcherList, classWhite);
    target.classList.add(classWhite);
    removeTabClass($formList, classToShow);

    const targetIndex = Array.prototype.indexOf.call($switcherList, target);
    const $formToShow = $formList[targetIndex];
    $formToShow.classList.add(classToShow);
};