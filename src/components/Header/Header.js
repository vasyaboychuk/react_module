import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();
    return (
        <div>
          <div className={css.header}>
              <NavLink to={'/home'}>Home</NavLink>
              <NavLink to={'/users'}>Users</NavLink>
              <NavLink to={'/posts'}>Posts</NavLink>
              <NavLink to={'/about'}>About</NavLink>
          </div>
            <div>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>
        </div>
    )
}

export {Header};