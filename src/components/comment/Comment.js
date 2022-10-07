import css from './Comment.module.css';

function Comment({comment}) {

    return (
        <div className={css.Comment}>
            <div><strong>id:</strong> {comment.id}</div>
            <div><strong>Name:</strong>{comment.name}</div>
            <div><strong>Email:</strong>{comment.email}</div>
            <div><strong>Comment:</strong>{comment.body}</div>
        </div>
    );
}

export {Comment};