import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByFour, reset } from './calculatorSlice'

const CalculatorView = () => {
    const calculator = useSelector((state)=>state.calculator.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count : {calculator}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        <button onClick={()=>dispatch(incrementByFour(40))}>IncrementByFour</button>
    </div>
  )
}

export default CalculatorView