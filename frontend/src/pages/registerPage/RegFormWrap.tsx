import {styled} from "styled-components";
import type {ReactNode} from "react";

type FormWrapperProps = {
    children: ReactNode;
};

export const RegFormWrap = ({children}: FormWrapperProps) => {
    return (
        <StyledFormWrapper>
            {children}
        </StyledFormWrapper>
    );
};

const StyledFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`