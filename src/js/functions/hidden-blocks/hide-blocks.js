export const hideBlocks = (e, list) => {
    const target = e.target;

    if (target.classList.contains('hidden-blocks__title')) {
        for (let item of list) {
            item.style.opacity = '0';
        }
    }
}