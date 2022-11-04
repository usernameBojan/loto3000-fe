import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TicketCreatedSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import { SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import LotoApi from "../../services/base-service";
import { getUsers } from "../../services/user-service";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";
import CreateTicket from "./tickets/create-ticket";

const CreateTicketRegisteredPlayer = () => {
    const navigate = useNavigate();
    const [player, setPlayer] = useState([]);
    const [combinationNumbers, setCombinationNumbers] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    useEffect(() => {
        getUsers(APIRoutes.GetPlayer).then(player => {
            setPlayer(player);
        }).catch(x => console.log(x));
    }, [])

    const getTicket = ticket => setCombinationNumbers(ticket);
    
    if (player === null) navigate(AppRoutes.CreateTicketNonnregistered);
    
    (async () => {
        if (combinationNumbers.length === 7) {
            try {
                await LotoApi.post(APIRoutes.CreateTicket, JSON.stringify({ combinationNumbers }),
                    {
                        headers: { 'Content-Type': 'application/json' }
                    }, setCombinationNumbers([], combinationNumbers.length = 0)
                );

                setSuccess(true);
            } catch (err) {
                setIsError(false);
                console.log(err);
            }
        }
    })();

    return (
        <>
            {success ?
            <SuccessAlertWrapper>
                <SuccessAlert values={TicketCreatedSuccessValues} onClick={() => setSuccess(false)} />
            </SuccessAlertWrapper>
                :
                <Box sx={{ marginTop: '100px' }}>
                    <Box sx={{ display: isError ? 'block' : 'none' }}>
                        <CreateTicket ticketCombination={getTicket} />
                    </Box>
                    <Box sx={{ display: isError ? 'none' : 'block', margin: '75px auto', width: '45%' }}>
                        <ErrorAlert errMsg={'You don\'t have enough credits for purchasing ticket. Please deposit and try again'} />
                        <Link to={AppRoutes.BuyCredits} style={{ textDecoration: 'none' }}>
                            <Button variant={'contained'} sx={{ width: '100%', marginTop: '5px' }}>Deposit</Button>
                        </Link>
                    </Box>
                </Box>
            }
        </>
    )
}

export default CreateTicketRegisteredPlayer;