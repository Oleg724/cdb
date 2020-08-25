export const closeBurgerMenu = () => {
    const $header = document.querySelector('.header');
    const $navBtn = $header.querySelector('#navBtn');

    $navBtn.checked = false;
}