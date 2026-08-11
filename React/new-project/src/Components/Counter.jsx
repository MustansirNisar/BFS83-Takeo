import React, { useState } from 'react'

function Counter() {
    let[count, setCount] = useState(0)
    // let[dec, setDec] = useState(100)
    let update = ()=>{
        setCount(count+1)
    }
    let decrement = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={update}>Update</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      {/* <h2>Count: {dec}</h2>
      <button onClick={()=>setDec(dec-1)}>Decrement</button> */}
    </div>
  )
}

export default Counter
