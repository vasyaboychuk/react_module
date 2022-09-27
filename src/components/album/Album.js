function Album({album}) {
    const {id, title} = album;

    return (
        <div>
            <div>id: {id}</div>
            <div>{title}</div>
        </div>
    )
}

export {Album};