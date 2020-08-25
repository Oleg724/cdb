export const setItemToLocalStorage = (id, arr) => {
    localStorage.setItem(id, JSON.stringify(arr));
}