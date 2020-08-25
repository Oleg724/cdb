import {hideBlocks} from "./hide-blocks";
import {showBlock} from "./show-blocks";

export const showCurrentBlock = (e, titles, list) => {
    hideBlocks(e, list);
    showBlock(e, titles, list);
}