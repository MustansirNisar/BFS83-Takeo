import React, { useEffect } from 'react'

function Effect({count}) {
    // function greet(){
    //     console.log("Hey, Hello, Welcome")
    // }
    // useEffect(()=>{
    // greet();

    // },[count])
    useEffect(()=>{
        console.log("Executed When the Component is being Created(Mounting Phase)")
    },[])
     useEffect(()=>{
        console.log("Executed When the Component is being Updated(Updating Phase)")
    },[count])
    useEffect(()=>{
        return ()=>{
           console.log("Executed at the time of removal(Unmounting Phase)") 
        }
    },[])
  return (
    <div>
      <h1>This is the Effect component</h1>
    </div>
  )
}

export default Effect
