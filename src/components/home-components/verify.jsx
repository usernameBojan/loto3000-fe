import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import LotoApi from "../../services/base-service";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import ErrorAlert from "../forms/error-alert";
import { FormErrorWrapper } from "../../consts/styles/forms/forms-style";
import { VerifyFormWrapper } from "../../consts/styles/forms/register-form-style";


const Verify = props => {
    const Hashids = require('hashids/cjs')
    const hashids = new Hashids('topsecret');
    const code = `${hashids.encode(props.user.data.id)}${hashids.encode(props.user.data.firstName.length)}`;
    //FOR EASIER DEMO PURPOSES ONLY, THE API SENDS THE SAME VERIFICATION CODE WITH SAME HASH AND SALT VIA EMAIL SENDER !!!
    const [verificationCode, setVerificationCode] = useState('');
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await LotoApi.post(APIRoutes.Verify, JSON.stringify(verificationCode),
                { headers: { 'Content-Type': 'application/json' } }
            );

            setSuccess(true);
        } catch (err) {
            console.log(err);
            setIsError(current => !current);
            setErrMsg('Wrong verification code');
        }
    }

    return (
        success ? window.location.href = AppRoutes.Login :
            <Box>
                <VerifyFormWrapper>
                    <Typography sx={{ fontStyle: 'oblique', fontSize: '20px' }}>
                        <strong>{`Use ${code} as your verification code.`}</strong>
                    </Typography>
                    <Typography sx={{ fontStyle: 'oblique', fontSize: '15px', color: "red", marginBottom: '25px' }}>
                        FOR EASIER DEMO PURPOSES ONLY, OTHERWISE THIS IS HANDLED IN THE BACKEND WITH DUMMY EMAIL SENDER.
                    </Typography>
                    <Alert variant='filled' sx={{ margin: '5px' }} severity="info">
                        <b>Enter the verification code you recivied in your email</b>
                    </Alert>
                    <TextField required name='verificationCode' type='text' onChange={e => setVerificationCode(e.target.value)} />
                    <Button variant='filled' sx={{ backgroundColor: '#5cb85c', color: '#292b2c', margin: '5px' }} onClick={handleSubmit}>Verify</Button>
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={errMsg} />
                    </FormErrorWrapper>
                </VerifyFormWrapper>
            </Box>
    )
}

export default Verify;