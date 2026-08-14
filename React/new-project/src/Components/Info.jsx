import React from 'react'

function Info({children, color="green"}) {
  return (
    <div style={{backgroundColor:"aquamarine", border:"4px solid black", width:"300px", margin:"10px", textAlign:"center", color:color}}>
      {/* <h1>Info:</h1> */}
        {children}
    </div>
  )
}

export default Info
