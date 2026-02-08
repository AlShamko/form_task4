import { styled } from "styled-components";
import picApp from "../../assets/images/picApp.webp";

export const LoginImg = () => {
    return <StyledLoginImg />;
};

const StyledLoginImg = styled.div`
    background-image: url(${picApp});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
