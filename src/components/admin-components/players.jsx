import { DataGrid } from '@mui/x-data-grid';
import { React, useState, useEffect } from 'react';
import { playersColumns } from '../../consts/helpers/table-columns';
import { APIRoutes } from '../../consts/routes/api-routes';
import { PlayersTableWrapper } from '../../consts/styles/statistics-style/tables-style';
import { getUsers } from '../../services/user-service';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getUsers(APIRoutes.Players).then(players => {
            setPlayers(players);
        }).catch(x => console.log(x));
    }, [])

    const rows = players.length !== 0 ? players.map(player => ({
        id: player.id,
        firstName: player.firstName,
        lastName: player.lastName,
        fullName: player.fullName,
        username: player.username,
        email: player.email,
        credits: player.credits,
        dateOfBirth: player.dateOfBirth.substring(0, 10),
        numOfTransactions: player.transactionTracker.length,
        numOfTickets: player.tickets.length,
        details: player.id
    })) : [];

    return (
        <PlayersTableWrapper>
            <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={10} rowsPerPageOptions={[10]} rows={rows} columns={playersColumns} />
        </PlayersTableWrapper>
    )
}

export default Players;