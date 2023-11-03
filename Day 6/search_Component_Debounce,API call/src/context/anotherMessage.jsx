import { createContext } from "react";

export const AnotherMessage =  createContext();


export const AnotherMessageProvider = ({children})=>{
    const Message = "Enjoy your films with us";
  return (<AnotherMessage.Provider value={{Message}}>{children}</AnotherMessage.Provider>) 
}