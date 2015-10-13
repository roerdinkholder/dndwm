import * as localStorage from './localStorage';

const localStorageAuthTokenKey = 'authToken';

export let onChange = () => {};

export let login = (accountName, password) {
    if (localStorage.get(localStorageAuthTokenKey)) {
        onChange(true);
    } else {
        setTimeout(() => {
            if (accountName === 'Hans' && pass === 'Demo1234') {
                localStorage.set(localStorageAuthTokenKey, Math.random().toString(36).substring(7));
                onChange(true);
            } else {
                onChange(false);
            }
        }, 1000)
    }
};

export let logout = () => {
    localStorage.remove(localStorageAuthTokenKey);
    onChange(false);
};

export let getToken = () => localStorage.get(localStorageAuthTokenKey);

export let isAuthenticated = () => !!getToken();