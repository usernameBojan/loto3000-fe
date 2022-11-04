import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react"
import { ticketsStatisticsData } from "../../consts/helpers/statistics-data";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTickets } from "../../services/tickets-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";
import PlayerTicketsTabular from "./tickets/tickets";

const PlayerTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [allTickets, setPlayerTickets] = useState([]);
    const [activeTickets, setActiveTickets] = useState([]);
    const [pastTickets, setPastTickets] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        getTickets(APIRoutes.PlayerTickets).then(tickets => {
            setPlayerTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.PlayerActiveTickets).then(tickets => {
            setActiveTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTickets(APIRoutes.PlayerPastTickets).then(tickets => {
            setPastTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    const ticketsPlayed = allTickets.length === 0 ? 0 : allTickets.length;

    const handleHide = () => {
        setIsDisplayed(false);
    };

    const handleAllTickets = () => {
        setTickets(allTickets);
        setIsDisplayed(true);
    };

    const handleActiveTickets = () => {
        setTickets(activeTickets);
        setIsDisplayed(true);
    };

    const handlePastTickets = () => {
        setTickets(pastTickets);
        setIsDisplayed(true);
    };

    const handleWinningTickets = () => {
        setTickets(pastTickets.filter(el => el.prize >= 3));
        setIsDisplayed(true);
    }

    return (
        <StatisticsWrapper>
            {ticketsPlayed !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.tickets} data={ticketsStatisticsData({ allTickets, activeTickets, pastTickets })} />
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '20%', padding: '50px' }}>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleActiveTickets}
                        >
                            Show active
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleAllTickets}
                        >
                            Show all
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handlePastTickets}
                        >
                            Show past
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleWinningTickets}
                        >
                            Show winning
                        </Button>
                        <Button
                            sx={{ marginRight: '10px', marginBottom: '20px' }}
                            variant='outlined'
                            onClick={handleHide}
                        >
                            Hide tickets
                        </Button>
                    </Box>
                    <Box style={{ display: isDisplayed ? 'block' : 'none', height: '55vh', width: '75%' }}>
                        <PlayerTicketsTabular tickets={tickets} />
                    </Box>
                </> : <NoDataAlert msg={'You still haven\'t played any tickets!'} />
            }
        </StatisticsWrapper>
    )
}

export default PlayerTickets;