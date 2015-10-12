import { combineReducers, createStore } from 'redux';
import userService from './../user/userService';

const reducer = combineReducers({
    users: userService
});

let store = createStore(reducer);

export default store;