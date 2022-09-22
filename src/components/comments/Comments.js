import {useEffect, useState} from "react";
import {commentService} from "../../services";
import Comment from "../comment/Comment";
import css from './Comments.module.css';
import CommentForm from "../commentForm/CommentForm";


function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentService.get().then(({data})=>
        setComments(data.slice(0,8)))

    },[])
    return (
        <div>
            <hr/>
           <div className={`${css.Form}`}><CommentForm setComments={setComments}/></div>
            <hr/>
            <div className={`${css.Comments}`}>{comments.map(comment=><Comment key={comment.id} comment={comment}/>)}</div>

        </div>
    );
}

export default Comments;