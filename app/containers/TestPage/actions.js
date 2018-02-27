/**
 * TestPage Actions
 */

import {
    CHANGE_USERNAME,
    ADD_NUMBER,
    SUB_NUMBER,
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

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        number,
    }
}

export function subNumber(number) {
    return {
        type: SUB_NUMBER,
        number,
    }
}
