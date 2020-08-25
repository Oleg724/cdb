import {addClass} from "./add-class";
import {mouseOutActiveClass} from "./mouse-out-active-class";

export const clearRate = (e) => {
    const target = e.target;
    
    if (target.classList.contains('rating__path')) {
        const $ratingParent = target.parentNode.parentNode.parentNode;
        const $ratingItem = $ratingParent.querySelectorAll('.rating__path');

        addClass($ratingItem, 'active');
        mouseOutActiveClass($ratingItem);
    }
}