import styled from "styled-components"

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    border-radius: 10px;
    background-color: #f7f7f7;
    min-height: 55%;
    margin: 10% auto;
    padding: 10px;
`;

export const FormInputsWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
`;

export const FormErrorWrapper = styled.div`
    width: 25%; 
    margin: -7.5% auto;
`;

export const SuccessAlertWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border-radius: 10px;
    min-height: 55%;
    margin: 10% auto;
`;