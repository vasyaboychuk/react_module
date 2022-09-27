import { NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to={'/'}>HOME PAGE</NavLink>
            <NavLink to={'/todos'}>TODOS PAGE</NavLink>
            <NavLink to={'/albums'}>ALBUMS PAGE</NavLink>
            <NavLink to={'/comments'}>COMMENTS PAGE</NavLink>
        </div>
    );
}

export {Header};