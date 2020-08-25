export const changeHeaderColor = () => {
    const $header = document.querySelector('.header');

    window.pageYOffset === 0
        ? $header.classList.remove('header--bg-green')
        : $header.classList.add('header--bg-green');
}