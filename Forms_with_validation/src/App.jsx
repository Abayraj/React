import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[formData,formDataChange]=useState({
    firstname : "",
    email:"",
    country:"",
    education:"",
    gender:"",


  })
  const handelChange = (event) =>{
    formDataChange(prev=>({
      ...prev,
      [event.target.name]:event.target.value
    }));

    console.log(formData,"==form data")

  }

  const handelSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);

  };

  return (
    <>
    <h1 className='heading'>STUDENT'S REGISTATION FORM 2023</h1>
      <form  onSubmit={handelSubmit}>
    <section className='main-form'>
    <div>
          <label htmlFor="name">Name</label>
          <input className='input-filed' type="text" name='firstname' id='name' onChange={handelChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className='input-filed' type="email" name="email" id="email" onBlur={handelChange} />
        </div>
        <div>
          <label htmlFor="country">Select Country</label>
          <select className='select-country-box'name='country' onChange={handelChange}> 
          <option value="">SELECT</option>
            <option value="UAE">UAE</option>
            <option value="INDIA">INDIA</option>
            <option value="AMERICA">AMERICA</option>
            <option value="RUSSIA">RUSSIA</option>
          </select>
        </div>
        <div className='radio-wrapper'>
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
         </div>
         <button className='submit-btn' type="submit">submit</button>
    </section>
    
      </form>
    </>
  )
}

export default App
