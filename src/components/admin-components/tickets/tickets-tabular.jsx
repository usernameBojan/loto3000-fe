import { DataGrid } from "@mui/x-data-grid";
import { ticketsColumnsByAdmin } from "../../../consts/helpers/table-columns";

const TicketsByAdminTabular = props => {
    const rows = props.tickets.length !== 0 ? [...props.tickets].reverse().map(ticket => ({
        id: ticket.id,
        dateCreated: ticket.ticketCreatedTime.substr(0, 20),
        drawTime: ticket.draw.drawTime.substr(0, 20),
        combination: ticket.combinationNumbersString,
        details: ticket.id,
    })) : [];

    return <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={5} rowsPerPageOptions={[5]} rows={rows} columns={ticketsColumnsByAdmin} />
}

export default TicketsByAdminTabular;