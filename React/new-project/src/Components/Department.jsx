import React, { useContext } from 'react'
import Student from './Student'
import { courseContext } from './DataContext'

function Department() {
    let course = useContext(courseContext)
  return (
    <div style={{backgroundColor:"chocolate", border:"2px solid black", textAlign:"center", padding:"10px"}}>
      <h1>Department</h1>
     <h2 style={{color: 'aqua'}}>Course: {course}</h2>
      <Student/>
    </div>
  )
}

export default Department
