import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import About from './pages/About'
import Product from './pages/Product';
import Login from './pages/Login';
import ProtectedRoute from './components/protectedRoute';
import { useAuth } from './context/authContext';
import Error from './components/Error';



function App() {

  const {auth} = useAuth();
  console.log(auth,"use auth from app")


  return  ( 
    <>
    
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
        </Routes>
        </Router> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='*' element={<Error/>}/>

          {/* {protocted route logic need to wrap it inside Route tag it will verfiy what happening inside protectedRoute then only
          go to inside Route wrapped elements
          } */}
          <Route element={<ProtectedRoute />}>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          </Route>
     
       
        </Routes>
  
    </>

  )
    
  
}

export default App
