import css from './SingleUserDetails.module.css';

function SingleUserDetails({user}) {
    return (
        <div className={css.SingleUserDetails}>
            <div>id:{user.id}</div>
            <div>name:{user.name}</div>
            <div>username:{user.username}</div>
        </div>
    )
}

export {SingleUserDetails};