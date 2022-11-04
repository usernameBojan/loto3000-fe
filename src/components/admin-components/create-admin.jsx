import { useState } from "react";
import { AdminCreatedSuccessValues } from "../../consts/helpers/success-values";
import { FormErrorWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import { createAdmin } from "../../services/user-service";
import CreateAdminForm from "../forms/create-admin-form";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";

const CreateAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    const handleSubmit = ({ firstName, lastName, username, password }) => {
        createAdmin({ firstName, lastName, username, password }).then(response => {
            response !== null ? setSuccess(true) : setIsError(false);
        })
    }

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={AdminCreatedSuccessValues} />
                </SuccessAlertWrapper>
                :
                <>
                    <CreateAdminForm onSubmit={handleSubmit} />
                    <FormErrorWrapper style={{ display: isError ? 'none' : 'block' }}>
                        <ErrorAlert errMsg={'Provide valid inputs for admin creation.'} />
                    </FormErrorWrapper>
                </>
            }
        </>
    )
}

export default CreateAdmin;