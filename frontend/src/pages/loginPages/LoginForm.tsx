import {Input} from "../../components/input/Input.tsx";
import {Button} from "../../components/button/Button.tsx";
import {styled} from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {API_URL} from "../../api/users.api.ts";
import {useLocation} from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

interface StyledButtonProps {
    $variant: 'primary' | 'secondary';
}

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormData>();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const location = useLocation();

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('userEmail', userData.email);
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setServerError(errorData.message || 'Login error');
            }
        } catch {
            setServerError('Server error. Please try again later.');
        }
    };

    useEffect(() => {
        if (location.state?.message) {
            const msg = location.state.message;
            navigate(location.pathname, {replace: true, state: {}});
            setTimeout(() => {
                setSuccessMessage(msg);
            }, 0);
        }
    }, [location.pathname, navigate]);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            <Input
                type="email"
                label="Email"
                {...register("email", {required: "Enter your email"})}
                error={errors.email?.message}
            />
            <Input
                type="password"
                label="Password"
                {...register("password", {required: "Enter your password"})}
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
    color: #000000;
    font-size: 14px;
    margin: 0 0 10px 0;
`;

const SuccessMessage = styled.p`
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 15px 0;
    text-align: center;
`;
