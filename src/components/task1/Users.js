import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/user.axios.service";
import User from "./User";
import './Users.css'


export function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);


    const lift=(obj)=>{
        setUser(obj)
    }


    useEffect(()=>{
        getUsersAxios()
            .then(value=>setUsers(value.data))
    },[]);

    return (<div className={'block'}>
        <hr/>
        {user && <div className={'info'}>
                        <h2>id: {user.id} Name: {user.name}</h2>
                        <p>Username: {user.username}.   Email: {user.email}</p>
        </div>}
        <hr/>
        <div className={'users'}>{users.map(user => <User user={user} key={user.id} lift={lift}/>)}</div>

    </div>);
}

