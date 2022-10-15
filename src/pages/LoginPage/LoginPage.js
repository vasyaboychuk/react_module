import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const {handleSubmit,register} = useForm();
    const navigate = useNavigate();


    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setTokens(data)
            navigate('/cars')

        } catch (e) {


        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'text'} placeholder={'password'} {...register('password')}/>
            <button> LOGIN</button>
        </form>
    )
}

export {LoginPage};