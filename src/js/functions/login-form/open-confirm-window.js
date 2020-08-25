import {checkFormFill} from "./check-form-fill";
import {closeConfirmWindow} from "../login-form-email-input/close-confirm-window";

export const openConfirmWindow = (e) => {
    e.preventDefault();
    const target = e.target;
    const displayClass = 'confirm-window--display';
    const $confirmWindow = document.querySelector('.confirm-window');

    if (target.classList.contains('form__btn') || target.classList.contains('form-btn')) {
        checkFormFill(target, $confirmWindow);
        $confirmWindow.classList.add(displayClass);

        setTimeout(closeConfirmWindow, 2500, $confirmWindow, displayClass);
    };
}