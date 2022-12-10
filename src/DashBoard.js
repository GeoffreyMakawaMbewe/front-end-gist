import React from 'react'

const DashBoard = ({user}) => {
    const {name, email} = user;
  return (
    <div>
        <h1>Logged In Users</h1>
        <h1>{name}</h1>
        <h1>{email}</h1>
    </div>
  )
}

export default DashBoard
