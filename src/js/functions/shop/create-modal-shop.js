export const createModalShop = (elem, clazz) => {
    const $cloned = elem.cloneNode(true);
    const $modalShop = document.querySelector('.modal-shop');

    $cloned.classList.add(clazz);
    $modalShop.appendChild($cloned);
}