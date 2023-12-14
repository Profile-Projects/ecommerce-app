export const addQueryParameters = (params = {}) => {
    const queryParams = ``;
    let len = 0;
    return Object.keys(params)
        .filter(key => {
            const isValid = params[key] !== null && params[key] !== undefined;
            if (isValid) len += 1;
            return isValid;
        })
        .reduce((acc, key, index) => {
            if (index < len - 1) return `${acc}${key}=${params[key]}&`;
            return `${acc}${key}=${params[key]}`
        }, '?');
}