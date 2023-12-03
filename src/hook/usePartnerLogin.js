import { useToast } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { partnerLoginApi } from "../api/PartnerApi";
import { setSession } from "../utils/sessionUtils";

const usePartnerLogin = () => {

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

    const onLogin = async (values) => {
        const {
            email,
            password
        } = values;

        const req = {
            email,
            password
        };

        const res = await partnerLoginApi({ req, headerConfig: {}});;
        const { token, account_sid } = res?.data || {};
        if (!token || !account_sid) {
            toast({
                title: "Invalid Credentials",
                description: "Please retry with valid credentials.",
                status: "error",
                duration: 5000,
                isClosable: true
            });
        }

        setSession("token", token);
        setSession("account_sid", account_sid);
        toast({
            title: "Welcome back",
            description: "Lots of new features and customer awaits your business!",
            status: "success",
            duration: 5000,
            isClosable: true
        });

    };

    const partnerLogout = () => {}

    return {
        register,
        onLogin,
        handleSubmit,
        errors,
        getFieldState,
        isValid,
        isSubmitting,
        partnerLogout
    }

};

export default usePartnerLogin;