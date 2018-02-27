/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

/**
 * MainReducer
 */
import { fromJS } from 'immutable';

import {
    CHANGE_SUBHEADERTEXT,
    CHANGE_INPUT_SUBHEADERTEXT,
    CHANGE_CHATAREA,
    ADD_USER,
    REMOVE_USER,
    CHANGE_INPUT_USER,
    CHANGE_MAIN_USER,
    ADD_MESSAGE,
    CHANGE_SPEAKSENSOR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    subHeaderText: "Wehago 영상대화",
    inputSubHeaderText: "",
    chat: true,
    userList: [],
    mainUserId: '',
    inputUser: '',
    maxUser:5,
    chatList: [],
    speakSensor: true,
});

function mainPageReducer(state = initialState, action) {
    // 액션이 일어났을때 State 를 어떻게 변경할지 구현한다.
    switch (action.type) {
        case CHANGE_SUBHEADERTEXT:
            // 서브헤더의 타이틀 Input 값이 변경되면 실행된다.
            return state.set('subHeaderText', state.get('inputSubHeaderText'));

        case CHANGE_INPUT_SUBHEADERTEXT:
            // 입력받은 서브헤더 타이틀 Input 값을 새로 state에 저장한다.
            return state.set('inputSubHeaderText', action.text);

        case CHANGE_CHATAREA:
            // 채팅 토글버튼으로 채팅창을 컨트롤한다.
            let flag = state.get('chat');
            flag = !flag;
            return state.set('chat', flag);

        case ADD_USER:
            return addUser(state, action);

        case REMOVE_USER:
            return removeUser(state, action);

        case CHANGE_INPUT_USER:
            // 입력받은 User Input 값을 새로 state에 저장한다.
            return state.set('inputUser', action.user);

        case CHANGE_MAIN_USER:
            return state.set('mainUserId', action.user.get('userid'));

        case ADD_MESSAGE:
            // 입력받은 채팅 값을 추가한다.
            return addMessage(state, action);

        case CHANGE_SPEAKSENSOR:
            // 말하기감지기능 설정한다.
            let sensor = true;
            if(action.value === "LUXRadioButton_use") {
                sensor = true;
            }else {
                sensor = false;
            }
            return state.set('speakSensor', sensor);

        default:
            return state;
    }
}

/**
 * 새로운 사용자가 있을때의 액션
 */
function addUser(state, action) {
    // 새로운 사용자가 접속하면 발생한다.
    let retState = state;
    let userList = state.get('userList');

    // 최대인원을 초과하면
    if(userList.count() >= state.get('maxUser')) {
        console.log("Room Full !!");
        return state;

    }else {
        let user = fromJS(action.user);
        if(userList.size === 0) {
            // 처음 접속이면 처음 접속하는 사람을 메인비디오로 설정한다.
            retState = retState.set('mainUserId', user.get('userid'));
        }
        userList = userList.push(user);

        return retState.set('userList', userList);
    }
}

/**
 * 사용자가 접속종료 했을때의 액션
 */
function removeUser(state, action) {
    // 참여자가 방을 나가면 발생한다.

    let retState = state;
    let userList = state.get('userList');
    let deleteUser = fromJS(action.user);

    // 1. 방을 나간 유저가 현재 메인 유저인지 판단.
    let isMainUser = state.get('mainUserId') === deleteUser.get('userid');

    // 2. 참여자를 유저 리스트에서 삭제
    let userIndex = userList.findIndex(user => user.get('userid') === deleteUser.get('userid'));
    userList = userList.delete(userIndex);

    // 3. 메인 유저가 삭제되면 0번째 인덱스에 있는 유저를 메인 유저로 설정한다.
    if (isMainUser) {
        // 다른 유저 아이디를 메인유저로 설정한다.
        retState = retState.set('mainUserId', userList.getIn([0, 'userid']));
    }

    return retState.set('userList', userList);
}

/**
 * 채팅 추가 액션
 */
function addMessage(state, action) {
    let retState = state;
    let chatList = state.get('chatList');

    chatList = chatList.push(fromJS(action.msg));

    return retState.set('chatList', chatList);
}


export default mainPageReducer;
