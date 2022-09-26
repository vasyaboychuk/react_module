import {useEffect, useState} from "react";

import {apiService} from "../../services";
import Comment from "../comment/Comment";


function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        apiService.getComments().then(value => setComments(value.data));

    },[])

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
}

export default Comments;