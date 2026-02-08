import styled from "styled-components";
import type {User} from "../../types/user.ts";

interface TableRowProps {
    user: User;
}

const columns: (keyof User)[] = [
    "id",
    "name",
    "email",
    "status",
    "created_at",
];

export const TableRow = ({ user }: TableRowProps) => {
    return (
        <StyledRow>
            {columns.map((key) => (
                <td key={key}>{user[key]}</td>
            ))}
        </StyledRow>
    );
};

const StyledRow = styled.tr`
    td {
        padding: 5px 10px;
    }
`;
