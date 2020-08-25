export const mouseOverActiveClass = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active');
        }
    }
}