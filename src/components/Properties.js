
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { NavLink, Outlet } from "react-router-dom";
import { FcSearch, FcDepartment } from "react-icons/fc";



function Properties() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "var(--bs-primary)"
  }
  return (
    <Container>
      <Row>
        <Col lg>
          <hr className="stylehr" />
          <div className="propertiesNav  container" >
            <NavLink className="linkproperties" className="linkNav" style={({ isActive }) => isActive ? activeStyles : null} end to="/properties/list"><FcSearch /> List </NavLink>
            <NavLink className="linkproperties"  className="linkNav" style={({ isActive }) => isActive ? activeStyles : null} to="/properties/add"> <FcDepartment /> New Property </NavLink>
            
          </div>
          <Outlet />
        </Col>


      </Row>

    </Container>

  );
}

export default Properties;