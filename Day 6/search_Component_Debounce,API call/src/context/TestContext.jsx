import { createContext } from "react";

export const TestContext = createContext()


export const TestContextprovider = ({children}) =>{
    const message = "you are proper age to watch films"
  return(  <TestContext.Provider value={{message}}>{children}</TestContext.Provider>)

}