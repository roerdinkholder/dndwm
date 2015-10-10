// Core
import * as actionTypes from './actionTypes';

export function addUser(properties) {
    return {
        type: actionTypes.ADD_USER,
        properties
    };
}

export function getUser(userId) {
    return {
        type: actionTypes.GET_USER,
        userId
    };
}

export function getAllUsers() {
    return {
        type: actionTypes.GET_ALL_USERS
    };
}

export function modifyUser(properties) {
    return {
        type: actionTypes.MODIFY_USER,
        properties
    };
}

export function removeUser(userId) {
    return {
        type: actionTypes.REMOVE_USER,
        userId
    };
}