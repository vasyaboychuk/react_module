import {useDispatch, useSelector} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux";

function Car({car}) {
    const{id,model,year,price}=car
    const dispatch=useDispatch()



    const deleteCar=()=>{
        dispatch(carActions.deleteById(id))
    }


    return (
        <div className={css.Car}>
            <div>


                <div>id:{id}</div>
                <div>model: {model}</div>
                <div>year: {year}</div>
                <div>price: {price}</div>
            </div>
            <div>

                <button onClick={deleteCar}>delete</button>
                <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            </div>

        </div>
    );
}

export {Car};