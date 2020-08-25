export const createDiv = (parentID, className, innerText) => {
    const $parentList = document.querySelectorAll(parentID);

    const $parent = (
        !$parentList[$parentList.length - 1]
            ? $parentList[0]
            : $parentList[$parentList.length - 1]);

    const $newDiv = document.createElement('div');
    $newDiv.classList.add(className);

    innerText ? $newDiv.innerHTML = innerText : null;

    $parent.appendChild($newDiv);
}