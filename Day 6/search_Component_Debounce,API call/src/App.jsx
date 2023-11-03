import { useState } from 'react'
import { Search } from './components/Search/Search'
import '../styles/global.css'

function App() {

  //without contex api example this is called prop drilling like it gose down to components it creats a tree and it's hard to manage
  const [auth,setauth] = useState(false);
  const Welcomebtn = () =>{
  setauth(prev=> !prev);
  }

  return (
    <Search auth={auth} Welcomebtn={Welcomebtn}/>
  )
}

export default App;
