export const addNewClass = (clazz, classToAdd, text) => {
    const $nodes = document.querySelectorAll(clazz);

    $nodes.forEach((item) => {
        if (item.innerHTML === text) {
            item.classList.add(classToAdd);
        }
    })
}