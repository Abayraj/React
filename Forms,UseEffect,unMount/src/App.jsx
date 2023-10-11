import { useState, Fragment } from 'react'
import './App.css'
import { Title } from './Title';
// const [name,changeName] = useState("abay");
function App() {
  const [toggle, setToggle] = useState(true);

  const [firstName,setFirstName] = useState("")
  const [fileds,setFileds] = useState({//For Taking multiple input value this is the way to do it
    firstName:"",
    email:"",
    gender:"",
    country:""
  })
  // console.log(firstName,"==first name")
 
  const handleSubmit = (event)=> {
    event.preventDefault();// page will not refresh when  submited
    //api call
    //then firstName => API
    // console.log(firstName,'==submited name')
    console.log(fileds)


  };

  //setting values to the state on every change. but only sent the data to api when the button pressed
  const handelChange = (event) =>{ //event attribute is used to track the events that happens in forms ect...
    // setFirstName(event.target.value);
    setFileds(prev=>({
    ...prev,//need to not miss out previous value so we used spread operator to make a copy so if we insert new value it will replace with new value
    [event.target.name]:event.target.value

    }));
  };
  console.log(fileds,"==fileds")
  return (
    <Fragment>
      {/* {toggle && <Title/>}
      <button onClick={()=> setToggle((prev)=>!prev)}>Toggle</button> */
        <form onSubmit={handleSubmit}>
          <div>
            {/*htmlFor is used to target the input filed if we click on it, need to match with the id given in input tag*/}
          <label htmlFor='firstName'>First Name</label>
          <input type='text' name='firstName' id='firstName' onChange={handelChange}/>
          </div>
          <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email'  onChange={handelChange}/>  
          </div>
         <div>
         <label>Gender</label>
          <input type='radio' name='gender' value="male" id='male'  onChange={handelChange}/>
          <label  htmlFor='male'>Male</label>
          {/* if need to select multiple radio button need  to give differnt name in name filed here name filed have same name because we only need to select one gender */}
          <input type='radio' name='gender' value="female" id='female' onChange={handelChange}/>
          <label  htmlFor='female'>Female</label>
         </div>
         <div>
         <label htmlFor="">Country</label>
          <select name='country'   onChange={handelChange}>
            <option value="">Select</option>
            <option value="UAE">UAE</option>
            <option value="india">INDIA</option>
          </select>
         </div>
        
        
       
          <button type="submit">submit</button>
        </form>
      }
    </Fragment>
  )
}

export default App;
