import {Link} from "react-router-dom";
import {Route,Routes} from "react-router-dom";

import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";


function App() {
    return (
        <div>
            <div>

                <h3><Link to={'/'}>HOME PAGE</Link></h3>
                <h3><Link to={'/todos'}>TODOS</Link></h3>
                <h3><Link to={'/albums'}>ALBUMS</Link></h3>
                <h3><Link to={'/comments'}>COMMENTS</Link></h3>
            </div>
            <div>
                <Routes>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                    <Route path={'/posts/:id'} element={<Posts/>}/>

                </Routes>
            </div>

        </div>
    );
}

export default App;
