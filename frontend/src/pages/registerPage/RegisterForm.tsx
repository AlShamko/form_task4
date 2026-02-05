import {Input} from "../../components/input/Input.tsx";
import {Button} from "../../components/button/Button.tsx";
import {styled} from "styled-components";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

interface FormData {
    username: string;
    email: string,
    password: string;
}


export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        const response = await fetch('http://localhost:5000/register', {
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
                label="Username"
                type="text"
                {...register("username", {required: "Enter your username"})}
                error={errors.username?.message as string}
            />
            <Input
                label="Email"
                type="Email"
                {...register("email", {required: "Enter your e-mail"})}
                error={errors.email?.message as string}
            />
            <Input
                label="Password"
                type="password"
                {...register("password", {required: "Enter your password"})}
                error={errors.password?.message as string}
            />
            <Button type="submit">Continue</Button>
        </StyledForm>

    )
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
`