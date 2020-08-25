export const openPanel = (e) => {
    const target = e.target;

    const $panelHeadingDivs = document.querySelectorAll('.panel__heading');
    const $panelHeadingDiv = target.closest('.panel__heading');

    if (target.className === 'panel__link' || target.className === 'panel__icon') {
        for (let item of $panelHeadingDivs) {
            if (!$panelHeadingDiv.classList.contains('in')) {
                item.classList.remove('in');
            }
        }
        $panelHeadingDiv.classList.toggle('in');
    }
}

