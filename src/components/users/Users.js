import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {usersService} from "../../services";
import {LOAD_USERS} from "../../redux/actions/actions";
import {User} from "../user/User";
import css from './Users.module.css';

function Users() {

    const {users} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        usersService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}));
    },[])

    return (
        <div className={css.Users}>
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
}

export {Users};