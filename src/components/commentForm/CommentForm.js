import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/comment.validator";
import {commentService} from "../../services";



function CommentForm({setComments}) {
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({resolver:joiResolver(commentValidator),
        mode: "all"})

    async function submit(comment) {
        const {data} = await commentService.create(comment);
        setComments(comments => [...comments, data]);
        reset();
    }

    return (
        <div>
            <form  onSubmit={handleSubmit(submit)}>

                <input type={"text"} placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type={"text"} placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type={"text"} placeholder={'comment'} {...register('comment')}/>
                {errors.comment && <span>{errors.comment.message}</span>}
                <button disabled={!isValid}>Save</button>

            </form>

        </div>
    );
}

export default CommentForm;