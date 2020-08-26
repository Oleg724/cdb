export const getTotalItemPrice = (elem, quantity) => {
    const text = elem.innerHTML;
    const number = +text.slice(1, -4);
    return +(number * quantity).toFixed(2);
}