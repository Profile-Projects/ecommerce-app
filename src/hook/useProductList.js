import { useToast } from "@chakra-ui/react";
import { fetchProductListApi } from "../api/ProductApi";
import { getHeaderConfig } from "../utils/sessionUtils";
import { useState } from "react";


const useProductList = () => {

    const toast = useToast();

    const [products, setProducts] = useState([]);

    const fetchProducts = async ({
        partner_account_sid,
        category_sid,
        in_stock = true,
        min_price,
        max_price
    }) => {
        const { headers } = getHeaderConfig();
        const response = await fetchProductListApi({
            headers,
            partner_account_sid,
            category_sid,
            in_stock,
            min_price,
            max_price
        });
        const { products = [] } = response?.data;
        if (!products || !products.length) {
            toast({
                title: "Failed to fetch product list",
                description: "Please try again after sometime or contact support",
                status: "error",
                duration: 5000,
                isClosable: true
            })
            return;
        }
        setProducts(products);
    };
    return {
        fetchProducts,
        products
    };
}

export default useProductList;