import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({label, error, ...props}, ref) => (
    <Container>
        {label && <Label>{label}</Label>}
        <StyledInput ref={ref} $hasError={!!error} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
    </Container>
));

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 100%;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 0.8rem;
    color: #90ff90;
`;

const StyledInput = styled.input<{ $hasError?: boolean }>`
    border: 2px solid ${(props) => (props.$hasError ? "#ff4d4f" : "rgba(205,205,205,0.35)")};
    border-radius: 6px;
    font-size: 1rem;
    background: rgba(205, 205, 205, 0.35);
    transition: border-color 0.2s;
    color: #90ff90;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.$hasError ? "#ff4d4f" : "rgb(144,255,144)")};
    }
`;

const ErrorText = styled.span`
    color: #ff4d4f;
    font-size: 0.85rem;
    margin-top: 0.25rem;
`;
