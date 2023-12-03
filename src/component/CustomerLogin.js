import { Button, Card, Center } from "@chakra-ui/react";
import React from "react";
import useCustomerLogin from "../hook/useCustomerLogin";
import RInput from "../lib/Input";
import { getButtonFormProps, getInputFormProps } from "../utils/formUtil";
import RButton from "../lib/Button";

const CustomerLogin = () => {

    const {
        register,
        onSubmit,
        handleSubmit,
        errors,
        getFieldState,
        isValid,
        isSubmitting,
        customerLogout
    } = useCustomerLogin();

    const form_props = {
        register,
        errors,
        getFieldState
    }

    return (
        <Center>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RInput
                        formProps = {getInputFormProps({
                                id: "email",
                                placeholder: "email",
                                isRequired: true,
                                minLength: 4,
                            })
                        }
                        {
                            ...form_props
                        }
                    />
                    <RInput
                        formProps = {getInputFormProps({
                                id: "password",
                                placeholder: "password",
                                isRequired: true,
                                minLength: 4,
                            })
                        }
                        {
                            ...form_props
                        }
                    />
                    

                    <RButton
                        text="Login"
                        buttonProps={getButtonFormProps({
                            isDisabled: !isValid,
                            isLoading: isSubmitting,
                        })}
                    />
                </form>

                <Button onClick={() => customerLogout()}>
                    Logout
                </Button>
            </Card>
        </Center>
    );
};

export default CustomerLogin;