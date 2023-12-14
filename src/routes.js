import { createBrowserRouter } from "react-router-dom";
import CustomerLogin from "./component/CustomerLogin";
import CustomerLogout from "./component/CustomerLogout";
import PartnerLogin from "./component/PartnerLogin";
import ProductCategoryAdd from "./component/ProductCategoryAdd";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";

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
    },
    {
        path: `/partner/category`,
        element: <ProductCategoryAdd />
    },
    {
        path: `/partner/:partner_account_sid/product/add`,
        element: <AddProduct />
    },
    {
        path: `/products`,
        element: <ProductList />
    }
]);