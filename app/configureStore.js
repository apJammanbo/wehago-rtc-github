/**
 * Store 생성(미들웨어 설정)
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

/**
 * redux-saga 미들웨어 생성
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * 스토어 생성
 */
export default function configureStore(initialState = {}, history) {

    /**
     * 두개의 미들웨어를 생성한다.
     * 1. sagaMiddleware : redux-sagas
     * 2. routerMiddleware : url 경로를 state 로 만든다.
     */
    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    /**
     * Redux DevTools Extension 이 인스톨 되어있으면 그것으 사용 하고 아니면 Redux compose 사용
     */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

    /**
     * Store 생성
     */
    const store = createStore(
        // 리듀서
        createReducer(),
        // initialState
        fromJS(initialState),
        // compose
        composeEnhancers(...enhancers)
    );

    // 확장팩
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
}
