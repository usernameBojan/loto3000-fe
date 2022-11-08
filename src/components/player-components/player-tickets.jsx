import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react"
import { ticketsStatisticsData } from "../../consts/helpers/statistics-data";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTickets } from "../../services/tickets-service";
import { getPlayerTicketsStatistics } from "../../services/user-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";
import PlayerTicketsTabular from "./tickets/tickets";

const PlayerTickets = () => {
    const currentTime = new Date();
    const [tickets, setTickets] = useState([]);
    const [allTickets, setPlayerTickets] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [alertMsg, setAlertMsg] = useState('You still haven\'t played any tickets!');

    useEffect(() => {
        getTickets(APIRoutes.PlayerTickets).then(tickets => {
            setPlayerTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getPlayerTicketsStatistics().then(stats => {
            stats !== null ? setStatistics(stats) : setAlertMsg('No Server Response!');
        }).catch(x => console.log(x));
    }, []);

    const handleHide = () => setIsDisplayed(false);

    const handleAllTickets = () => {
        setTickets(allTickets);
        setIsDisplayed(true);
    };

    const handleActiveTickets = () => {
        const activeTickets = allTickets.filter(el => Date.parse(el.draw.drawTime) > Date.parse(currentTime));
        setTickets(activeTickets);
        setIsDisplayed(true);
    };

    const handlePastTickets = () => {
        const pastTickets = allTickets.filter(el => Date.parse(el.draw.drawTime) < Date.parse(currentTime));
        setTickets(pastTickets);
        setIsDisplayed(true);
    };

    const handleWinningTickets = () => {
        const winningTickets = allTickets.filter(el => el.prize >= 3);
        setTickets(winningTickets);
        setIsDisplayed(true);
    }

    return (
        <StatisticsWrapper>
            {statistics.ticketsPlayed !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.tickets} data={ticketsStatisticsData({ ...statistics, allTickets })} />
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
                </> : <NoDataAlert msg={alertMsg} />
            }
        </StatisticsWrapper>
    )
}

export default PlayerTickets;