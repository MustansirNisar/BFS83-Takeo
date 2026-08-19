import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Action'

function Ctr() {
    let count = useSelector((state)=>state.count)
    let dispatch = useDispatch()
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Ctr
