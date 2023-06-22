import React from "react";
import { Link, Outlet } from "react-router-dom";


function Properties() {
  return (
    <>
        <div>
      <div className="productsNav container">

        <Link to="/products/list"> Properties </Link>
       <Link to="/products/add"> Add a new Property </Link>
        
        

        
      </div>
      <h2 className='filterFormh2'>List and sell your property for free</h2>
      <hr className="style1" />

      
    </div>
   
    <Outlet />
    </>

  );
}

export default Properties;