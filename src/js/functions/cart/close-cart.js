export const closeCart = () => {
    const $modalCartWrapper = document.querySelector('.cart-wrapper');

    $modalCartWrapper ? $modalCartWrapper.remove() : null;
}