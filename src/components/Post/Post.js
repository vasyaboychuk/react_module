import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../../index";

function Post({post}) {
    const{id,title}=post
    const context = useContext(MyContext);
    const navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(`${id}`,{state:{...post}})}>Post Details</button>
            <button onClick={()=>context.post=post}>save</button>
        </div>
    )
}

export {Post};