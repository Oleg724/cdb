export const removeChildDiv = (parentDiv, className) => {
    const divsToDelete = parentDiv.querySelectorAll(className);
    divsToDelete.forEach((item) => item.remove());
}