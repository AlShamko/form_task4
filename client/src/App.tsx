import "./App.css";
import {styled} from "styled-components";
import bgMatrix from "./assets/videos/bg_matrix.mp4";

function App() {
    return (
        <div className="app">
            <video
                autoPlay
                muted
                loop
                className="bgVideo"
            >
                <source
                    src={bgMatrix}
                    type="video/mp4"
                />
            </video>
            <Title className="titleApp">THE MATRIX</Title>
            <div className="wrapper">
                <div className="form">
                    <div className="titleForm">For the Chosen Only</div>
                    <div className="loginForm">
                        <input type="email" />
                        <input type="password" />
                        <button>Button</button>
                    </div>
                    <div className="registration">
                        <p>Don't have an account? </p>
                        <a href="#">Sign up {"\u{1F407}"}</a>
                    </div>
                </div>
                <div className="imgPrev"></div>
            </div>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 2rem;
`;
