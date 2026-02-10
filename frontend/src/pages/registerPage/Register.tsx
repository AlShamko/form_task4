import React from "react";
import { styled } from "styled-components";
import { RegisterForm } from "./RegisterForm.tsx";
import { RegFormWrap } from "./RegFormWrap.tsx";
import { Registration } from "./Registration.tsx";
import { RegisterWrapper } from "./RegisterWrapper.tsx";

export const Register: React.FC = () => {
  return (
    <StyledLoginPage>
      <StyledTitle>Sign Up</StyledTitle>
      <RegisterWrapper>
        <RegFormWrap>
          <StyledTitleForm></StyledTitleForm>
          <RegisterForm />
          <Registration />
        </RegFormWrap>
      </RegisterWrapper>
    </StyledLoginPage>
  );
};

const StyledLoginPage = styled.div`
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
    color: rgb(0, 0, 0);
    margin: 20px 0 30px 0;
`;

const StyledTitleForm = styled.h2`
  margin-bottom: 15px;
  color: rgb(144, 255, 144);
`;
