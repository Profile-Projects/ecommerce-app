import axios from "axios";
import { addQueryParameters } from "./apiUtils";

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

export const fetchProductListApi = async ({
    headers = {},
    partner_account_sid,
    category_sid,
    in_stock,
    min_price,
    max_price
}) => {
    const query_parameters = addQueryParameters({
        partner_account_sid,
        category_sid,
        in_stock,
        min_price,
        max_price
    });
    return await axios.get(`${BASE_URL}${query_parameters}`, {
        headers
    })
};