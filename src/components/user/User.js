import css from './User.module.css'

function User({user}) {
    const{id,name,username,email}=user
    return (
        <div>
            <div className={`${css.User}`}>
                <h2>id:{id} - name:{name}</h2>
                <h3>username:{username}, email:{email}</h3>

            </div>



        </div>
    );
}

export default User;