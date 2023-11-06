import React, { useContext } from 'react'
import { AuthContext, useAuth } from '../context/authContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
   const {auth} = useAuth();
   console.log(auth,"==auth")
   if(!auth){
    return <Navigate to="/login"/>

   }
//    {consider this outlet as a children like it will have what inside the proteced route if it true it will return protected inside elements that through outlet}
  return <Outlet />;
}

export default ProtectedRoute;
