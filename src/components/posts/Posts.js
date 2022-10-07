import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../services";
import {LOAD_POSTS} from "../../redux/actions/actions";
import {Post} from "../post/Post";
import css from './Posts.module.css'

function Posts(props) {

    const {posts} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data})=>dispatch({type:LOAD_POSTS, payload: data}))

    }, []);

    return (
        <div className={css.Posts}>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    )
}

export {Posts};