import React, { useState } from 'react'

function Skills() {
    let[skill, setSkill] = useState([])
    let getSkill = (event)=>{
        // console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkill([...skill,event.target.value])
        }
        else{
            setSkill(skill.filter((item)=>item!=event.target.value))
        }
    }
  return (
    <div>
      <h2>Select your Skills</h2>
      <label htmlFor="py">Python</label>
      <input type="checkbox" value={"Python"} id='py' onChange={getSkill} />
      <br /><br />
        <label htmlFor="js">JavaScript</label>
      <input type="checkbox"  value={"JavaScript"} id='js' onChange={getSkill} />
      <br /><br />
        <label htmlFor="c">C</label>
      <input type="checkbox"  value={"C"} id='c' onChange={getSkill} />
      <br /><br />
        <label htmlFor="rust">Rust</label>
      <input type="checkbox"  value={"Rust"} id='rust' onChange={getSkill} />
      <br /><br />
      <h2>Skills: {skill.toString()}</h2>
    </div>
  )
}

export default Skills
