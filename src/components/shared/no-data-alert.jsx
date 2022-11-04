import { Alert, Typography } from "@mui/material";

const NoDataAlert = props => (
    <Alert
        variant="filled"
        severity="warning"
        sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10% auto' }}
    >
        <Typography variant='h4' sx={{ margin: 'auto' }}>{props.msg}</Typography>
    </Alert>
)

export default NoDataAlert;