import styled from "styled-components";
import type {User} from "../../types/user.ts";

interface TableRowProps {
    user: User;
    isSelected: boolean;
    onSelect: () => void;
}
interface StyledRowProps {
    $isSelected: boolean;
}

export const TableRow = ({ user, isSelected, onSelect }: TableRowProps) => {
    return (
        <StyledRow $isSelected={isSelected}>
            <td>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={onSelect}
                />
            </td>
            <td>{user.id}</td>
            <td>{user.user_name}</td>
            <td>{user.email}</td>
            <td>
                <StatusBadge $isActive={true}>Active</StatusBadge>
            </td>
            <td>{new Date(user.created_at).toLocaleDateString()}</td>
        </StyledRow>
    );
};

const StyledRow = styled.tr<StyledRowProps>`
    background-color: ${props => props.$isSelected ? 'rgba(144, 255, 144, 0.2)' : 'transparent'};

    &:hover {
        background-color: rgba(144, 255, 144, 0.1);
    }
`;

const StatusBadge = styled.span<{ $isActive: boolean }>`
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    background-color: ${props => props.$isActive ? '#2e7d32' : '#d32f2f'};
    color: white;
`;