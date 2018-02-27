/**
 * MainPage Actions
 */

import {
    CHANGE_SUBHEADERTEXT,
    CHANGE_INPUT_SUBHEADERTEXT,
    CHANGE_CHATAREA,
    ADD_USER,
    REMOVE_USER,
    CHANGE_INPUT_USER,
    ADD_USER_TEST,
    CHANGE_MAIN_USER,
    ADD_MESSAGE,
    CHANGE_SPEAKSENSOR,
} from './constants';

/**
 * 대화방 부제목 변경
 */
export function changeSubHeaderText() {
    return {
        type: CHANGE_SUBHEADERTEXT,
    };
}

/**
 * 대화방 부제목 InputText 변경
 */
export function changeInputSubHeaderText(text) {
    return {
        type: CHANGE_INPUT_SUBHEADERTEXT,
        text,
    };
}

/**
 * 우측확장영역 토글
 */
export function changeChatArea(value) {
    return {
        type: CHANGE_CHATAREA,
        value,
    };
}

/**
 * 참여자 추가
 */
export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    };
}

/**
 * 참여자 제거
 */
export function removeUser(user) {
    return {
        type: REMOVE_USER,
        user,
    };
}

/**
 * 참여자 input 변경
 */
export function changeInputUser(user) {
    return {
        type: CHANGE_INPUT_USER,
        user,
    };
}

export function changeMainUser(user) {
    return {
        type: CHANGE_MAIN_USER,
        user,
    };
}

/**
 * 채팅 추가
 */
export function addMessage(msg) {
    return {
        type: ADD_MESSAGE,
        msg,
    };
}

/**
 * 말하기 감지기능 설정
 */
export function changeSpeakSensor(value) {
    return {
        type: CHANGE_SPEAKSENSOR,
        value,
    };
}
