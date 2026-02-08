import bgMatrix from "../assets/videos/bg_matrix.mp4";
import {styled} from "styled-components";

export const Video = () => {
    return (
            <StyledVideo
                autoPlay
                muted
                loop
                className="bgVideo"
            >
                <source
                    src={bgMatrix}
                    type="video/mp4"
                />
            </StyledVideo>
    )
}

const StyledVideo = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
`
