import styled from "styled-components"

export const StatisticsWrapper = styled.div`
    margin-top: 75px; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly; 
    align-items: 'flex-start'
`;

export const StatisticsInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

const alertStyle = {
    margin: '5px', padding: '10px'
}

export const statisticsAlertStyle = {
    tickets: {...alertStyle, width: '55%'},
    transactions: {...alertStyle, width: '80%'},
    ticketsByAdmin: {...alertStyle, width: '85%'},
    transactionsByAdmin: {...alertStyle, width: '22rem'}
}