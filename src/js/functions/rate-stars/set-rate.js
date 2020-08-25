import {removeClass} from "./remove-class";

export const setRate = (e) => {
    const target = e.target;
    if (target.classList.contains('rating__path')) {
        const $ratingParent = target.parentNode.parentNode.parentNode;
        const $ratingItem = $ratingParent.querySelectorAll('.rating__path');

        removeClass($ratingItem, 'current-active');
        target.classList.add('active', 'current-active');
    }
}