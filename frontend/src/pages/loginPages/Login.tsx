import React from "react";
import {styled} from "styled-components";
import {LoginForm} from "./LoginForm.tsx";
import {FormWrapper} from "./FormWrapper.tsx";
import {Registration} from "./Registration.tsx";
import {LoginWrapper} from "./LoginWrapper.tsx";

export const Login: React.FC = () => {
    return (
        <StyledWrapperPage>
            <StyledTitle>Sign In</StyledTitle>
            <LoginWrapper>
                <FormWrapper>
                    <StyledTitleForm>For the Chosen Only</StyledTitleForm>
                    <LoginForm/>
                    <Registration/>
                </FormWrapper>
            </LoginWrapper>
        </StyledWrapperPage>
    );
};

const StyledWrapperPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 470px;
    width: 350px;
    border: 1px solid rgb(144, 255, 144);
    border-radius: 10px;
    background-color: rgba(149, 148, 148, 0.77);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 0 4px 8px rgba(255, 255, 255, 0.35);
    margin: 0 10px;
    padding: 10px 50px;
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    color: rgb(17, 17, 17);
    margin: 20px 0 30px 0;
`;

const StyledTitleForm = styled.h2`
    font-size: 1rem;
    margin-bottom: 15px;
    color: rgb(17, 17, 17);
`;
