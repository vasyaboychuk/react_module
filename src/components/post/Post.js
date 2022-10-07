import css from './Post.module.css';

function Post({post}) {


    return (
        <div className={css.post}>
            <div><strong>id</strong>:  {post.id}</div>
            <div><strong>Title</strong>:  {post.title}</div>
            <div><strong>Body</strong>:  {post.body}</div>

        </div>
    );
}

export {Post};