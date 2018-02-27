/**
 * MainPage selectors
 */

import { createSelector } from 'reselect';

const selectMain = (state) => state.get('main');

const makeSelectSubHeaderText = () => createSelector(
    selectMain,
    (mainState) => mainState.get('subHeaderText')
);

const makeSelectInputSubHeaderText = () => createSelector(
    selectMain,
    (mainState) => mainState.get('inputSubHeaderText')
);

const makeSelectChatArea = () => createSelector(
    selectMain,
    (mainState) => mainState.get('chat')
);

const makeSelectUserList = () => createSelector(
    selectMain,
    (mainState) => mainState.get('userList')
);

const makeSelectMainUserId = () => createSelector(
    selectMain,
    (mainState) => mainState.get('mainUserId')
);

const makeSelectInputUser = () => createSelector(
    selectMain,
    (mainState) => mainState.get('inputUser')
);

const makeSelectMaxUser = () => createSelector(
    selectMain,
    (mainState) => mainState.get('maxUser')
);

const makeSelectChatList = () => createSelector(
    selectMain,
    (mainState) => mainState.get('chatList')
);

const makeSelectSpeakSensor = () => createSelector(
    selectMain,
    (mainState) => mainState.get('speakSensor')
);

export {
    selectMain,
    makeSelectSubHeaderText,
    makeSelectInputSubHeaderText,
    makeSelectChatArea,
    makeSelectUserList,
    makeSelectMainUserId,
    makeSelectInputUser,
    makeSelectMaxUser,
    makeSelectChatList,
    makeSelectSpeakSensor,
};
