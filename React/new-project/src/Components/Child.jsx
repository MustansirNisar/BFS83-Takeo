import React from 'react'

function Child({name, id, course}) {
  return (
    <div>
      <h1>This is the child component:</h1>
      <h3>Name: {name}</h3>
      <h3>Id: {id}</h3>
      <h3>Course: {course}</h3>
      <Aother />
    </div>
  )
}

export default Child
