import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react"
import { transactionsStatisticsData } from "../../consts/helpers/statistics-data";
import { playerTansactionsColumns } from "../../consts/helpers/table-columns";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTransactions } from "../../services/transactions-service";
import { getUsers } from "../../services/user-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";

const PlayerTransactions = () => {
    const Hashids = require('hashids/cjs');
    const hashids = new Hashids('salt-n-pepa');
    const [transactions, setTransactions] = useState([]);
    const [credits, setCredits] = useState(0);

    useEffect(() => {
        getTransactions(APIRoutes.PlayerTransactions).then(transactions => {
            setTransactions(transactions);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getUsers(APIRoutes.GetPlayer).then(player => {
            setCredits(player.credits);
        }).catch(x => console.log(x));
    }, []);

    const rows = transactions.length !== 0 ? [...transactions].reverse().map(transaction => ({
        id: hashids.encode(transaction.id * 1111),
        dateOfTransaction: transaction.transactionDate.substr(0, 20),
        depositAmount: transaction.depositAmount,
        details: hashids.encode(transaction.id * 1111)
    })) : [];

    return (
        <StatisticsWrapper>
            {transactions.length !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.transactions} data={transactionsStatisticsData({ transactions, credits })} />
                    <Box style={{ height: '55vh', width: '30%' }}>
                        <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={5} rowsPerPageOptions={[5]} rows={rows} columns={playerTansactionsColumns} />
                    </Box>
                </> : <NoDataAlert msg={'No transaction\'s yet!'} />
            }
        </StatisticsWrapper>
    )
}

export default PlayerTransactions;