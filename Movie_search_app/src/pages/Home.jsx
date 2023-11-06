import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../layout/Container'

const Home = () => {
  //Hook 
  const navigate = useNavigate()
  return (
    <Container>
      <h2>This is home page</h2>
      <button className='btn' onClick={()=>navigate("/about")}>Go to about page</button>
      <button className='btn' onClick={()=>navigate("/login")}>Go to log in page</button>
       {/* <Link to="/about" style={{ padding: 5 }}>
          about
          </Link> */}
    </Container>
  )
}

export default Home;


