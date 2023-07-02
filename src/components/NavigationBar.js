
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavigationBar() {
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" >
      <Container>
        <Navbar.Brand>
          <Link className="linkNav" to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink id="RouterNavLink" className="linkNav" to="properties/list">Properties</NavLink>
            <NavLink id="RouterNavLink" className="linkNav" to="/contact">Search</NavLink>
            <NavLink id="RouterNavLink" className="linkNav" to="news">Charts</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default NavigationBar






