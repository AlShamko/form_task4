import { Input } from "../../components/input/Input.tsx";
import { Button } from "../../components/button/Button.tsx";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormData {
    email: string;
    password: string;
}

interface StyledButtonProps {
    $variant: 'primary' | 'secondary';
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setServerError(errorData.message || 'Incorrect email or password');
            }
        } catch {
            setServerError('Server error. Please try again later.');
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="email"
                label="Email"
                {...register("email", { required: "Enter your email" })}
                error={errors.email?.message}
            />
            <Input
                type="password"
                label="Password"
                {...register("password", { required: "Enter your password" })}
                error={errors.password?.message}
            />

            {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

            <LoginButton type="submit" $variant="primary" disabled={isSubmitting}>
                Continue
            </LoginButton>
        </StyledForm>
    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

const LoginButton = styled(Button)<StyledButtonProps>`
    background-color: ${props => (props.$variant === 'secondary' ? '#90ff90' : '#90ff90')};
    color: ${props => (props.$variant === 'secondary' ? '#000000' : 'rgb(0,0,0)')};

    &:hover {
        background-color: color-mix(in srgb, ${p => p.$variant === 'secondary' ? '#90ff90' : '#90ff90'} 70%, black);
        color: ${props => (props.$variant === 'secondary' ? '#000000' : '#000000')};
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin: 0 0 10px 0;
`;
