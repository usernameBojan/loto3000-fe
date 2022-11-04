import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { transactionsStatisticsDataByAdmin } from "../../consts/helpers/statistics-data";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTransactions } from "../../services/transactions-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";
import TransactionsByAdminTabular from "./transactions/transactions-tabular";

const TransactionsByAdmin = () => {
    const [transactions, setTransactions] = useState([]);
    const [registeredPlayersTransactions, setRegisteredPlayersTransactions] = useState([]);
    const [nonregisteredPlayersTransactions, setNonregisteredPlayersTransactions] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        getTransactions(APIRoutes.RegisteredPlayersTransactions).then(transactions => {
            setRegisteredPlayersTransactions(transactions);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTransactions(APIRoutes.NonregisteredPlayersTransactions).then(transactions => {
            setNonregisteredPlayersTransactions(transactions);
        }).catch(x => console.log(x));
    }, []);

    const handleHide = () => {
        setIsDisplayed(false);
    };

    const handleRegistered = () => {
        setTransactions(registeredPlayersTransactions);
        setIsDisplayed(true);
    };

    const handleNonregistered = () => {
        setTransactions(nonregisteredPlayersTransactions);
        setIsDisplayed(true);
    };

    const statisticsData = {
        registeredPlayersTransactions: registeredPlayersTransactions,
        nonregisteredPlayersTransactions: nonregisteredPlayersTransactions,
        registeredPlayersTransactionsAmount: registeredPlayersTransactions.length === 0 ? 0
            : registeredPlayersTransactions.map(el => el.depositAmount).reduce((prev, cur) => prev + cur),
        nonregisteredPlayersTransactionsAmount: nonregisteredPlayersTransactions.length === 0 ? 0
            : nonregisteredPlayersTransactions.map(el => el.depositAmount).reduce((prev, cur) => prev + cur)
    }

    return (
        <StatisticsWrapper>
            {registeredPlayersTransactions.length !== 0 || nonregisteredPlayersTransactions.length !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.transactionsByAdmin} data={transactionsStatisticsDataByAdmin(statisticsData)} />
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleRegistered}
                        >
                            Show registered players transactions
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleNonregistered}
                        >
                            Show nonregistered players transactions</Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleHide}
                        >
                            Hide transactions
                        </Button>
                    </Box>
                    <Box style={{ display: isDisplayed ? 'block' : 'none', height: '50vh', width: '30%' }}>
                        <TransactionsByAdminTabular transactions={transactions} />
                    </Box>
                </> : <NoDataAlert msg={'No transactions yet!'} />
            }
        </StatisticsWrapper>
    )
}

export default TransactionsByAdmin;