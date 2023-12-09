import { Card, Center } from "@chakra-ui/react";
import React from "react";
import useProductCategory from "../hook/useProductCategory";
import RInput from "../lib/Input";
import { getButtonFormProps, getInputFormProps } from "../utils/formUtil";
import RButton from "../lib/Button";

const ProductCategoryAdd = () => {

    const {
        register,
        handleSubmit,
        addCategory,
        errors,
        isValid,
        isSubmitting,
        getFieldState,
    } = useProductCategory();

    const formProps = {
        register,
        errors,
        getFieldState
    }

    return (
        <Center>
            <Card>
            <form onSubmit={handleSubmit(addCategory)}>
                <RInput
                    formProps = {getInputFormProps({
                        id: "name",
                        placeholder: "name",
                        isRequired: true,
                    })}
                    {
                        ...formProps
                    }
                />
                <RInput
                    formProps = {getInputFormProps({
                        id: "path",
                        placeholder: "path",
                        isRequired: true,
                    })}
                    {
                        ...formProps
                    }
                />
                <RButton
                    text="Add Category"
                    buttonProps = {getButtonFormProps({
                        isDisabled: !isValid,
                        isLoading: isSubmitting
                    })}
                />
            </form>
            </Card>
        </Center>
    );
};

export default ProductCategoryAdd;