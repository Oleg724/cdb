export const removeAllChildNodes = (elem, clazz) => {
    const $nodes = elem.querySelectorAll(clazz);
    $nodes.forEach(($node) => $node.remove());
}