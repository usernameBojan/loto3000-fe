import { Alert, Typography } from "@mui/material";
import AccordionWrapper from "./accordion-wrapper";
import { Prizes } from "../../../consts/helpers/prizes";

const Tickets = props => {
    const tickets = props.props.tickets;
    const prize = Prizes[tickets.prize - 1] === '' ? '' : Prizes[tickets.prize - 1];

    const AccordionContent = tickets.map((ticket, index) => (
        <Alert variant='contained' severity='info' key={index} sx={{ border: '1px solid gray', width: '45%', backgroundColor: '#5bc0de', borderRadius: '10px', margin: '2.5px' }}>
            <Typography>Combination: {ticket.combinationNumbersString}</Typography>
            <Typography>Time created: {ticket.ticketCreatedTime}</Typography>
            <Typography>{prize}</Typography>
        </Alert>
    ))

    return <AccordionWrapper content={AccordionContent} title={'Tickets'} />
}

export default Tickets;