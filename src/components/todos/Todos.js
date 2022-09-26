import React, {useEffect, useState} from 'react';
import {apiService} from "../../services";
import Todo from "../todo/Todo";

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        apiService.getTodos().then(value => setTodos(value.data))
    }, []);

    return (
        <div>
            {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}

        </div>
    );
}

export default Todos;