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
    color: rgb(144, 255, 144);
    margin-right: 5px;
`;

const StyledLink = styled(Link)`
    color: rgb(255, 255, 255);
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgb(255, 144, 144);
    }
`;
