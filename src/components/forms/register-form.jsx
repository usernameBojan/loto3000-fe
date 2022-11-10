import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Alert, Box, Button, TextField } from '@mui/material';
import { InputValues, PasswordInputs, PersonalInfoInputs, ProfileInfoInputs } from '../../consts/helpers/register-inputs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { RegisterFormInputsWrapper, RegisterFormWrapper } from '../../consts/styles/forms/register-form-style';
import { compareInputs, validateAge, validateEmailInput, validateEmptyString, validatePasswordRegex } from '../../consts/helpers/validations';

const RegisterForm = ({ onSubmit }) => {
    const [inputValues, setInputValues] = useState({ ...InputValues });
    const [dateOfBirth, setDateOfBirth] = useState(dayjs(''));

    const handleDateChange = date => setDateOfBirth(date);
    const handleInputChange = e => setInputValues({ ...inputValues, [e.target.name]: e.target.value });

    const firstNameValidation = validateEmptyString(inputValues.firstName);
    const lastNameValidation = validateEmptyString(inputValues.lastName);
    const validatePersonalInfo = firstNameValidation && lastNameValidation;
    const ageValidation = validateAge(dateOfBirth.$d);
    const emailValidation = validateEmailInput(inputValues.email);
    const usernameValidation = validateEmptyString(inputValues.username);
    const validateProfileInfo = emailValidation && usernameValidation;
    const passwordValidation = validatePasswordRegex(inputValues.password);
    const passwordComparison = compareInputs(inputValues.password, inputValues.confirmPassword);
    const validatePasswords = passwordValidation && passwordComparison;
    const validateAllFields = validatePersonalInfo && ageValidation && validateProfileInfo && validatePasswords;

    const RegisterValues = {
        ...inputValues,
        dateOfBirth
    }

    const handleSubmit = () => {
        onSubmit(RegisterValues)
    }

    return (
        <RegisterFormWrapper>
            <RegisterFormInputsWrapper>
                {PersonalInfoInputs.map(input => (
                    <Box key={input.id} sx={{ padding: '10px' }}>
                        <Alert
                            severity={validatePersonalInfo ? 'success' : 'warning'}>
                            <b>{input.description}</b>
                        </Alert>
                        <TextField
                            required
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            onChange={handleInputChange}
                        />
                    </Box>))}
                <Box sx={{ padding: '10px' }}>
                    <Alert
                        severity={ageValidation ? 'success' : 'warning'}>
                        <b>You must be 18 years old or older to create an account</b>
                    </Alert>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date of birth"
                            inputFormat="MM/DD/YYYY"
                            value={dateOfBirth}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
            </RegisterFormInputsWrapper>
            <RegisterFormInputsWrapper>
                {ProfileInfoInputs.map(input => (
                    <Box
                        key={input.id}
                        sx={{ display: validatePersonalInfo && ageValidation ? 'block' : 'none', padding: '10px', marginRight: '25px' }}
                    >
                        <Alert
                            severity={validateProfileInfo ? 'success' : 'warning'}>
                            <b>{input.description}</b>
                        </Alert>
                        <TextField required
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            onChange={handleInputChange}
                        />
                    </Box>))}
            </RegisterFormInputsWrapper>
            <RegisterFormInputsWrapper>
                {PasswordInputs.map(input => (
                    <Box
                        key={input.id}
                        sx={{ display: validatePersonalInfo && ageValidation && validateProfileInfo ? 'block' : 'none', padding: '10px' }}
                    >
                        <Alert
                            severity={validatePasswords ? 'success' : 'warning'}>
                            <b>{input.description}</b>
                        </Alert>
                        <TextField
                            required
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            onChange={handleInputChange}
                        />
                    </Box>))}
            </RegisterFormInputsWrapper>
            <Button
                disabled={validateAllFields ? false : true}
                onClick={handleSubmit}
                variant='filled'
                sx={{ backgroundColor: '#5cb85c', color: '#292b2c', margin: '7.5px auto' }}
            >
                Create account
            </Button>
        </RegisterFormWrapper>
    )
}

export default RegisterForm;