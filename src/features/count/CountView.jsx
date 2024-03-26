import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByThree, reset } from './countSlice';

const CountView = () => {
    const count = useSelector((state)=>state.count.count);
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(increment())
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>{
            return dispatch(decrement())
        }}>Decrement</button>
        <button onClick={()=>dispatch(incrementByThree(3))}>IncrementByThree</button>
    </div>
  )
}

export default CountView