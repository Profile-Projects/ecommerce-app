
export const setSession = (key, value) => {
    window.sessionStorage.setItem(key, value);
}

export const getSession = (key) => {
    const value = window.sessionStorage.getItem(key);
    if (value === null) {
        return "";
    }
    return value;
}

export const getHeaderConfig = () => {
    const account_sid = getSession("account_sid");
    const account_token = getSession("token");
    return {
        headers: {
            account_sid,
            account_token
        }
    }
}