import React from 'react';

import './User.css'

function User(props) {
    let {user,lift} = props;
    return (
        <div className={'user'}>
            <h3>{user.id} - Name: {user.name}</h3>
            <button onClick={()=> {
                lift(user)

            } }>Choose user</button>

        </div>
    );
}

export default User;