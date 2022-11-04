import { Alert, Typography } from "@mui/material";
import AccordionWrapper from "./accordion-wrapper";

const Transactions = props => {
    const transactions = props.props.transactionTracker;

    const AccordionContent = transactions.map((transaction, index) => (
        <Alert variant='contained' severity='info' key={index} sx={{ border: '1px solid gray', width: '45%', backgroundColor: '#5bc0de', borderRadius: '10px', margin: '2.5px' }}>
            <Typography>Player: {transaction.playerName}</Typography>
            <Typography>Amount: {transaction.depositAmount}</Typography>
            <Typography>Date: {transaction.transactionDate}</Typography>
        </Alert>
    ))

    return <AccordionWrapper content={AccordionContent} title={'Transactions'} />;
}

export { Transactions };