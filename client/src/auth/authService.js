import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_ERROR } from '../core/actionTypes';

const initialState = {
    account: null,
    isAuthenticating: false,
    token: null
};

function authLogin(state) {
    // Only allow login if the user is not yet authenticated
    if (state.isAuthenticating || state.account || state.token) {
        return state;
    }
    return Object.assign({}, state, {
        isAuthenticating: true
    });
}

function authLoginSuccess(state, account, token) {
    return Object.assign({}, state, {
        account,
        isAuthenticating: false,
        token
    });
}

function authLoginFailure(state, message) {
    return Object.assign({}, state, {
        account: null,
        isAuthenticating: false,
        token: null
    });
}

function authLoginError(state, error) {
    return Object.assign({}, state, {
        account: null,
        isAuthenticating: false,
        token: null
    });
}

export default function userService(state = initialState, action) {
    switch(action.type){
        case AUTH_LOGIN:
            return authLogin(state, action.accountName, action.password);
        case AUTH_LOGIN_SUCCESS:
            return authLoginSuccess(state, action.account, action.token);
        case AUTH_LOGIN_FAILURE:
            return authLoginFailure(state, action.message);
        case AUTH_LOGIN_ERROR:
            return authLoginError(state, action.error);
        default:
            return state;
    }
}