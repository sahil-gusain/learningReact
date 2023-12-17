import React,{useContext} from 'react'
import UserContext from '../context/userContext';

function User() {
    const {user} = useContext(UserContext);
  return (
    
    <>
       <div>Welcome {user.username}</div>
    </>
  )
}

export default User;