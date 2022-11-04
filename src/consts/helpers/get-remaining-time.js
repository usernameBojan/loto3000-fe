import dayjs from 'dayjs';

const padWithZeros = (number, minLength) => {
    const numberString = number.toString();

    if(numberString.length >= minLength) return numberString;

    return "0".repeat(minLength - numberString.length) +  numberString;
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;

    return padWithZeros(seconds, 2);
}

const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;

    return padWithZeros(minutes, 2);
}

const getRemainingHours = (nowDayjs, timestampDayjs) => {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;

    return padWithZeros(hours, 2);
}

const getRemainingDays = (nowDayjs, timestampDayjs) => {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    
    return days.toString();
}

const getRemainingTime = (timestampMs) => {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    
    return {
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs),
        hours : getRemainingHours(nowDayjs, timestampDayjs),
        days : getRemainingDays(nowDayjs, timestampDayjs)
    } ;
}

export default getRemainingTime;