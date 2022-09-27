import {useEffect, useState} from "react";
import {postsService} from "../../services";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        postsService.getAll(postId).then(({data}) => setPosts(data));

    },[])
    return (

        <div>
            Posts
        </div>
    )
}

export {Posts};