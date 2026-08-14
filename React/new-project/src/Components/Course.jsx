import React, { useContext } from 'react'
import {courseContext} from './DataContext'

function Course() {
    let course = useContext(courseContext)
  return (
    <div style={{backgroundColor:"brown", border:"2px solid black", textAlign:"center", padding:"10px"}}>
      <h1>Course</h1>
      <h3 style={{color:"aqua"}}>Course: {course}</h3>
    </div>
  )
}

export default Course
