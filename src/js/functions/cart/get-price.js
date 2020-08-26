export const getPrice = (total, quantity) => {
    return quantity >= 1
        ? +(total/quantity).toFixed(2)
        : 0;
}