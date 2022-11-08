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
            value: values.transactionsMade
        },
        {
            title: 'Total amount deposited',
            value: values.totalAmountDeposited
        },
        {
            title: 'Bonus credits awarded',
            value: values.bonusCreditsAwarded
        },
        {
            title: 'Highest amount deposited',
            value: values.highestAmountDeposited
        },
        {
            title: 'Lowest amount deposited',
            value: values.lowestAmountDeposited
        }
    ]
)

export const ticketsStatisticsData = values => {
    const prizesWon = [];
    const hasPrize = num => values.numberOfPrizesWon !== 0 || values.allTickets.filter(el => el.prize === num).length !== 0;

    for (let i = 7; i >= 3; i--) {
        prizesWon.push({
            prize: !hasPrize(i) ? '' : values.allTickets.filter(el => el.prize === i).length === 1 ? `${Prizes[i - 1]}'s` : Prizes[i - 1],
            quantity: !hasPrize(i) ? '' : values.allTickets.filter(el => el.prize === i).length
        })
    }

    return [
        {
            title: 'Tickets played',
            value: values.ticketsPlayed,
        },
        {
            title: 'Active tickets',
            value: values.activeTickets,
        },
        {
            title: 'Number of prizes',
            value: values.numberOfPrizesWon,
        },
        {
            title: 'Prizes won',
            value: true ? 'None' : values.numberOfPrizesWon === 0 ? 'None' 
                : prizesWon.map(el => <Typography>`${el.quantity} ${el.prize}`</Typography>)
        }
    ]
}

export const transactionsStatisticsDataByAdmin = values => (
    [
        {
            title: 'Total transactions',
            value: values.totalTransactions
        },
        {
            title: 'Registered players transactions',
            value: values.registeredPlayersTransactions
        },
        {
            title: 'Nonegistered players transactions',
            value: values.nonregisteredPlayersTransactions
        },
        {
            title: 'Total deposited amount',
            value: values.totalDepositedAmount,
        },
        {
            title: 'Registered players deposited amount',
            value: values.registeredPlayersDepositedAmount
        },
        {
            title: 'Nonregistered players deposited amount',
            value: values.nonregisteredPlayersDepositedAmount
        }
    ]
)

export const ticketsStatisticsDataByAdmin = values => (
    [
        {
            title: 'Total tickets',
            value: values.totalTickets
        },
        {
            title: 'Active tickets',
            value: values.activeTickets
        },
        {
            title: 'Registered players tickets',
            value: values.registeredPlayersTickets
        },
        {
            title: 'Nonregistered players tickets',
            value: values.nonregisteredPlayersTickets
        },
        {
            title: 'Number of total prizes won',
            value: values.totalPrizesWon
        }
    ]
)