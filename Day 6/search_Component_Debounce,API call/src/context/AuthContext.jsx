import { createContext, useState } from "react";

export const AuthContext = createContext();

//provider creation
// {
// The children prop is provided by React, and it contains all the components and content that were nested within AuthProvider. 
// The children prop is then passed as the content to the AuthContext.Provider. This allows you to wrap other components and provide them with the context you've defined.
// In summary, the children prop is automatically populated by React with the content placed inside the component's 
// tags when you use it in your JSX code, and it represents the children of that component.
// }
export const AuthProvider = ({children}) =>{
    //state mangement
    const [userName,setuserName] = useState(false);
    const ToggleuserName = () =>{
        setuserName((prev) => !prev)
    } 
    return <AuthContext.Provider value={{userName,ToggleuserName}}>{children}</AuthContext.Provider>
}


{/* <Model name="abay"> //giving div or any tag's to component example 
//if its a props  it is the same way
    <div>
        hey
    </div>

</Model>
//we can call like this and acess it 
const Model =({childern,name}) =>{
    {childern}
} */}