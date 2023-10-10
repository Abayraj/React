import { useState ,Fragment} from 'react'
import './App.css'
import { Title } from './Title';
// const [name,changeName] = useState("abay");
function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <Fragment>
      {toggle && <Title/>}
      <button onClick={()=> setToggle((prev)=>!prev)}>Toggle</button>
    </Fragment>
  )
}

export default App;
