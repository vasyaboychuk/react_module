import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const initialState={
    posts: [],
    currentPost:null,
    loading:false,
    error:null,
    postFromApi:null
}
const getAll=createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try {
            const {data} = await postsService.getAll();
            return data
        }catch (e){
            return rejectedWithValue(e.response.data)

        }
    }
)
const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id},{rejectedWithValue})=>{
        try{
            const{data}=await postsService.getById(id)
            return data

        }catch (e){
          return  rejectedWithValue(e.response.data)

        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setCurrentPost:(state,action)=>{
            state.currentPost=action.payload
        },
        deleteById:(state,action)=>{
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loadin = true
            })
            .addCase(getById.fulfilled,(state,action)=>{
                state.postFromApi=action.payload
            })
});
const {reducer: postReducer,actions:{setCurrentPost,deleteById}} = postSlice;

const postActions={
    getAll,
    setCurrentPost,
    deleteById,
    getById
}
export {
    postReducer,
    postActions
}