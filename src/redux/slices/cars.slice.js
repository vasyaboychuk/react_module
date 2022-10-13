import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";
import {Car} from "../../components";
import {object} from "joi";

const initialState={
    cars:[],
    loading:false,
    error:null,
    carForUpdate: null

}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.value)
        }
    }
);
const createCar=createAsyncThunk(
    'carSlice/createCar',
    async ({car},{rejectWithValue})=>{
        try {
            const{data}=await carService.create(car)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)

        }
    }
)
const updateById=createAsyncThunk(
    'carSlice/updateById',
    async ({car,id},{rejectWithValue})=>{
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)


const carSlice=createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        deleteById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload)
            state.cars.splice(index, 1)
        },
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(updateById.fulfilled,(state,action)=>{
               const findCar= state.cars.find(value=>value.id===action.payload.id )
                Object.assign(findCar,action.payload)
            })

})
const {reducer: carReducer, actions: {deleteById,setCarForUpdate}} = carSlice;

const carActions={
    deleteById,
    getAll,
    createCar,
    updateById,
    setCarForUpdate
}

export {carActions, carReducer};