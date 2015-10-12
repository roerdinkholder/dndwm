import * as actionTypes from './actionTypes';

export let addUser = properties => ({
    type: actionTypes.ADD_USER,
    properties
});

export let modifyUser = properties => ({
    type: actionTypes.MODIFY_USER,
    properties
});

export let removeUser = userId => ({
    type: actionTypes.REMOVE_USER,
    userId
});