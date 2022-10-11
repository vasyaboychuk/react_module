import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux/slices/post.slice";
import {Post} from "../Post/Post";

function Posts(props) {

    const dispatch = useDispatch();

    const {posts,postFromApi} = useSelector(state => state.postReducer);

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])

    return (
        <div>
            {postFromApi&&postFromApi.title}
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
}

export {Posts};