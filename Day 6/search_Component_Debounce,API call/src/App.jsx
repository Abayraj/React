import { useState } from 'react'
import { Search } from './components/Search/Search'
import '../styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Search />
  )
}

export default App
