import { useToast } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { addProductApi } from "../api/ProductApi";
import { getHeaderConfig } from "../utils/sessionUtils";

const useProduct = ({
    partner_account_sid
}) => {

    const {
        register,
        handleSubmit,
        formState: {
            isValid,
            isSubmitting,
            errors
        },
        getFieldState
    } = useForm({
        mode: "onBlur"
    });

    const toast = useToast();

    const onSubmitProduct = async (values) => {
        const {
            name,
            description,
            stock,
            price,
            category_sid = "CT00004"
        } = values;

        const req = {
            name,
            description,
            stock,
            price,
            category_sid,
            partner_account_sid
        }
        const res = await addProductApi({
            req,
            headerConfig: {
                ...getHeaderConfig()
            }
        });

        const { sid, message } = res?.data;

        if (!sid) {
            toast({
                title: "Product addition was a failure!",
                description: message || "Please try again",
                status: "error",
                isClosable: true,
                duration: 5000
            })
        } else {
            toast({
                title: `Product: ${sid} was successfully added`,
                description: `Customers will be able to purchase the product!`,
                status: "success",
                isClosable: true,
                duration: 5000
            })
        }

    }

    return {
        register,
        handleSubmit,
        isValid,
        isSubmitting,
        errors,
        onSubmitProduct,
        getFieldState
    }
};

export default useProduct;