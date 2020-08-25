export const scrollToAnchor = (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.hasAttribute('href')) {
        const blockID = target.getAttribute('href');

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}