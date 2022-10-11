

import {Header, Posts, Users} from "./components";

function App() {
  return (
      <div className="App">
        <Header/>
        <div>
            <h2>Users</h2>
          <Users/>
            <hr/>
            <h2>Posts</h2>
          <Posts/>
        </div>

      </div>
  );
}

export default App;
