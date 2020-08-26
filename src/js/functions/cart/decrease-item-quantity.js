export const decreaseItemQuantity = (quantity) => {
    return quantity >= 1
        ? --quantity
        : 0;
}