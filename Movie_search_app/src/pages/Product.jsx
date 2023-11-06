import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Product = () => {

  //hook to get params
  const params = useParams();
    //to get query paramas
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("companyName"))
   const location = useLocation();
   console.log(location,"==state")


  return (
    <div>
      {params.id ? (
      <h1>this is a single page</h1>):
      (<h1>this is a multi page</h1>)}
    </div>
  );
};

export default Product;
