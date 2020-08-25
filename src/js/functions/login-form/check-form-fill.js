export const checkFormFill = (elem) => {
    const $parent = elem.parentNode;
    const $list = $parent.childNodes;
    const $confirmWindowText = document.querySelector('.confirm-window__text');

    for (let i = 0; i < $list.length; i++) {
        if ($list[i].tagName === 'INPUT' && $list[i].value === "") {
            $confirmWindowText.textContent = `Please, fill all fields`;
            break;
        }
        else if ($list[i].tagName === 'INPUT' && $list[i].value !== "") {

            if ($list[i].type === 'email' && $list[i].value.indexOf('@') < 1) {
                $confirmWindowText.textContent = `Please, fill all fields`;
                break;
            }
            $confirmWindowText.textContent = 'Data sent successfully!';
        }
    }
}