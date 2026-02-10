import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Registration = () => {
    return (
        <StyledWrapper>
            <StyledText>Don't have an account?</StyledText>
            <StyledLink to="/register">
                Sign Up {'\u{1F407}'}
            </StyledLink>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledText = styled.p`
    color: rgb(0, 0, 0);
    font-weight: 600;
    margin-right: 5px;
`;

const StyledLink = styled(Link)`
    color: rgb(0, 0, 0);
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgb(0, 255, 34);
    }
`;
