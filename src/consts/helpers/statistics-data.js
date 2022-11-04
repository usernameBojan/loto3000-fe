import { Typography } from "@mui/material";
import { Prizes } from "./prizes";

export const transactionsStatisticsData = values => (
    [
        {
            title: 'Current credits',
            value: values.credits
        },
        {
            title: 'Transactions made',
            value: values.transactions.length,
        },
        {
            title: 'Total amount deposited',
            value: values.transactions.map(el => el.depositAmount).reduce((prev, cur) => prev + cur)
        },
        {
            title: 'Bonus credits awarded',
            value: values.transactions.length <= 9 ? 0 : parseInt(values.transactions.length / 10) * 100
        },
        {
            title: 'Highest amount deposited',
            value: Math.max(...values.transactions.map(el => (el.depositAmount))),
        },
        {
            title: 'Lowest amount deposited',
            value: Math.min(...values.transactions.map(el => (el.depositAmount))),
        }
    ]
)

export const ticketsStatisticsData = values => {
    const numOfActiveTickets = values.activeTickets.length;
    const numOfWinningTickets = values.pastTickets.filter(el => el.prize >= 3).length;
    const winningTickets = values.pastTickets.filter(el => el.prize >= 3);

    const prizesWon = [];

    const hasPrize = num => numOfWinningTickets !== 0 || winningTickets.filter(el => el.prize === num).length !== 0;

    for (let i = 7; i >= 3; i--) {
        prizesWon.push({
            prize: !hasPrize(i) ? '' : winningTickets.filter(el => el.prize === i).length === 1 ? `${Prizes[i - 1]}'s` : Prizes[i - 1],
            quantity: !hasPrize(i) ? '' : winningTickets.filter(el => el.prize === i).length
        })
    }

    return [
        {
            title: 'Tickets played',
            value: values.allTickets.length,
        },
        {
            title: 'Active tickets',
            value: numOfActiveTickets,
        },
        {
            title: 'Number of prizes',
            value: numOfWinningTickets,
        },
        {
            title: 'Prizes won',
            value: numOfWinningTickets === 0 ? 'None' : prizesWon.map(el => <Typography>`${el.quantity} ${el.prize}`</Typography>)
        }
    ]
}

export const transactionsStatisticsDataByAdmin = values => (
    [
        {
            title: 'Total transactions',
            value: values.registeredPlayersTransactions.length + values.nonregisteredPlayersTransactions.length
        },
        {
            title: 'Registered players transactions',
            value: values.registeredPlayersTransactions.length
        },
        {
            title: 'Nonegistered players transactions',
            value: values.nonregisteredPlayersTransactions.length
        },
        {
            title: 'Total deposited amount',
            value: values.registeredPlayersTransactionsAmount + values.nonregisteredPlayersTransactionsAmount,
        },
        {
            title: 'Registered players deposited amount',
            value: values.registeredPlayersTransactionsAmount
        },
        {
            title: 'Nonregistered players deposited amount',
            value: values.nonregisteredPlayersTransactionsAmount
        }
    ]
)

export const ticketsStatisticsDataByAdmin = values => (
    [
        {
            title: 'Total tickets',
            value: values.allTickets.length
        },
        {
            title: 'Active tickets',
            value: values.activeTickets.length
        },
        {
            title: 'Registered players tickets',
            value: values.registeredPlayerTickets.length
        },
        {
            title: 'Nonregistered players tickets',
            value: values.nonregisteredPlayerTickets.length
        },
        {
            title: 'Number of total prizes won',
            value: values.pastTickets.filter(ticket => ticket.prize >= 3).length
        }
    ]
)