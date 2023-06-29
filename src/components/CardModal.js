import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function CardModal() {

  return (
    <>
      <Card>
        <Carousel className='viewBtn'>
          <Carousel.Item>
            <img
              className="d-block w-200"
              src="https://picsum.photos/400?random=1"
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-200"
              src="https://picsum.photos/400?random=2"
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

    </>
  );
}
export default CardModal;