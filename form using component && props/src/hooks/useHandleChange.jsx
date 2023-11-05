import { useState } from "react";
//custom hooks
export const userHandleChange= (initial) =>{
  console.log(initial,"value")
    const [state, setState] = useState(initial);


    const handleChange = (event) => {
        setState((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
     
      };

      return{
        state,
        handleChange

      };
     
}