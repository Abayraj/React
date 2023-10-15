import { useRef, useState } from 'react'
import './App.css';

function App() {
  //uncontrolled form are helping in perfomance improvment but don't have much controll over the data it will not re render like controlled way in every change  it soring the data in useref not in state
  //controlled form stores data in state so in every change it will store the data in state and it will cause perfomance issue in large forms

    const userNameRef = useRef();
    const emailRef = useRef();
    const countryRef = useRef();
    const gendeRef = useRef();
    const [checkedSkills,setSkills] = useState([]);//For storing multiple values

  

  

  //states to check the validation error
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [genderError,setgenderError] = useState('');
  const [skillsError,setSkillsError] = useState('');  

//uncontrolled form validation

//Function to validate skills 
 
 const handelChange = (event) =>{
  const {value,checked} = event.target
  if(checked){
    setSkills(prev=>[...prev,value])
  }
  else{
    setSkills(prev =>(
      
      [...prev.filter(skills=>skills!==value)]
      // so the value contains the unchecked value and it checks with the array copy if array copy is eqaul to the value it will not return that value in filter ; 
     
    ));
  };

};
function validateSkills(checkedSkills) {
  let isSkillsValid = false;
  setSkillsError('');

  // Check if the array contains any of the specified skills
  if (checkedSkills.includes("javascript") || checkedSkills.includes("python") || checkedSkills.includes("c++")) {
    isSkillsValid = true;
  } else {
    setSkillsError("Please select valid skills");
  }

  console.log(isSkillsValid, "is skills valid");
  return isSkillsValid;
}

  //Function to check gender 
    function validateGender(gender){
      let isgenderValid = true;
      setgenderError('');
  if(gender ==="male"|| gender ==="female"){
    setgenderError("");
    
    return isgenderValid;
  }else{
    setgenderError('please select your gender');
    isgenderValid=false;
    return isgenderValid;
  }
  
}
  //Function to validate the userName

  function validateUserName(userName) {
    let isUserNameValid = true;
    const nameRegex = /^[a-zA-Z0-9]+$/;
    setUserNameError('');
    if (userName === "") {
      setUserNameError('username is required');
      isUserNameValid = false;
      return isUserNameValid;
    }

    if (!nameRegex.test(userName)) {
      setUserNameError('username can not contain special characters')
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
      setEmailError('The Email address is invalid');
      isEmailValid = false;
      return isEmailValid;
    }
    return isEmailValid;

  }

  //function to vlaidate the country selection

  function validateCountry(country) {
    setCountryError('');
    let isCountryValid = true;
    if (country === 'INDIA' || country === "UAE" || country === "AMERICA" || country === 'RUSSIA') {
      setCountryError('');

    }
    else {
      isCountryValid = false;
      setCountryError("please choose country")

    }

    return isCountryValid;
  }


  function handelsubmit(event) {
    event.preventDefault();

    let NameValid = validateUserName(userNameRef.current.value);
    let emailValid = validateEmail(emailRef.current.value);
    let countryValid = validateCountry(countryRef.current.value);
    let genderValid = validateGender(gendeRef.current.value);
    let SkillsValid = validateSkills(checkedSkills);

  
    

    if (NameValid && emailValid && countryValid && genderValid && SkillsValid) {
      console.log(`username:${userNameRef.current.value}`);
      console.log(`Email:${emailRef.current.value}`);
      console.log(`country:${countryRef.current.value}`);
      console.log(`gender${gendeRef.current.value}`);
      console.log(`skills${checkedSkills}`)
    
    }
    else {
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
            <input className='input-filed' type="text" name='firstname' id='name' ref={userNameRef}/>
          </div>
          {userNameError && <p className='error'>{userNameError}</p>}
          <div>
            <label htmlFor="email">Email</label>
            <input className='input-filed' type="email" name="email" id="email" ref={emailRef} />
          </div>
          {emailError && <p className='error'>{emailError}</p>}
          <div>
            <label htmlFor="country">Select Country</label>
            <select className='select-country-box' name='country' ref={countryRef}>
              <option value="">SELECT</option>
              <option value="UAE">UAE</option>
              <option value="INDIA">INDIA</option>
              <option value="AMERICA">AMERICA</option>
              <option value="RUSSIA">RUSSIA</option>
            </select>
          </div>
          {countryError && <p className='error'>{countryError}</p>}
          <div className='radio-wrapper'>
          <label htmlFor="gender">Gender</label>
          <input type='radio' name='gender' id='male' value={"male"} ref={gendeRef}/>
          <label  htmlFor='male'>Male</label>
          <input type='radio' name='gender' id='female' value={"female"} ref={gendeRef}/>
          <label  htmlFor='female'>Female</label>
         </div>
         {genderError && <p className='error'>{genderError}</p>}
         <div className='check-box-warpper'>
          <label className='check-box-heading'>Skills</label>
          <label htmlFor="Python">Python</label>
          <input type="checkbox" name='Skills' id='Python' value={"python"}   onChange={handelChange}/>
          <label htmlFor="Javascript">Javascript</label>
          <input type="checkbox" name='Skills' id='Javascript'value={"javascript"}  onChange={handelChange}/>
          <label htmlFor="C++">C++</label>
          <input type="checkbox" name='Skills' id='C++'  value={"c++"} onChange={handelChange}/>
         </div>
         {skillsError && <p className='error'>{skillsError}</p>}
        
          <button className='submit-btn' type="submit">submit</button>
        </section>
      </form>
    </>
  )
}



export default App;
