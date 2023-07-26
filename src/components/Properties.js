
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
    color: "var(--bs-teal)"
  }
  return (
    <Container>
      <Row>
        <Col lg>
          <hr className="stylehr" />
          <div className="propertiesNav  container" >
            <NavLink 
            className="linkNav"  
            style={({ isActive }) => isActive ? activeStyles : null} 
            end 
            to="list"><FcSearch /> List </NavLink>

            <NavLink 
            className="linkNav"   
            style={({ isActive }) => isActive ? activeStyles : null} 
            to="add"> New Property </NavLink>
            
          </div>
          <Outlet />
        </Col>


      </Row>

    </Container>

  );
}

export default Properties;