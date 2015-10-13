const keyPrefix = 'dndwm';

export let get = (key) => {
    return localStorage.getItem(keyPrefix + key);
}

export let set = (key, data) => {
    return localStorage.setItem(keyPrefix + key, data);
}

export let remove = (key) => {
    return localStorage.removeItem(keyPrefix + key);
}