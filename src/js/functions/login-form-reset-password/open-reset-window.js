export const openResetWindow = (e, elem) => {

    if (e.target.className === 'modal-login__link') {
        elem.classList.add('modal-login__password-reset--visible');
    }
}