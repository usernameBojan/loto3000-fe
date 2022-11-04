import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FormInputsWrapper, FormWrapper } from "../../consts/styles/forms/forms-style";

const AccountRecoveryForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => onSubmit({ username, code, password, confirmPassword });

    return (
        <FormWrapper>
            <FormInputsWrapper>
                <TextField
                    label="Username"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    label="Password Recovery Code"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setCode(e.target.value)}
                />
                <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    label="ConfirmPassword"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </FormInputsWrapper>
            <Button
                variant='filled'
                onClick={handleSubmit}
                sx={{ margin: '10px', backgroundColor: '#0275d8', color: '#292b2c' }}
            >
                <strong>Change Password</strong>
            </Button>
        </FormWrapper>
    )
}

export default AccountRecoveryForm;