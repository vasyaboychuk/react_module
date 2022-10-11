import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices/post.slice";

function Post({post}) {
    const{id,title,body}=post

    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>select</button>
            <button onClick={()=>dispatch(postActions.deleteById(id))}>delete</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>getFromApi</button>
        </div>
    );
}

export {Post};