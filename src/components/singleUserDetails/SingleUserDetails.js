import css from './SingleUserDetails.module.css';
import {useNavigate} from "react-router-dom";

function SingleUserDetails({user}) {
    const navigate=useNavigate()
    return (
        <div className={css.SingleUserDetails}>
            <div>id:{user.id}</div>
            <div>name:{user.name}</div>
            <div>username:{user.username}</div>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export {SingleUserDetails};