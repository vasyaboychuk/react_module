import {Link} from "react-router-dom";


function Comment({comment}) {

    const{id,name,email,body}=comment;


    return (
        <div>
            <h3>{id}</h3>
            <h3>{name} </h3>
            <h3>{email}</h3>
            <h3>{body}</h3>
            <Link  to={`/posts/${comment.id}`} state={{...comment}}>Comment</Link>



        </div>
    );
}

export default Comment;