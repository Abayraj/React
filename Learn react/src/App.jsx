import { Fragment, useState, useEffect} from 'react';
import './App.css';
/**props title */
import { Title } from './component/Title';


function App() {
  //usestate called hooks
  //use state gives us two
  //if we use {} curly bracket here for destructring need to use the same name for that two properties that are taking from usestate like what name is given in usestate need to give the same name
  //but using [] array bracket we can use custom names 
  //first name of the state name eg:count
  //The second name is setCount it is used to update  there is re rendering side effect so we cant direct update state or mutate so for updating we have the second arrgument here 
  const [username, setUserName] = useState("Abay media");
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount((prevalue) => prevalue + 1);

  };
  
  useEffect(()=>{
    //api
    //set update
    //language set
    //dark/Light
    setUserName("useEffect");

    
  },[]);
  
  //use effect is like onload in javascript
  //this bracket is called dependency so some time if we do state update if  dont put this bracket it will go to infinity loop 

  const onDecrement = () => {
    setCount((prevalue) => prevalue - 1);
  }

  return (
    <Fragment>
    <div className='App'>
      <h1>count {count}</h1>
      <button onClick={onIncrement}>increment button</button>
      <button onClick={onDecrement}>decrement button</button>

    
      <Title username={username}/>
    </div>
    <div>hello another div</div>
    </Fragment>
    
    //<div></div> so we can't return two element if we need to return two elements we need to wrap in a div or use <Fragment></Fragment> or empty braces<></>

  );
}

export default App;
