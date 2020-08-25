export const addClass = (arr, className) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add(className);
    }
}