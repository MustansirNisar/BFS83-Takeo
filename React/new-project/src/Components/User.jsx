import React from 'react'

function User({name="Unknown User"}) {
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default User
