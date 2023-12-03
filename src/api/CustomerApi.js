import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_API}/customer`;

export const customerLoginApi = async ({
    req,
    headerConfig = {}
}) => {
    return await axios.post(`${BASE_URL}/login`,
     { ...req },
     {...headerConfig});
};

export const customerLogoutApi = async ({
    headers = {},
    customer_sid
}) => {
    return await axios.post(`${BASE_URL}/logout`, { customer_sid }, {
        headers
    });
}