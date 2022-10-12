import {useDispatch, useSelector} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../redux";

function Car({car}) {
    const{id,model,year,price}=car
    const dispatch=useDispatch()
    const {currentCar}=useSelector(state => state.carReducer)

    const deleteCar=()=>{
        dispatch(carActions.deleteById(id))
    }

    const updateCar=()=>{

        if(!currentCar||currentCar.id!==id){
            dispatch(carActions.updateById(car))
    }else{
        dispatch(carActions.updateById(null))
    }}

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
                <button onClick={updateCar}>update</button>
            </div>

        </div>
    );
}

export {Car};