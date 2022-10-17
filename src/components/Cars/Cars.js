import {Car} from "../Car/Car";

function Cars({cars}) {
    return (
        <div>
            {cars.map(car=><Car car={car} key={car.id}/>)}
        </div>
    )
}

export {Cars};