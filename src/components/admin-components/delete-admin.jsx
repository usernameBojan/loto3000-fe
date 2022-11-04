import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminDeletedSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import { FormErrorWrapper, FormWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import { deleteUser } from "../../services/user-service";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";

const DeleteAdmin = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    const handleDelete = () => {
        deleteUser(APIRoutes.DeleteAdmin, params.id).then(response => {
            response !== null ? setSuccess(true) : setIsError(false);
        })
    }

    return (
        <Box>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={AdminDeletedSuccessValues} />
                </SuccessAlertWrapper>
                :
                <FormWrapper>
                    <Alert severity="warning">
                        <AlertTitle>Admin deletion</AlertTitle>
                        <Typography>
                            <strong>You are about to delete this admin!</strong>
                        </Typography>
                        <Typography>
                            <strong>Click confirm to proceed</strong>
                        </Typography>
                    </Alert>
                    <Button sx={{ backgroundColor: '#0275d8', margin: '12.5px', width: '75%' }} variant='filled' onClick={handleDelete}>Confirm</Button>
                    <Button sx={{ backgroundColor: '#d9534f', width: '75%' }} variant='filled' onClick={() => navigate(AppRoutes.Player)}>Cancel</Button>
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={'Something went wrong'} />
                    </FormErrorWrapper>
                </FormWrapper>
            }
        </Box>
    )
}

export default DeleteAdmin;