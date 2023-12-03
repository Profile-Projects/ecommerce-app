import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BACKEND_API}/partner`;

export const partnerLoginApi = async ({
    req,
    headerConfig = {}
}) => {
    return await axios.post(
        `${BASE_URL}/login`,
        { ...req},
        {...headerConfig}
    );
};

export const partnerLogoutApi = async ({
    headers = {},
    partner_sid
}) => {
    return await axios.post(
        `${BASE_URL}/logout`,
        {
            partner_sid
        },
        {
            headers
        }
    );
}