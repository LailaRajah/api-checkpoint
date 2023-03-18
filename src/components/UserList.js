import React from 'react'

const UserList = ({user}) => {



  return (
    <div>
    -------------------------------------------------------------------------
  <h1>Name : {user.name}</h1>
  <h3>Email : {user.email}</h3>
  <p>Adresse : {`${user.address.street} , ${user.address.city} , ${user.address.suite}`}</p>
    </div>
  )
}

export default UserList

