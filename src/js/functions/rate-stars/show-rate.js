import {removeClass} from "./remove-class";
import {mouseOverActiveClass} from "./mouse-over-active-class";

export const showRate = (e) => {
    const target = e.target;
    let $ratingItem;

    if (target.classList.contains('rating__path')) {
        const $ratingParent = target.parentNode.parentNode.parentNode;
        $ratingItem = $ratingParent.querySelectorAll('.rating__path');

        removeClass($ratingItem, 'active');
        target.classList.add('active');
        mouseOverActiveClass($ratingItem);
    }

    return $ratingItem;
}