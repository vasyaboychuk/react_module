function Todo({todo}) {
    const{id,title,completed}=todo

    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Status: {completed}</div>
        </div>
    )
}

export {Todo};