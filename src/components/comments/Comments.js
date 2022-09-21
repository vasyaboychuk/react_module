import {useEffect, useState} from "react";
import {commentService} from "../../services";
import Comment from "../comment/Comment";
import css from './Comments.module.css';


function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentService.get().then(({data})=>
        setComments(data))

    },[])
    return (
        <div>

            <hr/>
            <div className={`${css.Comments}`}>{comments.map(comment=><Comment key={comment.id} comment={comment}/>)}</div>

        </div>
    );
}

export default Comments;