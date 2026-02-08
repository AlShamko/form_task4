import {styled} from "styled-components";
import morf from "../../assets/images/morf.webp";

export const RegisterImg = () => {
    return (
        <StyledLoginImg/>
    );
};

const StyledLoginImg = styled.div`
    background-image: url(${morf});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
`