import * as actionTypes from './actionTypes';

let authLoginInitiate = () => ({
    type: actionTypes.AUTH_LOGIN
});

let authLoginSuccess = (account, token) => ({
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    account,
    token
});

let authLoginFailure = (message) => ({
    type: actionTypes.AUTH_LOGIN_FAILURE,
    message
});

let authLoginError = (error) => ({
    type: actionTypes.AUTH_LOGIN_ERROR,
    error
});

export function authLogin(accountName, password) {
    return function (dispatch) {
        dispatch(authLoginInitiate());

        // Fake a request
        var promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (!accountName || !password) {
                    reject('Wrong parameters for endpoint')
                }
                if (accountName === 'Hans' && password === 'Demo1234') {
                    resolve({
                        data: {
                            account: {
                                id: 0,
                                name: accountName
                            },
                            token: Math.random().toString(36).substring(7)
                        },
                        failure: null
                    });
                } else {
                    resolve({
                        data: null,
                        failure: 'Incorrect credentials'
                    });
                }
            }, 1000);
        });

        return promise
            .then(response => {
                if (response.failure) {
                    dispatch(authLoginFailure(response.failure));
                } else {
                    dispatch(authLoginSuccess(response.data.account, response.data.token));
                }
            })
            .catch(error => dispatch(authLoginError(error)));
    };
}

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