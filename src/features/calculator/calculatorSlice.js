import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name : "calculator",
    initialState : {count : 1},
    reducers : {
        increment : (state)=>{
            state.count = state.count + 2
        }, 
        decrement : (state)=>{
            state.count = state.count - 2
        },
        reset : (state)=>{
            state.count = 0
        },
        incrementByFour : (state, action)=>{
            state.count = state.count + action.payload
        }
    }
})

export const {increment, decrement, reset, incrementByFour} = calculatorSlice.actions;
export default calculatorSlice.reducer;