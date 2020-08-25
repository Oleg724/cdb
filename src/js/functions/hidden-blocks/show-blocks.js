export const showBlock = (e, titles, list) => {
    const target = e.target;

    for (let i = 0; i < titles.length; i++) {
        if (target.htmlFor === titles[i].htmlFor) {
            list[i].style.opacity = '1';
        }
    }
}