import { useState } from 'react'


import { Textinputs } from "./components/inputs/inputs"

function App() {
  // This is for handling any number of inputs fields
  // The key should match the name attribute of the html
  const [fields, setFields] = useState({
    firstName: "",
  });
 console

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
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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



  return (
    <>

      <form onSubmit={handleSubmit} className='input-section'>
        <Textinputs
          errorFileds={errorFields}
          lable="firstName"
          id="name"
          name="firstName"
          type="text" 
          value={fields.firstName}
          handelchange={handleChange}
          />

        <button type='submit'>submit</button>



      </form>


    </>
  )
}

export default App
