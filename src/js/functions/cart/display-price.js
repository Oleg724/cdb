export const displayPrice = (elem, num, text = '$') => {
    elem.innerHTML = text + num + ' USD';
}