import {getItemsFromLocalStorage} from "./get-items-from-localstorage";

export const getCartItemsNumber = () => {

    return getItemsFromLocalStorage('id')
        ? getItemsFromLocalStorage('id').length
        : 0;
}