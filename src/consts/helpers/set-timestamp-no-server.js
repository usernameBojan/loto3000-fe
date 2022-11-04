export const setTimestampWithNoServerResponse = () => {
    let daysInMonth = 0;
    
    const currentDate = new Date();
    const thirtyDaysArr = [4, 6, 9, 11];
    const thirtyOneDaysArr = [1, 3, 5, 7, 8, 10, 12];
    const month = currentDate.getMonth() + 1;

    if (month !== 2) {
        for (let i = 0; i < thirtyOneDaysArr.Length; i++) {
            if (month === thirtyOneDaysArr[i])
                daysInMonth = 31;
        };

        for (let i = 0; i < thirtyDaysArr.Length; i++) {
            if (month === thirtyDaysArr[i])
                daysInMonth = 30;
        };
    } else daysInMonth = 28;

    return currentDate.getDate() === daysInMonth && currentDate.getHours() > 20? 
        Date.parse(new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0, 20)) 
        : Date.parse(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 20)); 
}