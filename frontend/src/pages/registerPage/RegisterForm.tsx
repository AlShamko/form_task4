import { Input } from "../../components/input/Input.tsx";
import { Button } from "../../components/button/Button.tsx";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormData {
    user_name: string;
    email: string;
    password: string;
}

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {

        setServerError(null);
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                const errorData = await response.json();
                setServerError(errorData.message || 'Registration error');
            }
        } catch {
            setServerError('Server error. Please try again later.');
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Username"
                type="text"
                {...register("user_name", { required: "Enter your username" })}
                error={errors.user_name?.message}
            />
            <Input
                label="Email"
                type="email"
                {...register("email", { required: "Enter your email" })}
                error={errors.email?.message}
            />
            <Input
                label="Password"
                type="password"
                {...register("password", { required: "Enter your password" })}
                error={errors.password?.message}
            />

            {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

            <Button type="submit" disabled={isSubmitting}>Register</Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    margin: 0;
`;
