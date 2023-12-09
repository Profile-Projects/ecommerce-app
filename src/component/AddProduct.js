import React from "react";
import useProduct from "../hook/useProduct";
import { Container } from "@chakra-ui/react";
import RInput from "../lib/Input";
import { getButtonFormProps, getInputFormProps } from "../utils/formUtil";
import RButton from "../lib/Button";
import { useParams } from "react-router-dom";

const AddProduct = () => {

    const {
        partner_account_sid
    } = useParams();

    const {
        register,
        handleSubmit,
        isValid,
        isSubmitting,
        errors,
        onSubmitProduct,
        getFieldState
    } = useProduct({
        partner_account_sid
    });

    const form_props = {
        register,
        errors,
        getFieldState
    };


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmitProduct)}>
                <RInput
                    formProps = {getInputFormProps({
                        id: "name",
                        placeholder: "name",
                        isRequired: true,
                    })}
                    {
                        ...form_props
                    }
                />    
                 <RInput
                    formProps = {getInputFormProps({
                        id: "description",
                        placeholder: "description",
                        isRequired: true,
                    })}
                    {
                        ...form_props
                    }
                />    
                 <RInput
                    formProps = {getInputFormProps({
                        id: "stock",
                        placeholder: "stock",
                        isRequired: true,
                    })}
                    {
                        ...form_props
                    }
                />  
                 <RInput
                    formProps = {getInputFormProps({
                        id: "price",
                        placeholder: "price",
                        isRequired: true,
                    })}
                    {
                        ...form_props
                    }
                />    
                 <RInput
                    formProps = {getInputFormProps({
                        id: "category_sid",
                        placeholder: "Category Sid",
                    })}
                    {
                        ...form_props
                    }
                />  
                <RButton
                    text="Submit"
                    buttonProps={getButtonFormProps({
                        isDisabled: !isValid,
                        isLoading: isSubmitting
                    })}
                />
            </form>
        </Container>
    );
};

export default AddProduct;