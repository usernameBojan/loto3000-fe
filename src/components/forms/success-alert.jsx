import { Alert, AlertTitle, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SuccessAlert = props => (
    <Alert severity="success">
        <AlertTitle>{props.values.title}</AlertTitle>
        <strong>{props.values.description}</strong>
        {props.values.navigation.map((el, index) => (
            <Link 
            key={index} 
            to={el.route} 
            style={{ textDecoration: 'none' }}
            onClick={'onClick' in props ? props.onClick : null}
            >
                <Typography>{el.title}</Typography>
            </Link> 
        ))}
    </Alert>
)

export default SuccessAlert;