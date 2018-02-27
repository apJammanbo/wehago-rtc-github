/**
 * LoginPage selectors
 */
import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectUsername = () => createSelector(
    selectLogin,
    (homeState) => homeState.get('username')
);

export {
    selectLogin,
    makeSelectUsername,
};
