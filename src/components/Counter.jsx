import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const handleCount = () => {
    alert('Count Updated!');
    setCount(count+1);
  }
  return (
    <>
      <div onClick={() => handleCount()}>{counter}</div>

      <button
        onClick={() => dispatch(increment())}
      >Increment</button>
      <button 
        onClick={() => {dispatch(decrement())}}
      >Decrement</button>
    </>
  )
}

export default Counter