import React, { useState } from "react";
import { Box } from '@mui/material';
import LotoApi from "../../services/base-service";
import { APIRoutes } from "../../consts/routes/api-routes";
import { registerErrorHandler } from "../../consts/helpers/error-handler";
import Verify from "../../components/home-components/verify";
import ErrorAlert from "../../components/forms/error-alert";
import RegisterForm from "../../components/forms/register-form";
import { FormErrorWrapper } from "../../consts/styles/forms/forms-style";

const Register = () => {
    const [newUser, setNewUser] = useState({});
    const [errMsg, setErrMsg] = useState('');
    const [isError, setIsError] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async register => {
        try {
            const response = await LotoApi.post(APIRoutes.Register,
                JSON.stringify(register), { headers: { 'Content-Type': 'application/json' } }
            );

            setNewUser(response);
            setSuccess(true);
        } catch (err) {
            console.log(err)
            setIsError(false);
            setErrMsg(registerErrorHandler(err));
        }
    }

    return (
        success ? <Verify user={newUser} /> :
            <Box>
                <RegisterForm onSubmit={handleSubmit} />
                <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                    <ErrorAlert errMsg={errMsg} />
                </FormErrorWrapper>
            </Box>
    );
}

export default Register;