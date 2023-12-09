import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_API}/product`;

export const addCategoryApi = async ({
    req,
    headerConfig = {}
}) => {
    return await axios.post(`${BASE_URL}/category`,
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
};

export const addProductApi = async ({
    req, headerConfig
}) => {
    return await axios.post(`${BASE_URL}/add`, 
        { ...req }, 
        { ...headerConfig }
    );
};