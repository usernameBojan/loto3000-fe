import { DataGrid } from "@mui/x-data-grid";
import { transactionsColumns } from "../../../consts/helpers/table-columns";

const TransactionsByAdminTabular = props => {
    const rows = props.transactions.length !== 0 ? [...props.transactions].reverse().map(transaction => ({
        id: transaction.id,
        dateOfTransaction: transaction.transactionDate.substr(0,10),
        depositAmount: transaction.depositAmount,
        playerName: transaction.playerName,
    })) : [];

    return <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={5} rowsPerPageOptions={[5]} rows={rows} columns={transactionsColumns} />
}

export default TransactionsByAdminTabular;