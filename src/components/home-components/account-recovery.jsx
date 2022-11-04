import React from "react";
import { useState } from "react";
import { ChangePasswordByCodeSuccessValues } from "../../consts/helpers/success-values";
import { FormErrorWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import { accountRecovery } from "../../services/user-service";
import AccountRecoveryForm from "../forms/accound-recovery-form";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";

const AccountRecovery = () => {
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    const handleSubmit = ({ username, code, password, confirmPassword }) => {
        accountRecovery({ username, code, password, confirmPassword }).then(response => {
            response !== null ? setSuccess(true) : setIsError(false);
        })
    }

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={ChangePasswordByCodeSuccessValues} />
                </SuccessAlertWrapper>
                :
                <>
                    <AccountRecoveryForm onSubmit={handleSubmit} />
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={'Please provide valid info.'} />
                    </FormErrorWrapper>
                </>
            }
        </>
    )
}

export default AccountRecovery;