import {useContext} from "react";
import {MyContext} from "../../index";

function AboutPage(props) {
    const context = useContext(MyContext);
    return (
        <div>
            {/*<h1>{JSON.stringify(context)}</h1>*/}
            <h1>{context.name}</h1>
            <h1>{context.age}</h1>
            {context.post && <p>{JSON.stringify(context.post)}</p>}
        </div>
    );
}

export {AboutPage};