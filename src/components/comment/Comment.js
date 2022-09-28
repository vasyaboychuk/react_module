import {Link} from "react-router-dom";

function Comment({comment}) {



    return (
        <div>
            <div>id: {comment.id}</div>
            <div>Name: {comment.name}</div>
            <div>Email: {comment.email}</div>
            <div>{comment.body}</div>
            <Link to={comment.postId.toString()}>Get info</Link>
        </div>
    )
}

export {Comment};