import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import { FormErrorWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import { changePassword, getUsers } from "../../services/user-service";
import ChangePasswordForm from "../forms/change-password-form";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [player, setPlayer] = useState([]);
    const [isError, setIsError] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getUsers(APIRoutes.Player).then(player => {
            setPlayer(player);
        }).catch(x => console.log(x));
    }, [])

    if (player === null) navigate(AppRoutes.BASE);

    const handleSubmit = ({ oldPassword, password, confirmPassword }) => {
        changePassword({ oldPassword, password, confirmPassword }).then(response => {
            response !== null ? setSuccess(true) : setIsError(false);
        })
    }

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={ChangePasswordSuccessValues} />
                </SuccessAlertWrapper>
                :
                <Box>
                    <ChangePasswordForm onSubmit={handleSubmit} />
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={'Please provide valid info for your password change.'} />
                    </FormErrorWrapper>
                </Box>
            }
        </>
    )
}

export default ChangePassword;