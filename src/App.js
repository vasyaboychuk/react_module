
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CommentPage, PostsPage, SingleUserPage, UsersPage} from "./pages";

function App() {
    return (
        <div >
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>


                </Route>
            </Routes>

        </div>
    );
}

export default App;
