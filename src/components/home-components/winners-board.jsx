import { Alert, AlertTitle, Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Prizes } from "../../consts/helpers/prizes";
import { winnersBoardColumns } from "../../consts/helpers/table-columns";
import { WinnersTableWrapper } from "../../consts/styles/statistics-style/tables-style";
import { getDrawDates, getWinnersBoard, initiateDemoDraw } from "../../services/draw-service";
import NoDataAlert from "../shared/no-data-alert";

const WinnersBoard = () => {
    const ticksToDate = require('ticks-to-date');
    const Hashids = require('hashids/cjs')
    const date = ticksToDate(0);
    const hashids = new Hashids('salt-n-pepa');
    const [alertMsg, setAlertMsg] = useState('There are no concluded draws at the moment');
    const [displayedWinnersMsg, setDisplayedWinnersMsg] = useState('Displaying winner from latest draw.');
    const [drawDates, setDrawDates] = useState([]);
    const [drawTime, setDrawTime] = useState(date);
    const [winnersBoard, setWinnersBoard] = useState(null);

    useEffect(() => {
        getWinnersBoard(drawTime).then(ticket => {
            setWinnersBoard(ticket);
        }).catch(x => console.log(x));
    }, [drawTime]);

    useEffect(() => {
        getDrawDates().then(dates => {
            setDrawDates(dates);
        }).catch(x => console.log(x));
    }, []);


    let id = 99999;
    const rows = winnersBoard !== null ? winnersBoard.map(winner => ({
        id: hashids.encode(id++),
        playerName: winner.playerName,
        combination: winner.combinationNumbersString,
        prize: Prizes[winner.prize - 1]
    })) : [];

    const handleDemoDraw = () => {
        initiateDemoDraw().then(draw => {
            draw !== null ? window.location.reload() : setAlertMsg('No Server Response!');
        }).catch(x => console.log(x));
    }

    const handleChange = e => {
        setDrawTime(e.target.value);
        setDisplayedWinnersMsg(`Displaying winners from draw held at ${e.target.value.substr(0, 19)}`);
        getWinnersBoard(drawTime).then(ticket => {
            setWinnersBoard(ticket);
        }).catch(x => console.log(x));
    };

    return (
        <Box>
            {winnersBoard === null ?
                <Box>
                    <NoDataAlert msg={alertMsg} />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='filled' sx={{ backgroundColor: '#0275d8' }} onClick={handleDemoDraw}>Initiate Demo Draw</Button>
                    </Box>
                </Box>
                :
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '35%', margin: '5% auto' }}>
                        <Alert variant="filled" severity="info">
                            <AlertTitle>{displayedWinnersMsg}</AlertTitle>
                        </Alert>
                        <FormControl sx={{width: '33%', margin: '5px auto'}}>
                            <InputLabel id="demo-simple-select-label">Select Draw Date</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={''}
                                label="Age"
                                onChange={handleChange}
                            >
                                {drawDates.map(date => (
                                    <MenuItem key={date} value={date}>{date.substr(0,19)}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <WinnersTableWrapper>
                        <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={10} rowsPerPageOptions={[10]} rows={rows} columns={winnersBoardColumns} />
                    </WinnersTableWrapper>
                </>
            }
        </Box>
    )
}

export default WinnersBoard;