import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NonregisteredTicketCreatedSuccessValues } from "../../consts/helpers/success-values";
import { APIRoutes } from "../../consts/routes/api-routes";
import { AppRoutes } from "../../consts/routes/app-routes";
import { FormWrapper, SuccessAlertWrapper } from "../../consts/styles/forms/forms-style";
import LotoApi from "../../services/base-service";
import ErrorAlert from "../forms/error-alert";
import SuccessAlert from "../forms/success-alert";
import CreateTicket from "./tickets/create-ticket";
import Deposit from "./transactions/deposit";

const CreateTicketNonregisteredPlayer = () => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [combinationNumbers, setCombinationNumbers] = useState([]);
    const [deposit, setDeposit] = useState([]);
    const [openTicket, setOpenTicket] = useState(false);
    const [openDeposit, setOpenDeposit] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isError, setIsError] = useState(true);

    if (JSON.parse(localStorage.getItem('token'))) navigate(AppRoutes.BASE);

    const handlePersonalInfo = () => {
        if (fullname !== '' && email !== '') {
            setOpenTicket(true);
        }
    }

    const getTicket = ticket => {
        setCombinationNumbers(ticket);
        setOpenDeposit(true);
    };

    const getDeposit = deposit => {
        setDeposit(deposit);
        setIsError(true);
        setOpenCreate(true);
    }

    const handleSubmit = async () => {
        try {
            await LotoApi.post(APIRoutes.CreateTicketNonregistered,
                JSON.stringify({ ...deposit, fullname, email, combinationNumbers }),
                { headers: { 'Content-Type': 'application/json' } }
            )

            setFullname('');
            setEmail('');
            setCombinationNumbers([]);
            setDeposit({});
            setSuccess(true);
        } catch (err) {
            console.log(err)
            setIsError(false);
        }
    }

    const handleReload = () => {
        setSuccess(false);
        setOpenTicket(false);
        setOpenDeposit(false);
        setOpenCreate(false);
        setIsError(true);
    }

    return (
        <>
            {success ?
                <SuccessAlertWrapper>
                    <SuccessAlert values={NonregisteredTicketCreatedSuccessValues} onClick={handleReload} />
                </SuccessAlertWrapper>
                :
                <Box>
                    <Alert
                        variant="filled"
                        severity="info"
                        sx={{ display: 'flex', justifyContent: 'center', margin: '75px auto -7.5%', width: '25%' }}
                    >
                        <AlertTitle>Create Ticket</AlertTitle>
                    </Alert>
                    <FormWrapper>
                        <TextField
                            label="Fullname"
                            variant="outlined"
                            sx={{ margin: '10px' }}
                            onChange={e => setFullname(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            type='email'
                            sx={{ margin: '10px' }}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button
                            onClick={handlePersonalInfo}
                            sx={{ backgroundColor: '#0275d8', color: '#292b2c' }}>
                            Enter and Proceed
                        </Button>
                    </FormWrapper>
                    <Box sx={{ display: openTicket ? 'block' : 'none' }}>
                        <CreateTicket ticketCombination={getTicket} />
                    </Box>
                    <Box sx={{ display: openDeposit ? 'block' : 'none' }}>
                        <Alert
                            severity="warning"
                            sx={{ display: 'flex', justifyContent: 'center', margin: '75px auto -9%', width: '33%' }}
                        >
                            <AlertTitle>Card Holder name must be same as name entered above!</AlertTitle>
                        </Alert>
                        <Deposit deposit={getDeposit} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Button
                                variant='filled'
                                sx={{ display: openCreate ? 'block' : 'none', backgroundColor: '#5cb85c', color: '#292b2c', margin: '-7.5% auto 5px', width: '30%' }}
                                onClick={handleSubmit}
                            >
                                Create Ticket
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: isError ? 'none' : 'block', margin: '10px auto', width: '30%' }}>
                        <ErrorAlert errMsg={'Provided card info is not valid. Please try again'} />
                    </Box>
                    <Box sx={{ display: deposit.depositAmount === -1 ? 'block' : 'none', margin: '10px auto', width: '30%' }}>
                        <ErrorAlert errMsg={'Ticket price for nonregistered players is 5'} />
                    </Box>
                </Box>
            }
        </>
    )
}

export default CreateTicketNonregisteredPlayer;