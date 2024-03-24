import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer:{
        counter : counterReducer,
        calculator : calculatorReducer,
        post : postReducer
    }
})

export default store;