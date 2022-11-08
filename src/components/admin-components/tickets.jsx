import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ticketsStatisticsDataByAdmin } from "../../consts/helpers/statistics-data";
import { APIRoutes } from "../../consts/routes/api-routes";
import { statisticsAlertStyle, StatisticsWrapper } from "../../consts/styles/statistics-style/statistics-style";
import { getTickets, getTicketsStatistics } from "../../services/tickets-service";
import NoDataAlert from "../shared/no-data-alert";
import Statistics from "../shared/statistics";
import TicketsByAdminTabular from "./tickets/tickets-tabular";

const TicketsByAdmin = () => {
    const currentTime = new Date();
    const [tickets, setTickets] = useState([]);
    const [allTickets, setAllTickets] = useState([]);
    const [statistics, setStatistics] = useState([]);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [alertMsg, setAlertMsg] = useState('No tickets yet!');

    useEffect(() => {
        getTickets(APIRoutes.AllTickets).then(tickets => {
            setAllTickets(tickets);
        }).catch(x => console.log(x));
    }, []);

    useEffect(() => {
        getTicketsStatistics().then(stats => {
            stats !== null ? setStatistics(stats) : setAlertMsg('No Server Response!');
        })
    }, []);

    const handleHide = () => setIsDisplayed(false);

    const handleAll = () => {
        setTickets(allTickets);
        setIsDisplayed(true);
    };

    const handleActive = () => {
        const activeTickets = allTickets.filter(el => Date.parse(el.draw.drawTime) > Date.parse(currentTime));
        setTickets(activeTickets);
        setIsDisplayed(true);
    };

    const handlePast = () => {
        const pastTickets = allTickets.filter(el => Date.parse(el.draw.drawTime) < Date.parse(currentTime));
        setTickets(pastTickets);
        setIsDisplayed(true);
    };

    const handleRegistered = () => {
        const registeredPlayerTickets = allTickets.filter(el => el.playerId !== 0);
        setTickets(registeredPlayerTickets);
        setIsDisplayed(true);
    };

    const handleNonregistered = () => {
        const nonregisteredPlayerTickets = allTickets.filter(el => el.playerId === 0);
        setTickets(nonregisteredPlayerTickets);
        setIsDisplayed(true);
    };

    return (
        <StatisticsWrapper>
            {statistics.totalTickets !== 0 ?
                <>
                    <Statistics style={statisticsAlertStyle.ticketsByAdmin} data={ticketsStatisticsDataByAdmin(statistics)} />
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
                : <NoDataAlert msg={alertMsg} />
            }
        </StatisticsWrapper>
    )
}

export default TicketsByAdmin;