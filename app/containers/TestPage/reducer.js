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
  CHANGE_USERNAME,
  ADD_NUMBER,
  SUB_NUMBER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
    number: 10,
});

function testPageReducer(state = initialState, action) {
    // 액션이 일어났을때 State 를 어떻게 변경할지 구현한다.
    switch (action.type) {
        case CHANGE_USERNAME:
            // username 의 Input 값이 변경되면 실행된다.
            return state.set('username', action.name.replace(/@/gi, ''));

        case ADD_NUMBER:
            return state.set('number', state.get('number') + action.number);

        case SUB_NUMBER:
            return state.set('number', state.get('number') - action.number);

        default:
            return state;
    }
}

export default testPageReducer;
