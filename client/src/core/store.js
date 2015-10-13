import thunkMiddleware from 'redux-thunk';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';

import authService from './../auth/authService';
import userService from './../user/userService';

const reducer = combineReducers({
    auth: authService,
    users: userService
});

/*const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);*/

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);

let store = finalCreateStore(reducer);

export default store;