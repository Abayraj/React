import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h2>about page</h2>
        <button className='btn' onClick={()=>navigate("/product")}>Go to product</button>
        <button className='btn' onClick={()=>navigate("/product/123")}>Go to product with id</button>
        <button className='btn' onClick={()=>navigate("/product?companyName=Sema/")}>Go to product with query params</button>
        {/* { we can sent sensitive information like this if we use id or query pharams it will show in the browser } */}
        <button className='btn' onClick={()=>navigate("/product/123",{
          state:{
            age:"21",
            obj:{
              name:"debug"

            },
          },
        })}>Go to product with state</button>
    </div>
  )
}

export default About;
