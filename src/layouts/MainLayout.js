import {Header} from "../components";
import {Outlet} from "react-router-dom";

function MainLayout(props) {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {MainLayout};