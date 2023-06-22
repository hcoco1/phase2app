import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FcSearch, FcDepartment } from "react-icons/fc";



function Properties() {
  return (
    <>
      <div>
        <div className="productsNav container">
          <Link className="linkproperties" to="/products/list"><FcSearch/> Properties </Link>
          <Link className="linkproperties" to="/products/add"> <FcDepartment/> New Property </Link>
        </div>
   


      </div>

      <Outlet />
    </>

  );
}

export default Properties;