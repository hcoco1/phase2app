
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardModal() {
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