import {useEffect, useState} from "react";

import UserForm from "../userForm/UserForm";
import User from "../user/User";
import {userService} from "../../services";
import css from './Users.module.css'



function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(({data}) => setUsers(data));

    }, []);




    return (
        <div>
           <div className={`${css.Form}`}><UserForm setUsers={setUsers}/></div>
            <hr/>
           <div className={`${css.Users}`}>{ users.map(user=><User key={user.id} user={user}/>)}</div>

        </div>
    );
}



export default Users;