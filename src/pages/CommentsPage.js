import {Comments} from "../components";
import {Outlet} from "react-router-dom";

function CommentsPage( ){
    return (
        <div>
            <Outlet/>
            <Comments/>

        </div>
    )
}

export {CommentsPage};