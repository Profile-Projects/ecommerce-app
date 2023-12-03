import { Button, Card, Center } from "@chakra-ui/react";
import React from "react";
import RInput from "../lib/Input";
import { getButtonFormProps, getInputFormProps } from "../utils/formUtil";
import RButton from "../lib/Button";
import usePartnerLogin from "../hook/usePartnerLogin";

const PartnerLogin = () => {

    const {
        register,
        onLogin,
        handleSubmit,
        errors,
        getFieldState,
        isValid,
        isSubmitting,
        partnerLogout
    } = usePartnerLogin();

    const form_props = {
        register,
        errors,
        getFieldState
    }

    return (
        <Center>
            <Card>
                <form onSubmit={handleSubmit(onLogin)}>
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

                <Button onClick={() => partnerLogout()}>
                    Logout
                </Button>
            </Card>
        </Center>
    );
};

export default PartnerLogin;