import {useNavigate} from "react-router-dom";

function Post({post}) {
    const{id,title}=post
    const navigate = useNavigate();
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={()=>navigate(`${id}`,{state:{...post}})}>Post Details</button>
        </div>
    )
}

export {Post};