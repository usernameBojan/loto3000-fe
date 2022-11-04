import { Alert } from "@mui/material";
import { StatisticsInnerWrapper } from "../../consts/styles/statistics-style/statistics-style";

const Statistics = props => (
    <StatisticsInnerWrapper>
        {props.data.map((el, index) => (
            <Alert key={index} variant='filled' severity='info' sx={props.style} >
                {el.title}: <strong>{el.value}</strong>
            </Alert>
        ))}
    </StatisticsInnerWrapper>
)

export default Statistics;      