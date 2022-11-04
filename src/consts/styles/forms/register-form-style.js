import styled from "styled-components";

const shared = `
    display: flex;
    flex-direction: column; 
    background-color: #f7f7f7;
    min-height: 55%;
    border-radius: 10px;
    margin: 10% auto;
`

export const RegisterFormWrapper = styled.form`
    ${shared}
    align-items: flex-start; 
    padding: 20px;
    width: 75%;
`;

export const RegisterFormInputsWrapper = styled.div`
    display: flex;
    padding: 10px;
`;

export const VerifyFormWrapper = styled.form`
    ${shared}
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 10px;
`;