
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from "react-router-dom";
import { FcSearch, FcDepartment } from "react-icons/fc";



function Properties() {
  return (
    <Container>
      <Row>
        <Col lg>
          <hr className="stylehr" />
          <div className="propertiesNav  container" >
            <Link className="linkproperties" to="/properties/list"><FcSearch /> List </Link>
            <Link className="linkproperties" to="/properties/add"> <FcDepartment /> New Property </Link>
            
          </div>
          <Outlet />
        </Col>


      </Row>

    </Container>

  );
}

export default Properties;