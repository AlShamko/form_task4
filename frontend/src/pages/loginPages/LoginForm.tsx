import {Input} from "../../components/input/Input.tsx";
import {Button} from "../../components/button/Button.tsx";
import {styled} from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

interface FormData {
    email: string,
    password: string;
}

interface StyledButtonProps {
    $variant: 'primary' | 'secondary';
}

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });

        if (response.ok) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            alert('Неверный логин или пароль');
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="Email"
                label="Email"
                {...register("email", {required: "Enter your e-mail"})}
                error={errors.email?.message as string}
            />
            <Input
                type="password"
                label="Password"
                {...register("password", {required: "Enter your password"})}
                error={errors.password?.message as string}
            />
            <LoginButton type="submit" $variant="secondary">Continue</LoginButton>
        </StyledForm>

    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

const LoginButton = styled(Button)<StyledButtonProps>`
    background-color: ${props => (props.$variant === 'secondary' ? '#90ff90' : '#90ff90')};
    color: ${props => (props.$variant === 'secondary' ? '#000000' : 'rgb(0,0,0)')};

    &:hover {
        background-color: color-mix(in srgb, ${p => p.$variant === 'secondary' ? '#90ff90' : '#90ff90'} 70%, black);
        color: ${props => (props.$variant === 'secondary' ? '#000000' : '#000000')};
    }
`;