import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name : "count",
    initialState : {count : 0},
    reducers : {
        increment : (state)=>{
            state.count = state.count + 1
        },
        decrement : (state)=>{
            state.count = state.count - 1
        },
        reset : (state)=>{
            state.count = 0
        },
        incrementByThree : (state, action)=>{
            state.count = state.count + action.payload
        }
    }
})

export const {increment, decrement, reset, incrementByThree} = countSlice.actions;
export default countSlice.reducer;