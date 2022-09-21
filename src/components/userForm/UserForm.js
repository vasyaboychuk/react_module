
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'

import {userValidator} from "../../validators";
import {userService} from "../../services";


function UserForm({setUsers}) {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({resolver:joiResolver(userValidator),mode:'all'});

    async function submit(user) {
        const {data}=await userService.create(user)
        setUsers(users=>[...users,data])
        reset()
    }

    return (
        <form  onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'id'} {...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type={"text"} placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type={"text"} placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Save</button>

        </form>
    );
}

export default UserForm;