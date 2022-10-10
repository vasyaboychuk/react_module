import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

function User({user}) {
const{id,name,email}=user
    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>get from api</button>
            <button onClick={()=>dispatch(userActions.deleteById(id))}>delete</button>
        </div>
    );
}

export {User};