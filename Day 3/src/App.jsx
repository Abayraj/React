import { useState, useEffect } from 'react'
import './App.css'
import { fetchData } from '../api';
import { Usern } from '../components/userName';



function App() {
  const [count, setCount] = useState(0);
  const [user, setUserList] = useState([]);
  const [userName, setUserName] = useState(['welcome back abay']);
  const [toggle, setToggle] = useState(false);

  const onIncrement = () => {
    (count < 10) ? setCount(curr => curr + 1) : alert("Increment is limited upto 10");
  };
  const onDecrement = () => {
    (count > 0) ? setCount(curr => curr - 1) : alert('Negative vlaue is not possible')
  };

  //create a function insde useEffect
  //create a function outside useEffect
  //IIFE

  // useEffect(()=>{
  //   console.log("inside use effect");
  //   fetch("http://jsonplaceholder.typicode.com/todos")
  //   .then((response)=> response.json())
  //   .then((json)=> setUserList(json));
  // },[count])

  // useEffect(()=>{
  //   const FetchData = async()=>{
  //     const data = await fetch("http://jsonplaceholder.typicode.com/todos");
  //     const json = await data.json();
  //     setUserList(json);

  //   };
  //   FetchData();
  // },[]);


  //using fetch calling
  //using axios
  useEffect(() => {
    (async () => {
      const data = await fetchData();
      // console.log(data , '===Response data');
      setUserList(data);
    })()
  }, []);

  const toggleSwitch = () => {
    setToggle((prev) => !prev);
     
    //   if(prev===true){
    //     return false
    //   }

    //   return false


    // })

  }

  return (
    <>
      <div className='App'>
        <h1>count{count}</h1>
        {/* {count >=5? <Usern userName={userName}    />:<Usern userName={"no user count not above 5"}/>} */}
        {count >= 5 && <Usern userName={userName} />}

        <button onClick={onIncrement}>increment btn</button>
        <button onClick={onDecrement}>decrement btn</button>
        <p>{toggle ? "On" : "Off"}</p>
        <button onClick={toggleSwitch}>Toggle</button>
        {user.map((data, index) => (
          //we need to give this key prop to make more perfomance when we update or remove from array  
          //so if we push to one array react will not render complete array from starting it will only update 
          //which portion is updated and render it  
          //we can give key={index} or usually we give a id that get from api call thats a uniqe id so key={data.id}
          //this not seen in javascript this concept is react specific
          <div key={data.id}>{data.title}</div>
        ))}
      </div>

    </>
  )
}

export default App;
