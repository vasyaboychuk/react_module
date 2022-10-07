import {Link, useNavigate} from "react-router-dom";

import css from './User.module.css';



function User({user}) {
    const navigate=useNavigate()
    return (
        <div className={css.User}>
            <div><strong>Id:</strong> {user.id}</div>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Username:</strong>  {user.username}</div>
            <div><strong>Email:</strong> {user.email}</div>
            {/*<span><Link to={user.id.toString()}>Single User</Link></span>*/}
            <button onClick={()=>{
                navigate(user.id.toString())
            }}>Details</button>
        </div>
    )
}

export {User};