import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import calculatorReducer from "../features/calculator/calculatorSlice";
import postReducer from "../features/posts/postSlice";
import countReducer from "../features/count/countSlice";

const store = configureStore({
    reducer:{
        counter : counterReducer,
        calculator : calculatorReducer,
        post : postReducer,

        count : countReducer
    }
})

export default store;