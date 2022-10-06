
import './App.css';
import {useReducer, useRef} from "react";

const reducer=(state,action)=>{
    const{type,payload}=action
    switch (type) {
        case'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
        case'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
        default:
            return state;

    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const catInput = useRef();

    const dogInput = useRef();

    function createCat() {
        dispatch({type:'addCat',payload:catInput.current.value})
        catInput.current.value=''
    }

    function createDog() {
        dispatch({type:'addDog',payload:dogInput.current.value})
        dogInput.current.value=''
    }

    return (
        <div className="App">
           <div>
               <div className={'cats'}>
                   <div>Cats Name<input type={"text"} ref={catInput}/></div>
                   <button onClick={createCat}>Save</button>
               </div>
               <div className={'dogs'}>
                   <div>Dogs Name<input type={"text"} ref={dogInput}/></div>
                   <button onClick={createDog}>Save</button>
               </div>
           </div>

            <div className={'data'}>
                {state.cats.map(cat=>(<div  className={'cat'} key={cat.id}> {cat.name} <button onClick={()=>dispatch({type:'deleteCat',payload:cat.id})}>Delete cat</button> </div>))}


                {state.dogs.map(dog=>(<div className={'dog'} key={dog.id}> {dog.name} <button onClick={()=>dispatch({type:'deleteDog',payload:dog.id})}>Delete dog</button> </div>))}

            </div>

        </div>
    );
}

export default App;
