import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DepositInputs, DepositInputValues } from "../../../consts/helpers/deposit-inputs";
import { FormWrapper } from "../../../consts/styles/forms/forms-style";
import { validateCreditCardFormat, validateCvv2Cvc2Format, validateEmptyString, validateDepositAmount, validateDepositAmountNonregistered } from "../../../consts/helpers/validations";

const Deposit = ({ deposit }) => {
    const [inputValues, setInputValues] = useState({ ...DepositInputValues });
    const [expDate, setExpDate] = useState(dayjs(''));

    const handleInputChange = e => setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    const handleDateChange = date => setExpDate(date);

    const token = JSON.parse(localStorage.getItem('token'));

    const depositValidation = token ? 
        validateDepositAmount(inputValues.depositAmount) : validateDepositAmountNonregistered(inputValues.depositAmount);

    const validate = validateEmptyString(inputValues.cardHolder) && validateCreditCardFormat(inputValues.cardNumber) &&
        validateCvv2Cvc2Format(inputValues.cvvCode) && depositValidation;

    const DepositValues = {
        cardHolderName: inputValues.cardHolder,
        creditCardNumber: inputValues.cardNumber,
        cvV2CVC2Code: inputValues.cvvCode,
        depositAmount: inputValues.depositAmount < 5 ? -1 : inputValues.depositAmount,
        cardExpirationDate: expDate.toDate(),
    }

    const handleClick = () => deposit(DepositValues);

    return (
        <>
            <FormWrapper>
                {DepositInputs.map(input => (
                    <Box key={input.id * 10}>
                        <TextField
                            key={input.id * 1000}
                            required
                            label={input.label}
                            placeholder={input.placeholder}
                            name={input.name}
                            type={input.type}
                            sx={{ padding: '10px' }}
                            onChange={handleInputChange}
                        />
                    </Box>
                ))}
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            required
                            views={['year', 'month']}
                            label="Card Expiration Date"
                            minDate={dayjs('2022-11-01')}
                            maxDate={dayjs('2030-11-01')}
                            value={expDate}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField sx={{ margin: '10px 0' }} {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Button
                    disabled={validate ? false : true}
                    variant='filled'
                    sx={{ backgroundColor: '#5cb85c', color: '#292b2c', margin: '5px' }}
                    onClick={handleClick}
                >
                    Deposit
                </Button>
            </FormWrapper>
        </>
    )
}

export default Deposit;