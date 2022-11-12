import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {AboutPage, HomePage, NotFondPage, PostDetailsPage, PostsPage, UsersPage} from "./pages";
import {Login} from "./components/Login/Login";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={
                    <RequireAuth>
                        <PostsPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Route>
            <Route path={'*'} element={<NotFondPage/>}/>
        </Routes>
    );
}

export default App;
