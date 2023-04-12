import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Action
export const fetchTodos = createAsyncThunk('fetchTodos',() => {
    const response= axios.get("https://jsonplaceholder.typicode.com/todos/").then((response) => response.data)
    return response;
})

export const CounterSlice = createSlice({
    name: 'ApiCall',
    initialState:{
        isLoading: false,
        data:null,
        isError:false,
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchTodos.pending,(state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchTodos.fulfilled,(state, action) =>{
            state.isLoading = false
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected,(state, action) =>{
            console.log("error", action.payload)
            state.isError=true
        })
    }
})

export default CounterSlice.reducer