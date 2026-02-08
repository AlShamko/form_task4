import {styled} from "styled-components";
import {ToolBar} from "./ToolBar.tsx";
import {Table} from "./Table.tsx";

export const Dashboard = () => {
    return (
        <StyledWrapperPage>
            <ToolBar/>
            <Table/>
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
    background-color: rgb(255, 255, 255);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25),
    inset 0 -4px 8px rgba(0, 0, 0, 0.4),
    inset 0 4px 8px rgba(255, 255, 255, 0.35);
    margin: 0 10px;
    padding: 10px 50px;
`;

