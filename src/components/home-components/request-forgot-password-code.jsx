import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { RequestCodeSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { FormErrorWrapper, FormWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import LotoApi from "../../services/base-service";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";

const RequestForgotPasswordCode = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await LotoApi.post(APIRoutes.GetForgotPasswordCode,
                JSON.stringify({ email }), { headers: { 'Content-Type': 'application/json' } }
            );

            setEmail('');
            setSuccess(true);
        } catch (err) {
            setIsError(false);
            console.log(err);
        }
    }

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={RequestCodeSuccessValues} />
                </SuccessAlertWrapper>
                :
                <>
                    <FormWrapper>
                        <TextField label="Email" type="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
                        <Button onClick={handleSubmit} variant='filled' sx={{ margin: '10px', backgroundColor: '#0275d8', color: '#292b2c' }}>
                            <Typography> Send Code </Typography>
                        </Button>
                    </FormWrapper>
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={'Please provide valid info.'} />
                    </FormErrorWrapper>
                </>
            }
        </>
    )
}

export default RequestForgotPasswordCode;