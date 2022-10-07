import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {usersService} from "../../services";
import {LOAD_SINGLE_USER} from "../../redux/actions/actions";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";
import css from './SingleUserComponent.module.css';

function SingleUserComponent() {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch({type:LOAD_SINGLE_USER,payload:+id})
    },[id])


    return (
        <div className={css.SingleUser}>
            {
                user&&<SingleUserDetails user={user}/>
            }

        </div>
    );
}

export {SingleUserComponent};