import { useState } from 'react'
import './App.css';

function App() {
  // const [count, setCount] = useState(0)
  // const[formData,formDataChange]=useState({
  //   firstname : "",
  //   email:"",
  //   country:"",
  //   education:"",
  //   gender:"",


  // })
  // const handelChange = (event) =>{
  //   formDataChange(prev=>({
  //     ...prev,
  //     [event.target.name]:event.target.value
  //   }));

  //   console.log(formData,"==form data")

  // }

  // const handelSubmit = (event) =>{
  //   event.preventDefault();
  //   console.log(formData);

  // };
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setcountry] = useState('');

  //states to check the validation error
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');

  //Function to validate the userName

  function validateUserName(userName) {
    let isUserNameValid = true;
    const nameRegex = /^[a-zA-Z0-9]+$/;
    setUserNameError('');
    if (!nameRegex.test(userName)) {
      setUserNameError('username can not contain special characters')
      isUserNameValid = false;
      return isUserNameValid;
    }
    if (userName === "") {
      setUserNameError('username is required');
      isUserNameValid = false;
      return isUserNameValid;

    }
    return isUserNameValid;
  }

  //function  to validate Email

  function validateEmail(email) {
    const emailRegrex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    let isEmailValid = true;
    setEmailError('');
    if (email === "") {
      setEmailError("The Email cannot be blank");
      isEmailValid = false;
      return isEmailValid;
    }
    if (!emailRegrex.test(email)) {
      setEmailError('The Email address is invalid')
      isEmailValid = false;
      return isEmailValid;
    }
    return isEmailValid;

  }

//function to vlaidate the country selection
 
function validateCountry(country){
  setCountryError('');
  let isCountryValid =  true;
  if(country === 'INDIA' || country ==="UAE" || country ==="AMERICA"||country ==='RUSSIA'){
    setCountryError('');

  }
  else{
    isCountryValid = false;
    setCountryError("please choose country")

  }

  return isCountryValid;
}


  function handelsubmit(event) {
    event.preventDefault();

    let NameValid = validateUserName(userName);
    let emailValid =validateEmail(email);
    let countryValid = validateCountry(country);

    if(NameValid && emailValid && countryValid ){
      console.log(`username:${userName}`);
    console.log(`Email:${email}`);
    console.log(`country:${country}`);
    }
    else{
      alert("form data is incorrect")
    }

    
  }

  return (
    //noValidate given to remove html inbuild validation
    <>
      <h1 className='heading'>STUDENT'S REGISTATION FORM 2023</h1>
      <form onSubmit={handelsubmit} noValidate>
        <section className='main-form'>
          <div>
            <label htmlFor="name">Name</label>
            <input className='input-filed' type="text" name='firstname' id='name' onChange={(event) => setUserName(event.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className='input-filed' type="email" name="email" id="email" onBlur={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <label htmlFor="country">Select Country</label>
            <select className='select-country-box' name='country' onChange={(event) => setcountry(event.target.value)}>
              <option value="">SELECT</option>
              <option value="UAE">UAE</option>
              <option value="INDIA">INDIA</option>
              <option value="AMERICA">AMERICA</option>
              <option value="RUSSIA">RUSSIA</option>
            </select>
          </div>
          {/* <div className='radio-wrapper'>
          <label htmlFor="gender">Gender</label>
          <input type='radio' name='gender' id='male' onChange={handelChange}/>
          <label  htmlFor='male'>Male</label>
          <input type='radio' name='gender' id='female' onChange={handelChange}/>
          <label  htmlFor='female'>Female</label>
         </div>
         <div className='check-box-warpper'>
          <label className='check-box-heading'>Education</label>
          <label htmlFor="highersecondary">HigherSecondry</label>
          <input type="checkbox" name='education' id='highersecondary' onChange={handelChange}/>
          <label htmlFor="graduated">graduated</label>
          <input type="checkbox" name='education ' id='graduated' onChange={handelChange}/>
         </div> */}
          <button className='submit-btn' type="submit">submit</button>
        </section>

      </form>
    </>
  )
}

export default App
