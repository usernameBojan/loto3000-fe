import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FormInputsWrapper, FormWrapper } from "../../consts/styles/forms/forms-style";

const CreateAdminForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => onSubmit({ firstName, lastName, username, password });

    return (
        <FormWrapper>
            <FormInputsWrapper>
                <TextField
                    label="Name"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Username"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ marginBottom: '10px' }}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormInputsWrapper>
            <Button
                variant='filled'
                onClick={handleSubmit}
                sx={{ margin: '10px', backgroundColor: '#0275d8', color: '#292b2c' }}
            >
                <strong>Create Admin</strong>
            </Button>
        </FormWrapper>
    )
}

export default CreateAdminForm;