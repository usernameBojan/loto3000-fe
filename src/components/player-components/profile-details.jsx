import React from "react";
import { Alert, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/user-service";
import { APIRoutes } from "../../consts/routes/api-routes";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../consts/routes/app-routes";
import { CardContainer, CardPersonalInfo, CardStatisticsInfo, CardWrapper, PlayerCardInnerWrapper } from "../../consts/styles/card/card-wrapper";

const ProfileDetails = () => {
    const [playerBoard, setPlayer] = useState([]);

    useEffect(() => {
        getUsers(APIRoutes.GetPlayer).then(player => {
            setPlayer(player);
        }).catch(x => console.log(x));
    }, [])

    return (
        <CardContainer>
            <CardWrapper>
                <Card>
                    <CardContent>
                        <PlayerCardInnerWrapper>
                            <Typography variant="h5">
                                Profile Details
                            </Typography> <hr />
                            <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                                Name: <CardPersonalInfo>{playerBoard.firstName} </CardPersonalInfo>
                                Surname: <CardPersonalInfo>{playerBoard.lastName} </CardPersonalInfo>
                                Fullname: <CardPersonalInfo>{playerBoard.fullName} </CardPersonalInfo>
                                Date of birth: <CardPersonalInfo>{playerBoard.dateOfBirth}</CardPersonalInfo>
                            </Alert> <hr />
                            <Alert variant='filled' severity='info' sx={{ marginBottom: '5px' }}>
                                Email: <CardPersonalInfo>{playerBoard.email} </CardPersonalInfo>
                                Username: <CardPersonalInfo>{playerBoard.username} </CardPersonalInfo>
                                Credits: <CardStatisticsInfo>{playerBoard.credits};</CardStatisticsInfo>
                            </Alert> <hr />
                            <CardActions>
                                <Link to={AppRoutes.ChangePassword} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" sx={{ backgroundColor: '#a10000' }}>Change Password</Button>
                                </Link>
                            </CardActions> <hr />
                        </PlayerCardInnerWrapper> <br />
                    </CardContent>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default ProfileDetails;