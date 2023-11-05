import { useState,useRef } from 'react'


import { Textinputs } from "./components/inputs/inputs"
import { userHandleChange } from './hooks/useHandleChange';

function App() {
  // This is for handling any number of inputs fields
  // The key should match the name attribute of the html
  // const [fields, setFields] = useState({
  //   firstName: "",
  //   email:""
  // });
  

  //useRef 
  const inputRef = useRef(null);
  const counterRef = useRef(0);


  const [errorFields, setErrorFields] = useState({
    firstName: false,

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value,"===vlaue")
    if (isFormValidOnSubmit(event)) {
      console.log("Valid");
      alert("Submitted");
      return;
    }

    console.log("InValid");
  }; 

  // This is for handling any number of inputs fields 
  //we can creat this using coustom hook  hook will use to reuse the method or logic
  // const handleChange = (event) => {
  //   setFields((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
 
  // };

  //custom hook
  const {state:fields,handleChange:customHandelChange} = userHandleChange({
    firstName:"",
    email:"",
  });

  const handleChange =  (event) =>{
    customHandelChange(event)

  };
 


  //   Solution 1
  //   const isFormValid = () => {
  //     if (fields.firstName === "") {
  //       setErrorFields((prev) => ({
  //         ...prev,
  //         firstName: true,
  //       }));
  //       return false;
  //     } else {
  //       setErrorFields((prev) => ({
  //         ...prev,
  //         firstName: false,
  //       }));
  //       return true;
  //     }
  //   };

  //   Solution 2
  const isFormValidOnSubmit = (event) => {
    const errors = {
      firstName: false,
      // email: false,
      // gender: false,
      // country: false,
    }
   

    if (fields.firstName === "") {
      errors.firstName = true;
    }

    setErrorFields(errors);

    if (Object.values(errors).some((err) => err === true)) {
      return false;
    }

    return true;


  };
console.log(fields.email)
  // const isFormValidOnBlur = (event) => {
  //   const { name, value } = event.target;
  //   let error = false;

  //   if (name === "firstName" && value === "") {
  //     error = true;
  //   } 

  // setErrorFields((prev) => ({
  //   ...prev,
  //   [name]: error,
  // }));
  // };
const incrementCounter = () =>{

  counterRef.current++;
  console.log(counterRef);

  //useRef  will not re render but if we do the same with state it will re render when the dom change

}


  return (
  <>
 
  <input type="text" ref={inputRef} />
  {/* {it will able to focus the input box we can use useRef for doing dom related things } */}
  <button onClick={()=> console.log(inputRef.current.focus())}> show ref</button>
  <button onClick={incrementCounter}>counter increament</button>
    

      <form onSubmit={handleSubmit} className='input-section'>
        <Textinputs
          errorFileds={errorFields}
          lable="firstName"
          id="name"
          name="firstName"
          type="text"
          email="email"
          handelchange={handleChange}
          />

        <button type='submit'>submit</button>



      </form>


    </>
  )
}

export default App;
