import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Prizes } from "../../consts/helpers/prizes";
import { winnersBoardColumns } from "../../consts/helpers/table-columns";
import { WinnersTableWrapper } from "../../consts/styles/statistics-style/tables-style";
import { getWinnersBoard, initiateDemoDraw } from "../../services/draw-service";
import NoDataAlert from "../shared/no-data-alert";

const WinnersBoard = () => {
    const Hashids = require('hashids/cjs')
    const hashids = new Hashids('salt-n-pepa');
    const [winnersBoard, setWinnersBoard] = useState(null);

    useEffect(() => {
        getWinnersBoard().then(ticket => {
            setWinnersBoard(ticket);
        }).catch(x => console.log(x));
    }, [])

    let id = 99999;
    const rows = winnersBoard !== null ? winnersBoard.map(winner => ({
        id: hashids.encode(id++),
        playerName: winner.playerName,
        combination: winner.combinationNumbersString,
        prize: Prizes[winner.prize - 1]
    })) : [];

    const handleDemoDraw = () => {
        initiateDemoDraw().then(draw => {
            if (draw !== null) {
                window.location.reload();
            } else console.log('NO SERVER RESPONSE!');
        }).catch(x => console.log(x));
    }

    return (
        <Box>
            {winnersBoard === null ?
                <Box>
                    <NoDataAlert msg={'There are no concluded draws at the moment'} />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='filled' sx={{ backgroundColor: '#0275d8' }} onClick={handleDemoDraw}>Initiate Demo Draw</Button>
                    </Box>
                </Box>
                :
                <WinnersTableWrapper>
                    <DataGrid sx={{ backgroundColor: '#d0d3d5' }} pageSize={10} rowsPerPageOptions={[10]} rows={rows} columns={winnersBoardColumns} />
                </WinnersTableWrapper>
            }
        </Box>
    )
}

export default WinnersBoard;