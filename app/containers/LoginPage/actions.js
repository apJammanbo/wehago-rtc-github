/**
 * TestPage Actions
 */

import {
    CHANGE_USERNAME,
} from './constants';


/**
 * Changes the input field of the form
 */
export function changeUsername(name) {
    return {
        type: CHANGE_USERNAME,
        name,
    };
}
