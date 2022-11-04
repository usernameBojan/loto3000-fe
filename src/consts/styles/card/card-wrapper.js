import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 55%;
    margin: 10% auto;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
`;

export const PlayerCardInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto; 
    width: 100%;
`;

export const AdminCardInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto; 
    width: 50%;
`;

export const CardPersonalInfo = styled.strong`margin-right: 50px;`;
export const CardStatisticsInfo = styled.strong`margin-right: 25px;`;