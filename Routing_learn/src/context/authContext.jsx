import { createContext, useContext, useState } from "react";

export const  AuthContext = createContext();

export const  AuthProvider = ({children}) =>{
    const [auth,setAuth] =  useState(false);
    const login = ()=>{
        setAuth(true)
    }

    return <AuthContext.Provider value={{auth,login}}>{children}</AuthContext.Provider>

};

//coustom hook for reusing and easy to maintain
export const useAuth = () =>{
    return useContext(AuthContext);
};