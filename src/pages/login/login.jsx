import { React, useState } from 'react';
import { Box } from '@mui/material';
import { AppRoutes } from '../../consts/routes/app-routes';
import LotoApi from '../../services/base-service';
import { setAuthToken } from '../../services/token-service';
import { APIRoutes } from '../../consts/routes/api-routes';
import { loginErrorHandler } from '../../consts/helpers/error-handler';
import ErrorAlert from '../../components/forms/error-alert';
import LoginForm from '../../components/forms/login-form';
import { FormErrorWrapper } from '../../consts/styles/forms/forms-style';

const Login = () => {
    const [errMsg, setErrMsg] = useState('');
    const [isError, setIsError] = useState(true);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async e => {
        try {
            const response = await LotoApi.post(APIRoutes.Login,
                JSON.stringify(e),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            localStorage.setItem('token', JSON.stringify(response?.data));
            
            setAuthToken(JSON.stringify(response?.data));
            setSuccess(true);
        } catch (err) {
            setIsError(false);
            setErrMsg(loginErrorHandler(err));
        }
    }

    return (
        <>
            {success ? window.location.href = AppRoutes.Player : (
                <Box>
                    <LoginForm onSubmit={handleSubmit} />
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={errMsg} />
                    </FormErrorWrapper>
                </Box>
            )}
        </>
    )
}

export default Login;