import { Link } from "react-router-dom";
import { AppRoutes } from "../routes/app-routes";

const mutualColumns = [
    { field: 'id', headerName: 'ID', width: 50, type: 'number' },
    { field: 'firstName', headerName: 'First name', width: 120 },
    { field: 'lastName', headerName: 'Last name', width: 120 },
    { field: 'fullName', headerName: 'Full name', width: 180 },
    { field: 'username', headerName: 'Username', width: 120 },
]

export const adminsColumns = [
    ...mutualColumns,
    { field: 'details', headerName: 'Details', width: 180, renderCell: params => (
        <Link to={`${AppRoutes.Admins}/${params.value}`}>Show admins full details</Link>
      )
    }
]

export const playersColumns = [
    ...mutualColumns,
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 100 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'credits', headerName: 'Credits', width: 100, type: 'number' },
    { field: 'numOfTransactions', headerName: 'Transactions made', width: 150, type: 'number' },
    { field: 'numOfTickets', headerName: 'Tickets played', width: 150, type: 'number' },
    { field: 'details', headerName: 'Details', width: 180, renderCell: params => (
        <Link to={`${AppRoutes.Players}/${params.value}`}>Show player full details</Link>
        )
    }
];

export const ticketsColumnsByAdmin = [
    { field: 'id', headerName: 'Code', width: 80, type: 'number' },
    { field: 'dateCreated', headerName: 'Date Created', width: 162.5 },
    { field: 'drawTime', headerName: 'Draw Time', width: 160 },
    { field: 'combination', headerName: 'Combination', width: 200 },
]

export const ticketsColumns = [
    ...ticketsColumnsByAdmin,
    { field: 'status', headerName: 'Status', width: 60 },
    { field: 'prize', headerName: 'Prize', width: 150 },
    { field: 'details', headerName: 'Details', width: 100, renderCell: params => (
        <Link style={{textDecoration: 'none'}} to={`${AppRoutes.PlayerTickets}${params.value}`}>Show ticket</Link>
        )
    }
]

export const transactionsColumns = [
    { field: 'id', headerName: 'Id Code', width: 75, type: 'number' },
    { field: 'dateOfTransaction', headerName: 'Transaction Date', width: 125 },
    { field: 'depositAmount', headerName: 'Amount', width: 70 },
    { field: 'playerName', headerName: 'Player Name', width: 100 },
]

export const playerTansactionsColumns = [
    ...transactionsColumns.slice(0, -1),
    { field: 'details', headerName: 'Details', width: 120, renderCell: params => (
        <Link style={{textDecoration: 'none'}} to={`${AppRoutes.PlayerTransactions}${params.value}`}>Show transaction</Link>
        )
    }
]

export const winnersBoardColumns = [
    { field: 'id', headerName: 'Ticket Code', width: 100, type: 'number' },
    { field: 'playerName', headerName: 'Player Name', width: 200 },
    { field: 'combination', headerName: 'Combination', width: 200 },
    { field: 'prize', headerName: 'Prize', width: 200 },
]