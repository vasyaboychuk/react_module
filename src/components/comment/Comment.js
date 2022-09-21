import css from './Comment.module.css';

function Comment({comment}) {

    return (
        <div className={`${css.Comment}`}>
            <h2>id:{comment.id} - name:{comment.name}</h2>
            <h3>email:{comment.email}</h3>
            <p>comment:{comment.body}</p>

        </div>
    );
}

export default Comment;