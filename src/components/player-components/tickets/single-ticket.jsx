import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card, CardContent, Typography } from "@mui/material";
import { getPlayerTicket } from "../../../services/tickets-service";
import { CardContainer } from "../../../consts/styles/card/card-wrapper";

const SingleTicket = () => {
    const Hashids = require('hashids/cjs')
    const hashids = new Hashids('salt-n-pepa');
    const [ticket, setTicket] = useState([]);
    const params = useParams();

    useEffect(() => {
        getPlayerTicket(hashids.decode(params.id) / 9999).then(ticket => {
            setTicket(ticket);
        }).catch(x => console.log(x));
    }, [params])

    return (
        <CardContainer>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Ticket
                    </Typography> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                        sx={{ marginBottom: '5px' }}
                    >
                        Ticked ID code: <strong>{hashids.encode(ticket.id * 9999)}</strong>
                    </Alert> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                        sx={{ marginBottom: '5px' }}
                    >
                        Ticked created on: <strong>{ticket.ticketCreatedTime}</strong>
                    </Alert> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                    >
                        Ticked combination: <strong>{ticket.combinationNumbersString}</strong>
                    </Alert>
                </CardContent>
            </Card>
        </CardContainer>
    )
}

export default SingleTicket;