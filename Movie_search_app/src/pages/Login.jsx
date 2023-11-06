import React, { useContext } from 'react'
import { AuthContext, useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const {login,auth} = useAuth();
  console.log(auth,"===auth - login")
  return (
    <div>
      <h2>Login page</h2>
      <button className='btn' onClick={()=>{login();
      navigate(-1);
      }}>Login</button>
    </div>
  )
}

export default Login;
