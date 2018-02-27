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
 * LoginReducer
 */
import { fromJS } from 'immutable';
import {
    CHANGE_USERNAME,
} from "./constants";

// The initial state of the App
const initialState = fromJS({
    username: '',
});

function loginPageReducer(state = initialState, action) {
    // 액션이 일어났을때 State 를 어떻게 변경할지 구현한다.
    switch (action.type) {
        case CHANGE_USERNAME:
            // 입력받은 대화명 값을 새로 state에 저장한다.
            return state.set('username', action.name);

        default:
            return state;
    }
}

export default loginPageReducer;
