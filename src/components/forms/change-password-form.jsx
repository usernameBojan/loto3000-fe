import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FormInputsWrapper, FormWrapper } from "../../consts/styles/forms/forms-style";

const ChangePasswordForm = ({ onSubmit }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => onSubmit({ oldPassword, password, confirmPassword });

    return (
        <FormWrapper>
            <FormInputsWrapper>
                <TextField
                    label="Old Password"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setOldPassword(e.target.value)}
                />
                <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setNewPassword(e.target.value)}
                />
                <TextField
                    label="Confirm New Password"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button
                    variant='filled'
                    onClick={handleSubmit}
                    sx={{ margin: '10px', backgroundColor: '#0275d8', color: '#292b2c' }}
                >
                    <strong>Change Password</strong>
                </Button>
            </FormInputsWrapper>
        </FormWrapper>
    )
}

export default ChangePasswordForm;