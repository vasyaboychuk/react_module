import {Header} from "../../components/header/Header";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {MainLayout};