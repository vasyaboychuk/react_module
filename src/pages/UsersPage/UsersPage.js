import {Button} from "../../components/Button/Button";

function UsersPage(props) {
    const show=()=>{
        console.log('show');
    }
    return (
        <div>
            <Button onClick={()=>show()}>my text</Button>
        </div>
    )
}

export {UsersPage};