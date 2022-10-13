import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validator/car.validator";
import {carActions} from "../../redux";
import {useEffect} from "react";



function  CarForm() {

    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({resolver:joiResolver(carValidator), mode:'all'})

    const dispatch = useDispatch();

    const {carForUpdate} = useSelector(state => state.carReducer);


    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)

        }
    }, [carForUpdate,setValue]);

    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.createCar({car: data}))
        }

        reset();


    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            {errors.model&&<h3>{errors.model.message}</h3>}
            <input type={'number'} placeholder={'year'} {...register('year')}/>
            {errors.year&&<h3>{errors.year.message}</h3>}
            <input type={'number'} placeholder={'price'} {...register('price')}/>
            {errors.price&&<h3>{errors.price.message}</h3>}
            <button disabled={!isValid}>{carForUpdate?'update':'create'}</button>
        </form>
    )
}

export {CarForm};