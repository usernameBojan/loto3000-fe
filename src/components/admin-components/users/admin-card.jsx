import { Alert, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../consts/routes/app-routes";
import { AdminCardInnerWrapper } from "../../../consts/styles/card/card-wrapper";

const AdminCard = props => (
    <Card>
        <CardContent>
            <AdminCardInnerWrapper>
                <Typography variant="h5">Admin details</Typography> <hr />
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Name: <strong>{props.admin.firstName}</strong>
                </Alert>
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Surname: <strong>{props.admin.lastName}</strong>
                </Alert>
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Fullname: <strong>{props.admin.fullName}</strong>
                </Alert>
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Username: <strong>{props.admin.username}</strong>
                </Alert>
            </AdminCardInnerWrapper>
        </CardContent>
        <CardActions>
            <Link to={`${AppRoutes.DeleteAdmin}${props.admin.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ backgroundColor: '#a10000', margin: 'auto 18rem' }}>Delete Admin</Button>
            </Link>
        </CardActions>
    </Card>
)

export default AdminCard;