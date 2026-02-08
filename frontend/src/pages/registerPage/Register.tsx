import React from 'react';
import {styled} from "styled-components";
import {RegisterForm} from "./RegisterForm.tsx";
import {RegFormWrap} from "./RegFormWrap.tsx";
import {Video} from "../../components/Video.tsx";
import {Registration} from "./Registration.tsx";
import {RegisterWrapper} from "./RegisterWrapper.tsx";
import {RegisterImg} from "./RegisterImg.tsx";

export const Register: React.FC = () => {
    return (
        <StyledLoginPage>
            <StyledTitle>THE MATRIX</StyledTitle>
            <RegisterWrapper>
                <RegFormWrap>
                    <StyledTitleForm>For the Chosen Only</StyledTitleForm>
                    <RegisterForm/>
                    <Registration/>
                </RegFormWrap>
                <RegisterImg/>
            </RegisterWrapper>
            <Video/>
        </StyledLoginPage>
    );
};

const StyledLoginPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(144, 255, 144);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.77);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 0 4px 8px rgba(255, 255, 255, 0.35);
    margin: 0 10px;
    padding: 10px 50px;
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    color: rgb(144, 255, 144);
    margin: 20px 0 30px 0;
`;

const StyledTitleForm = styled.h2`
    margin-bottom: 15px;
    color: rgb(144, 255, 144);
`