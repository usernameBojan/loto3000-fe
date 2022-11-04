import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DepositSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import { FormErrorWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import LotoApi from "../../services/base-service";
import { getUsers } from "../../services/user-service";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";
import Deposit from "./transactions/deposit";

const BuyCredits = () => {
    const navigate = useNavigate();
    const [deposit, setDeposit] = useState({});
    const [player, setPlayer] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    useEffect(() => {
        getUsers(APIRoutes.GetPlayer).then(player => {
            setPlayer(player);
        }).catch(x => console.log(x));
    }, [])

    const getDeposit = deposit => setDeposit(deposit);

    if (player === null) navigate(AppRoutes.BASE);

    (async () => {
        if (deposit.depositAmount >= 5) {
            try {
                await LotoApi.patch(APIRoutes.BuyCredits, JSON.stringify(deposit),
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }, setDeposit({}, deposit.depositAmount = 0)
                );

                setSuccess(current => !current);
            } catch (err) {
                setIsError(current => !current);
                console.log(err);
            }
        }
    })();

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={DepositSuccessValues} onClick={() => setSuccess(false)} />
                </SuccessAlertWrapper>
                :
                <Box sx={{ marginTop: '100px' }}>
                    <Box sx={{ display: isError ? 'block' : 'none' }}>
                        <Deposit deposit={getDeposit} />
                        <FormErrorWrapper style={{ display: deposit.depositAmount === -1 ? 'block' : 'none' }}>
                            <ErrorAlert errMsg={'Minimum deposit amount is 5'} />
                        </FormErrorWrapper>
                    </Box>
                    <Box sx={{ display: isError ? 'none' : 'block', margin: '75px auto', width: '30%' }}>
                        <ErrorAlert errMsg={'Provided card info is not valid. Please try again'} />
                        <Button
                            variant={'contained'}
                            sx={{ width: '100%', marginTop: '5px' }}
                            onClick={() => setIsError(current => !current)}
                        >
                            Deposit
                        </Button>
                    </Box>
                </Box>
            }
        </>)
}

export default BuyCredits;