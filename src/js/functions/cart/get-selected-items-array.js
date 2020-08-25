import {getItemsFromLocalStorage} from "./get-items-from-localstorage";

export const getSelectedItemsArray = () => {
    return localStorage.getItem('id')
        ? getItemsFromLocalStorage('id')
        : [];
}
