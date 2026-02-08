import {styled} from "styled-components";

export const Registration = () => {
    return (
        <div>
            <StyledWrapper>
                <StyledText/>
                <StyledLink/>
            </StyledWrapper>

        </div>
    );
};

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledText = styled.p`
    color: rgb(144, 255, 144);
    margin-right: 5px;
`
const StyledLink = styled.a`
    color: rgb(255, 255, 255);
    text-decoration: none;
`