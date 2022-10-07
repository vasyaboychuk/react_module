import {Link, NavLink} from "react-router-dom";

import css from './Header.module.css';

function Header() {
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'/posts'}>POSTS</NavLink>
            <NavLink to={'/comments'}>COMMENTS</NavLink>
            <NavLink to={'/users'}>USERS</NavLink>
        </div>

    )
}

export {Header};