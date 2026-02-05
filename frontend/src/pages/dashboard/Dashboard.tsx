import {styled} from "styled-components";

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     status: string;
//     created_at: string;
// }

export const Dashboard = () => {
    return (
        <StyledWrapperPage>

        </StyledWrapperPage>
    );
};

const StyledWrapperPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(144, 255, 144);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.77);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 0 4px 8px rgba(255, 255, 255, 0.35);
    margin: 0 10px;
    padding: 10px 50px;
`;

