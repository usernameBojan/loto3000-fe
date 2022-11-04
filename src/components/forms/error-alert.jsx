import React from "react";
import { Alert, AlertTitle } from '@mui/material';

const ErrorAlert = props => (
    <Alert severity="error" variant="filled">
        <AlertTitle>Error</AlertTitle>
        <strong>{props.errMsg}</strong>
    </Alert>
)

export default ErrorAlert;