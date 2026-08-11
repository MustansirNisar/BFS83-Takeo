import React from 'react'

function Coder({info:{name,id,age}}) {

  return (
    <div style={{color:"brown", width:"300px", backgroundColor:"aqua", marginBottom:"10px", border:"2px solid black", textAlign:"center"}}>

    {/* <h2>Name: {info.name}</h2>
    <h2>id: {info.id}</h2>
    <h2>age: {info.age}</h2> */}
    <h2>Name: {name}</h2>
    <h2>Id: {id}</h2>
    <h2>Age: {age}</h2>




      {/* <h2>This is the coder component</h2> */}
      {/* <h3>Coder1: {props.fNames[0]}</h3>
      <h3>Coder2: {props.fNames[1]}</h3>
      <h3>Coder3: {props.fNames[3]}</h3> */}
      {/* <h3>Coder1: {fNames[0]}</h3>
      <h3>Coder2: {fNames[1]}</h3> */}
      {/* <h3>Coder1: {coder1}</h3>
      <h3>Coder2: {coder2}</h3> */}


    </div>
  )
}

export default Coder
