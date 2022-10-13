import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CarForm} from "../carForm/CarForm";
import {carActions, carReducer} from "../../redux";
import {Car} from "../car/Car";

function Cars() {

    const {cars} = useSelector(state => state.carReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())

    },[])

    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    )
}

export {Cars};