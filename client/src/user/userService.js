import { ADD_USER, MODIFY_USER, REMOVE_USER } from '../core/actionTypes';

const initialState = {
    nextUserId: 0,
    list: []
};

let addUser = (state, properties) => {
    let userId = state.nextUserId;
    return Object.assign({}, state, {
        nextUserId: userId + 1,
        list: [
            ...state.list,
            Object.assign({}, properties, { id: userId })
        ]
    });
}

let modifyUser = (state, properties) => {
    let user = state.list.find((item) => item.id === properties.id);
    let index = user ? state.list.indexOf(user) : -1;
    return index === -1 ?
        state :
        Object.assign({}, state, {
            list: [
                ...state.list.slice(0, index),
                Object.assign({}, user, properties),
                ...state.list.slice(index + 1)
            ]
        });
};

let removeUser = (state, userId) => {
    let index = state.list.findIndex((item) => item.id === userId);
    return index === -1 ?
        state :
        Object.assign({}, state, {
            list: [
                ...state.list.slice(0, index),
                ...state.list.slice(index + 1)
            ]
        });
};

export default function userService(state = initialState, action) {
    switch(action.type){
        case ADD_USER:
            return addUser(state, action.properties);
        case MODIFY_USER:
            return modifyUser(state, action.properties);
        case REMOVE_USER:
            return removeUser(state, action.userId);
        default:
            return state;
    }
}