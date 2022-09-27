import {Header} from "../components";
import {Outlet} from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <div><Header/></div>
            <h3>INFO</h3>
            <Outlet/>

        </div>
    );
}

export {MainLayout};