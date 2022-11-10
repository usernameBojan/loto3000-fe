import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../consts/routes/app-routes";
import { FormInputsWrapper, FormWrapper } from "../../consts/styles/forms/forms-style";

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = () => onSubmit({ username, password });

    return (
        <FormWrapper>
            <Box>
                <FormInputsWrapper>
                    <TextField
                        sx={{ marginBottom: '10px' }}
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <TextField
                        sx={{ marginBottom: '10px' }}
                        label="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        variant='filled'
                        onClick={handleSubmit}
                        sx={{ marginBottom: '10px', backgroundColor: '#0275d8', color: '#292b2c' }}
                    >
                        <strong>Log In</strong>
                    </Button>
                </FormInputsWrapper>
                <Link
                    to={AppRoutes.GetForgotPasswordCode}
                    style={{ textDecoration: 'none', margin: '0 10px' }}
                >
                    Forgot your password? Recover your account!
                </Link> 
                <hr />
                <Link
                    to={AppRoutes.Register}
                    style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', margin: '15px 0' }}
                >
                    <Button
                        variant='filled'
                        sx={{ backgroundColor: '#5cb85c', color: '#292b2c' }}
                    >
                        Register Now
                    </Button>
                </Link>
            </Box>
        </FormWrapper>
    )
}

export default LoginForm;