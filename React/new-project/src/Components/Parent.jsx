import React from 'react'
import Child from './Child'

function Parent({name, id, course}) {
    // console.log(props)
  return (
    <div>
      <h1>This is the parent Component</h1>
      {/* <h4>Name: {props.name}</h4>
      <h4>Id: {props.id}</h4> */}
      {/* <h4>Name: {name}</h4>
      <h4>id: {id}</h4>
      <h4>course: {course}</h4> */}
      <Child name={name} id={id} course={course}/>
    </div>
  )
}

export default Parent
