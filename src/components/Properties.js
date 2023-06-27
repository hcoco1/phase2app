import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FcSearch, FcDepartment } from "react-icons/fc";



function Properties() {
  return (
    <>
      <div className="productsNav container">
        <Link className="linkproperties" to="/properties/list"><FcSearch /> List </Link>
        <Link className="linkproperties" to="/properties/add"> <FcDepartment /> New Property </Link>
      </div>
      <Outlet />
    </>

  );
}

export default Properties;