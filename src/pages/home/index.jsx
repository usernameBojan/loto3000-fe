import React, { useEffect, useState } from "react"
import CountdownUntillNextDraw from "../../components/home-components/countdown-timer";
import { setTimestampWithNoServerResponse } from "../../consts/helpers/set-timestamp-no-server";
import { getActiveDraw } from "../../services/draw-service";

const Homepage = () => {
    const [draw, setDraw] = useState([]);

    useEffect(() => {
        getActiveDraw().then(draw => {
            setDraw(draw);
        }).catch(x => console.log(x));
    }, [])

    const timestamp = draw===null ? setTimestampWithNoServerResponse() : Date.parse(draw.drawTime);

    return <CountdownUntillNextDraw countdownTimestamp={timestamp}/>
}

export default Homepage;