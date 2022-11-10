import { Alert, AlertTitle, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { TicketWrapper } from "../../../consts/styles/ticket/ticket";

const CreateTicket = ({ ticketCombination }) => {
    const [combination, setCombination] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));
    const ticketNumbers = Array.from({ length: 37 }, (_, i) => i + 1);

    const ticketBtnCta = token ? 'Create Ticket' : 'Choose Combination';

    const handleClick = e => {
        if (!combination.includes(e.target.value)) {
            setCombination([...combination, e.target.value]);
            e.target.style.color = 'green';
            e.target.style.border = '2px solid green';
        }

        if (combination.includes(e.target.value)) {
            const remaining = combination.filter(num => num !== e.target.value);
            setCombination(remaining);
            e.target.style.color = 'red';
            e.target.style.border = '0.5px solid red';
        }
    }

    const combinationNumbers = combination.map(num => parseInt(num));

    const handleSelect = () => ticketCombination(combinationNumbers);

    return (
        <>
            <Alert
                variant="filled"
                severity="success"
                icon={false}
                sx={{ display: 'flex', justifyContent: 'center', width: '33%', margin: '2.5px auto -2.5%' }}
            >
                <AlertTitle>Select your lucky combination of seven numbers</AlertTitle>
            </Alert>
            <TicketWrapper>
                {ticketNumbers.map((num, index) => (
                    <Button
                        key={index}
                        value={num}
                        onClick={handleClick}
                        sx={{ color: 'red', border: '0.5px solid red', borderRadius: '33%', margin: '2.5px' }}
                    >
                        {num}
                    </Button>))
                }
            </TicketWrapper>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button
                    sx={{ backgroundColor: '#5cb85c', color: '#292b2c', margin: '-2.5% auto', width: '40%' }}
                    disabled={combination.length !== 7 ? true : false}
                    onClick={handleSelect}
                >
                    {ticketBtnCta}
                </Button>
            </Box>
        </>
    )
}

export default CreateTicket;