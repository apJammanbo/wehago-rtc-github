/**
 * TestPage selectors
 */
import { createSelector } from 'reselect';

const selectTest = (state) => state.get('test');

const makeSelectUsername = () => createSelector(
    selectTest,
    (homeState) => homeState.get('username')
);

const makeSelectNumber = () => createSelector(
    selectTest,
    (homeState) => homeState.get('number')
);

export {
    selectTest,
    makeSelectUsername,
    makeSelectNumber,
};
