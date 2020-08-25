import {getItemsFromLocalStorage} from './get-items-from-localstorage';

export const refreshCartCounter = () => {
    const itemNumber = document.querySelector('.top-panel__counter');

    if (getItemsFromLocalStorage('id')) {
        itemNumber.innerHTML = `(${getItemsFromLocalStorage('id').length})`;
    }
    else {
        itemNumber.innerHTML = '(0)';
    }
}