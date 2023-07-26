
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavigationBar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "none",
    color: "var(--bs-teal)"
  }
  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" >
      <Container>
        <Navbar.Brand>
          <NavLink className="linkNav" style={({ isActive }) => isActive ? activeStyles : null} to="/">Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavLink
              id="RouterNavLink"
              className="linkNav"
              style={({ isActive }) => isActive ? activeStyles : null}
              
              to="properties/list"
            >
              Properties
            </NavLink>

            <NavLink id="RouterNavLink" className="linkNav" style={({ isActive }) => isActive ? activeStyles : null} to="/search">Search</NavLink>
            <NavLink id="RouterNavLink" className="linkNav" style={({ isActive }) => isActive ? activeStyles : null} to="charts">Charts</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default NavigationBar






