
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

function CardModal({ properties }) {
  const mystyle = {
    color: "white",
    padding: "5px",
    fontFamily: "Arial",
    textAlign: 'center',
  };
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <Col lg>
          <Card>
            <Carousel className='viewBtn'>
              <Carousel.Item>
                <img
                  className="d-block w-200"
                  src="https://unsplash.it/640/425?random"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h4
                    style={mystyle}>
                    <strong>{properties[id - 1]?.property_type}</strong>
                    For {properties[id - 1]?.operation_type}
                    ${properties[id - 1]?.listing_price}
                  </h4>
                </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-200"
                  src="https://unsplash.it/640/425?random"
                  alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-200"
                  src="https://picsum.photos/400?random=3"
                  alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>


  );
}
export default CardModal;