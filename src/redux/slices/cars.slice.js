import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";
import {Car} from "../../components";
import {object} from "joi";

const initialState={
    cars:[],
    currentCar: null,
    loading:false,
    error:null

}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.value)
        }
    }
);
const createCar=createAsyncThunk(
    'carSlice/createCar',
    async (car,{rejectedWithValue})=>{
        try {
            const{data}=await carService.create(car)
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)

        }
    }
)
const updateById=createAsyncThunk(
    'car/slice/updateById',
    async ({car,id},{rejectedWithValue})=>{
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e){
            return rejectedWithValue(e.response.data)
        }
    }
)


const carSlice=createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        deleteById:(state,action)=>{
            const index=state.cars.findIndex(car=>car.id===action.payload)
            state.cars.splice(index,1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars = [action.payload, ...state.cars];
            })
            .addCase(updateById.fulfilled,(state,action)=>{
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                Object.assign(state.cars[index],action.payload)
                state.currentCar=null
            })

})
const {reducer: carReducer, actions: {deleteById}} = carSlice;

const carActions={
    deleteById,
    getAll,
    createCar,
    updateById
}
export {carActions, carReducer};