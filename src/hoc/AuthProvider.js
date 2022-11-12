import {createContext, useState} from "react";

const authContext = createContext(null);
function AuthProvider({children}) {
    const [user,setUser] = useState(null);

    const logIn=(newUser,cb)=>{
        setUser(newUser);
        cb()
    }
    const logOut=(cb)=>{
        setUser(null);
        cb()
    }
    const value={user,logIn,logOut}
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider,authContext};