import { Alert, Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Transactions } from "./transactions-accordion";
import Tickets from "./tickets-accordion";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../consts/routes/app-routes";
import { CardPersonalInfo, CardStatisticsInfo, PlayerCardInnerWrapper } from "../../../consts/styles/card/card-wrapper";

const PlayerCard = props => (
    <Card>
        <CardContent>
            <PlayerCardInnerWrapper>
                <Typography variant="h5">
                    Player details
                </Typography> <hr />
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Name: <CardPersonalInfo>{props.player.firstName} </CardPersonalInfo>
                    Surname: <CardPersonalInfo>{props.player.lastName} </CardPersonalInfo>
                    Fullname: <CardPersonalInfo>{props.player.fullName} </CardPersonalInfo>
                    Date of birth: <CardPersonalInfo>{props.player.dateOfBirth.substring(0, 10)}</CardPersonalInfo>
                </Alert> <hr />
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Email: <CardPersonalInfo>{props.player.email} </CardPersonalInfo>
                    Username: <strong>{props.player.username} </strong>
                </Alert> <hr />
                <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                    Credits: <CardStatisticsInfo>{props.player.credits};</CardStatisticsInfo>
                    Transactions made: <CardStatisticsInfo>{props.player.transactionTracker.length};</CardStatisticsInfo>
                    Total deposited amount:
                    <CardStatisticsInfo>
                        {props.player.transactionTracker.length === 0 ? 0 :
                            props.player.transactionTracker.map(el => el.depositAmount).reduce((prev, cur) => prev + cur)
                        };
                    </CardStatisticsInfo>
                    Tickets played: <CardStatisticsInfo>{props.player.tickets.length};</CardStatisticsInfo>
                </Alert> <hr />
            </PlayerCardInnerWrapper>
            <Box>
                <Transactions props={props.player} />
                <Tickets props={props.player} />
            </Box>
        </CardContent>
        <CardActions>
            <Link to={`${AppRoutes.DeletePlayer}${props.player.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" style={{ backgroundColor: '#a10000' }}>Suspend player</Button>
            </Link>
        </CardActions>
    </Card>
)

export default PlayerCard;