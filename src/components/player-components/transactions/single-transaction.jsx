import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Card, CardContent, Typography } from "@mui/material";
import { getTransaction } from "../../../services/transactions-service";
import { CardContainer } from "../../../consts/styles/card/card-wrapper";

const SingleTransaction = () => {
    const Hashids = require('hashids/cjs')
    const hashids = new Hashids('salt-n-pepa');
    const [transaction, setTransaction] = useState([]);
    const params = useParams();

    useEffect(() => {
        getTransaction(hashids.decode(params.id) / 1111).then(transaction => {
            setTransaction(transaction);
        }).catch(x => console.log(x));
    }, [params])

    return (
        <CardContainer>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        Transaction
                    </Typography> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                        sx={{ marginBottom: '5px' }}
                    >
                        Transaction ID code: <strong>{hashids.encode(transaction.id * 9999)}</strong>
                    </Alert> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                        sx={{ marginBottom: '5px' }}
                    >
                        Date of transaction: <strong>{`${transaction.transactionDate}`}</strong>
                    </Alert> <hr />
                    <Alert
                        variant='filled'
                        severity='info'
                    >
                        Deposit amount: <strong>{transaction.depositAmount}</strong>
                    </Alert>
                </CardContent>
            </Card>
        </CardContainer>
    )
}

export default SingleTransaction;