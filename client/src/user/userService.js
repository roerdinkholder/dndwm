import { ADD_USER, MODIFY_USER, REMOVE_USER } from './../core/actionTypes';

let nextUserId = 0;

let addUser = (state, properties) => {
    return [
        ...state,
        Object.assign({}, properties, { id: nextUserId++ })
    ];
}

let modifyUser = (state, properties) => {
    let user = state.find((item) => item.id === properties.id);
    let index = user ? state.indexOf(user) : -1;
    return index === -1 ?
        state :
        [
            ...state.slice(0, index),
            Object.assign({}, user, properties),
            ...state.slice(index + 1)
        ];
};

let removeUser = (state, userId) => {
    let index = state.findIndex((item) => item.id === userId);
    return index === -1 ?
        state :
        [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ];
};

export default function userService(state = [], action) {
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