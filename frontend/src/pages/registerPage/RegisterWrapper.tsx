import {styled} from "styled-components";
import type {ReactNode} from "react";

type WrapperProps = {
    children: ReactNode;
};


export const RegisterWrapper = ({children}: WrapperProps) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`