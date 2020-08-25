export const removeClass = (arr, clazz) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(clazz);
    }
}