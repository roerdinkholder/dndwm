// Vendor
import { combineReducers, createStore } from 'redux';
import { userService } from './../user/userService';

// Core
import * as actionTypes from './actionTypes';

function userService(state = initialState, action) {
    switch(action.type){
        case actionTypes.ADD_USER:
            return Object.assign({}, state, {
                users: [...state.users, action.properties]
            });
        case actionTypes.MODIFY_USER:
            let user = state.users.find((item) => item.id === action.properties.id);
            let index = user ? state.users.indexOf(user) : -1;
            return index === -1 ?
                state :
                [
                    ...state.users.slice(0, index),
                    Object.assign({}, user, action.properties),
                    ...state.users.slice(index + 1)
                ];
        case actionTypes.REMOVE_USER:
            let index = state.users.findIndex((item) => item.id === action.userId);
            return index === -1 ?
                state :
                [
                    ...state.users.slice(0, index),
                    ...state.users.slice(index + 1)
                ];
        default:
            return state;
    }
}

let userStore = createStore(combineReducers({
    users: userService
}));