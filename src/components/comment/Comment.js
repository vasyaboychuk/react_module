import {Link} from "react-router-dom";

function Comment({comment}) {

    const {id, name, email, body} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>{body}</div>
            <Link to={comment.postId.toString()}>Get info</Link>
        </div>
    )
}

export {Comment};