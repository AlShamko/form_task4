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

`