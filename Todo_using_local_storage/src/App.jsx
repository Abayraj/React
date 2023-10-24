import { useState } from 'react'
import './App.css'
import Todoinput from './components/input/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Todoinput/>

   
    </>
  )
}

export default App
 