export const removeTabClass = (arr, clazz) => {
    arr.forEach((item) => {
        item.classList.remove(clazz);
    });
};