import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { defaultRemainingTime } from "../../consts/helpers/default-remaining-time";
import getRemainingTime from "../../consts/helpers/get-remaining-time";
import { AppRoutes } from "../../consts/routes/app-routes";
import { Timer, TimerElementsWrapper, TimerInnerWrapper, TimerWrapper } from "../../consts/styles/timer/countdown-timer-style";

const CountdownUntillNextDraw = ({ countdownTimestamp }) => {
    const navigate = useNavigate();
    const [remainingTime, setRemainingTime] = useState({ defaultRemainingTime });

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(countdownTimestamp);
        }, 1000);
        return () => clearTimeout(interval);
    }, [countdownTimestamp])

    const updateRemainingTime = countdown => setRemainingTime(getRemainingTime(countdown));

    return (
        <TimerWrapper>
            <TimerElementsWrapper>
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Time untill next draw</Typography>
                <TimerInnerWrapper>
                    <Timer>{parseInt(remainingTime.days) !== 0 ? remainingTime.days : ''}</Timer>
                    <Timer>{parseInt(remainingTime.days) !== 0 ? 'days' : ''}</Timer>
                    <Timer>{parseInt(remainingTime.hours) !== 0 ? remainingTime.hours : ''}</Timer>
                    <Timer>{parseInt(remainingTime.hours) !== 0 ? 'hours' : ''}</Timer>
                    <Timer>{parseInt(remainingTime.minutes) !== 0 ? remainingTime.minutes : ''}</Timer>
                    <Timer>{parseInt(remainingTime.minutes) !== 0 ? 'minutes' : ''}</Timer>
                    <Timer>{parseInt(remainingTime.seconds) !== 0 ? remainingTime.seconds : ''}</Timer>
                    <Timer>{parseInt(remainingTime.seconds) !== 0 ? 'seconds' : ''}</Timer>
                </TimerInnerWrapper>
                <Button variant='filled' onClick={() => navigate(AppRoutes.CreateTicket)} sx={{ backgroundColor: '#5cb85c' }}>Create your ticket now</Button>
            </TimerElementsWrapper>
        </TimerWrapper>
    )
}

export default CountdownUntillNextDraw;