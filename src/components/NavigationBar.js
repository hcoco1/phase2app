import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  return (
    <Container>
      <Row>
        <Col>
          <nav>
            <Link className="linkNav" to="/"> Home </Link>
            <Link className="linkNav" to="properties/list"> Properties </Link>
            <Link className="linkNav" to="contact"> News & Contact </Link>
          </nav>
        </Col>
      </Row>

    </Container>


  )
}
export default NavigationBar