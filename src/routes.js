import { createBrowserRouter } from "react-router-dom";
import CustomerLogin from "./component/CustomerLogin";
import CustomerLogout from "./component/CustomerLogout";
import PartnerLogin from "./component/PartnerLogin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <CustomerLogin />
    },
    {
        path: '/sign-up',
        element: <>Customer Sign up</>
    },
    {
        path: '/logout/:customer_sid',
        element: <CustomerLogout />
    },
    {
        path: '/partner/login',
        element: <PartnerLogin />
    },
    {
        path: '/partner/sign-up',
        element: <>Partner Signup</>
    }
]);