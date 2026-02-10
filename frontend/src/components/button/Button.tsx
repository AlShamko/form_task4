import React, {type ButtonHTMLAttributes} from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
    $variant: 'primary' | 'secondary';
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({children, variant = 'primary', ...props}) => (
    <StyledButton $variant={variant} {...props}>
        {children}
    </StyledButton>
);

const StyledButton = styled.button<StyledButtonProps>`
    width: 100%;
    padding: 5px;
    font-size: 1rem;
    font-weight: 600;
    box-shadow:
            0 8px 16px rgba(0, 0, 0, 0.25),
            inset 0 -4px 8px rgba(0, 0, 0, 0.4),
            inset 0 4px 8px rgba(255, 255, 255, 0.35);
    border-radius: 10px;
    border: none;
    margin-top: 2rem;
    cursor: pointer;
    transition: all 0.65s ease;

    background-color: ${props => (props.$variant === 'secondary' ? '#90ff90' : '#90ff90')};
    color: ${props => (props.$variant === 'secondary' ? '#000000' : 'rgb(0,0,0)')};

    &:hover {
        background-color: color-mix(in srgb, ${p => p.$variant === 'secondary' ? '#90ff90' : '#90ff90'} 70%, black);
        color: ${props => (props.$variant === 'secondary' ? '#000000' : '#000000')};
    }

    &:active {
        transform: translateY(2px);
    }

    &:disabled {
        background-color: #d9d9d9;
        cursor: not-allowed;
    }
`;
