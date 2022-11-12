import {Outlet} from "react-router-dom";

function PostsPage(props) {
    return (
        <div>
            <PostsPage/>
            <hr/>
            <Outlet/>
        </div>
    )
}

export {PostsPage};