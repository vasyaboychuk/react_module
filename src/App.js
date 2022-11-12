
import './App.css';
import {FunctionComponent} from "./components/FunctionalComponent";
import {useState} from "react";

function App() {

  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <div>
        {flag && <FunctionComponent name={'Max'}/>}
        <button onClick={() => setFlag(prev => !prev)}>Hide</button>
      </div>
    </div>
  );
}

export default App;
