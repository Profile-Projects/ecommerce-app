import React from "react";
import { useForm } from "react-hook-form";
import { getHeaderConfig } from "../utils/sessionUtils";
import { addCategoryApi } from "../api/ProductApi";
import { useToast } from "@chakra-ui/react";

const useProductCategory = () => {

    const {
        register,
        handleSubmit,
        formState: {
            isValid,
            isSubmitting,
            errors
        },
        getFieldState,
    }= useForm({
        mode: "onBlur"
    });

    const toast = useToast();

    const getCategories = () => {

    };

    const addCategory = async (values) => {
        const {
            name,
            path
        } = values;

        const { headers } = getHeaderConfig();

        const res = await addCategoryApi({
            req: {
                name,
                path
            },
            headerConfig:  { headers }
        });

        const { sid } = res?.data;
        if (!sid) {
            toast({
                title: "Invalid category data",
                description: "Please retry with valid category data.",
                status: "error",
                duration: 5000,
                isClosable: true
            })
        } else {
            toast({
                title: "Category created!",
                description: "Successfully created category",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        }
    };

    return {
        register,
        handleSubmit,
        isValid,
        isSubmitting,
        errors,
        getCategories,
        addCategory,
        getFieldState
    };
};

export default useProductCategory;