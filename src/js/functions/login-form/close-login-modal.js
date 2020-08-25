export const closeLoginModal = (e, elem) => {
    const target = e.target;

    if (target === elem) {
        const $modalWindow = document.querySelector('.modal-login');
        $modalWindow.style.visibility = 'hidden';
    }
}