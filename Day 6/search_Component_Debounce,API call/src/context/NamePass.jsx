import { createContext } from "react";

export const NamePass  =  createContext();


export const NamePassProvider = ({children}) => {
    const name = "Abay";
   return (<NamePass.Provider value={{name}}>{children}</NamePass.Provider>)

}