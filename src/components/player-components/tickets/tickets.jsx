import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ticketsColumns } from "../../../consts/helpers/table-columns";
import { Prizes } from "../../../consts/helpers/prizes";

const PlayerTicketsTabular = props => {
    const Hashids = require('hashids/cjs')
    const hashids = new Hashids('salt-n-pepa');
    const date = new Date();

    const rows = props.tickets.length !== 0 ? [...props.tickets].reverse().map(ticket => ({
        id: hashids.encode(ticket.id * 9999),
        dateCreated: ticket.ticketCreatedTime.substr(0, 20),
        drawTime: ticket.draw.drawTime.substr(0, 20),
        combination: ticket.combinationNumbersString,
        details: hashids.encode(ticket.id * 9999),
        status: Date.parse(ticket.draw.drawTime) < Date.parse(date) && ticket.prize < 3 ? 'Failed'
            : ticket.prize >= 3 ? 'Winning' : 'Active',
        prize: Date.parse(ticket.draw.drawTime) > Date.parse(date) ? 'Ticket is still active' : Prizes[ticket.prize - 1]
    })) : [];

    return <DataGrid sx={{ backgroundColor: '#d0d3d5', width: '100%' }} pageSize={5} rowsPerPageOptions={[5]} rows={rows} columns={ticketsColumns} />
}

export default PlayerTicketsTabular;