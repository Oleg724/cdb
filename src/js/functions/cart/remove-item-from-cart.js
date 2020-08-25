export const removeItemFromCart = (arr, selectedItem) => {
    const indexToRemove = arr.indexOf(selectedItem.id);
    arr.splice(indexToRemove, 1);
}