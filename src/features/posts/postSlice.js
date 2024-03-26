import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    return res.data;
})

const postSlice = createSlice({
    name : "post",
    initialState : {
        isLoading : false,
        posts : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.error = null,
            state.posts = action.payload
        });
        builder.addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.error.message,
            state.posts = []
        })
    }
})

export default postSlice.reducer;