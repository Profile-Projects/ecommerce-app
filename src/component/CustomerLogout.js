import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCustomerLogin from "../hook/useCustomerLogin";

const CustomerLogout = () => {

    const {
        customer_sid
    } = useParams();

    const {
        customerLogout
    } = useCustomerLogin();

    useEffect(() => {
        customerLogout({ customer_sid });
    }, [])

    return (<Box h={32}>
        <Center>
            You have been logged out!
        </Center>
    </Box>)
};

export default CustomerLogout;