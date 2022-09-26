

function Todo({todo}) {
    const {id, title, completed} = todo;

    return (
        <div>

            <h3>id: {id} </h3>
            <h3>title: {title}</h3>
            <h3>status: {completed}</h3>

        </div>
    );
}

export default Todo;