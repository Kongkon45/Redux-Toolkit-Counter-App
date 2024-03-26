import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/usersSlice", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=8");
    return res.data;
})

const usersSlice = createSlice({
    name : "users",
    initialState : {
        users : [],
        error : null,
        isLoading : false
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.error = null,
            state.isLoading = false,
            state.users = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.error = action.error.message,
            state.isLoading = false,
            state.users = []
        })
    }
})

export default usersSlice.reducer;