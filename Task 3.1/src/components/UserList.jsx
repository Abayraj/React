import React from 'react'
import "./UserList";

export default function UserList({ users,setUsers}) {

  // console.log(setUsers, "==setusers");

const handleClick = (id) =>{
  console.log("handelcliked called")
  setUsers(prev=>(prev.filter(user=> user.id!=id )))
  
};
  

  return (
    <>
      <div className='user-list-container'>
        <h1>All users</h1>
        {users.map(data => (
          <div key={data.id}>
             <span>{data.firstName}</span>
             <button onClick={()=>(handleClick(data.id))}>delete</button>
          </div>
        ))}
        <div>
        </div>
      </div>

    </>

  )
  
}
