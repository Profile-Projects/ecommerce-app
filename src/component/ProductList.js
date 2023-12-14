import React, { useEffect } from "react";
import useProductList from "../hook/useProductList";
import { useCallback } from "react";

const ProductList = () => {

    const {
        fetchProducts,
        products
    } = useProductList();

    useEffect(() => {
        fetchProducts({
            partner_account_sid: "PA00006"
        });
    }, [])

    const renderProducts = useCallback(() => {
        return products.map(product => <div>Product</div>)
    }, [products])
    return (
        <>
            {renderProducts()}
        </>
    )
};

export default ProductList;