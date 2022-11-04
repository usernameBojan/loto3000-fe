import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ticketsStatisticsDataByAdmin } from "../../consts/helpers/statistics-data";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTickets } from "../../services/tickets-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";
import TicketsByAdminTabular from "./tickets/tickets-tabular";

const TicketsByAdmin = () => {
    const [tickets, setTickets] = useState([]);
    const [allTickets, setAllTickets] = useState([]);
    const [activeTickets, setActiveTickets] = useState([]);
    const [pastTickets, setPastTickets] = useState([]);
    const [registeredPlayerTickets, setRegisteredPlayerTickets] = useState([]);
    const [nonregisteredPlayerTickets, setNonRegisteredPlayerTickets] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        getTickets(APIRoutes.AllTickets).then(tickets => {
            setAllTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.ActiveTickets).then(tickets => {
            setActiveTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.PastTickets).then(tickets => {
            setPastTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.RegisteredPlayersTickets).then(tickets => {
            setRegisteredPlayerTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.NonregisteredPlayersTickets).then(tickets => {
            setNonRegisteredPlayerTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    const ticketsPlayed = allTickets.length === 0 ? 0 : allTickets.length;

    const handleHide = () => setIsDisplayed(false);

    const handleAll = () => {
        setTickets(allTickets);
        setIsDisplayed(true);
    };

    const handleActive = () => {
        setTickets(activeTickets);
        setIsDisplayed(true);
    };

    const handlePast = () => {
        setTickets(pastTickets);
        setIsDisplayed(true);
    };

    const handleRegistered = () => {
        setTickets(registeredPlayerTickets);
        setIsDisplayed(true);
    };

    const handleNonregistered = () => {
        setTickets(nonregisteredPlayerTickets);
        setIsDisplayed(true);
    };

    const statisticsData = {
        allTickets,
        activeTickets,
        pastTickets,
        registeredPlayerTickets,
        nonregisteredPlayerTickets
    }

    return (
        <StatisticsWrapper>
            {ticketsPlayed !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.ticketsByAdmin} data={ticketsStatisticsDataByAdmin(statisticsData)} />
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '25%', padding: '15px' }}>
                        <Button

                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handleActive}
                        >
                            Show active tickets
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handleAll}
                        >
                            Show all tickets
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handlePast}
                        >
                            Show past tickets
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handleRegistered}
                        >
                            Show registered players tickets
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handleNonregistered}
                        >
                            Show nonregistered players tickets
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '12.5px' }}
                            variant='outlined'
                            onClick={handleHide}
                        >
                            Hide tickets
                        </Button>
                    </Box>
                    <Box
                        sx={{ display: isDisplayed ? 'block' : 'none', height: '50vh', width: '44%' }}
                    >
                        <TicketsByAdminTabular tickets={tickets} />
                    </Box>
                </>
                : <NoDataAlert msg={'No tickets yet!'} />
            }
        </StatisticsWrapper>
    )
}

export default TicketsByAdmin;