import React from "react";
import { useForm } from "react-hook-form";
import { customerLoginApi, customerLogoutApi } from "../api/CustomerApi";
import { useToast } from "@chakra-ui/react";
import { getHeaderConfig, setSession } from "../utils/sessionUtils";

const useCustomerLogin = () => {


    const toast = useToast();

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


    const onSubmit = async (values) => {
        console.log(`Submitting ${JSON.stringify(values)}`);

        const {
            email, password
        } = values;

        const req = {
            email,
            password
        };

        const res = await customerLoginApi({req});
        const { token, account_sid } = res?.data;

        if (!token || !account_sid ) {
            toast({
                title: "Invalid Credentials!",
                description: "Please retry with valid credentials.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setSession("token", token);
        setSession("account_sid", account_sid);
        toast({
            title: "Welcome back",
            description: "Lots of new products and offers awaits!",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
    };

    const customerLogout = async ({ customer_sid }) => {
        const { headers } = getHeaderConfig();
        await customerLogoutApi({ headers, customer_sid })
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        errors,
        getFieldState,
        isValid,
        isSubmitting,
        customerLogout
    }
};

export default useCustomerLogin;