export const mouseOutActiveClass = (arr) => {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i].classList.contains('current-active')) {
            break;
        } else {
            arr[i].classList.remove('active');
        }
    }
}