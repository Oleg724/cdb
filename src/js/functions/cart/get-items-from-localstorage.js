export const getItemsFromLocalStorage = (id) => {
    return JSON.parse( localStorage.getItem(id) );
}