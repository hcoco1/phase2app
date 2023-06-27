import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function CardModal({properties}) {
    const { id } = useParams();
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
          <h3>${properties[id - 1].listing_price.toLocaleString()}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src="https://picsum.photos/400?random=2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>${properties[id - 1].listing_price.toLocaleString()}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src="https://picsum.photos/400?random=3"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>${properties[id - 1].listing_price.toLocaleString()}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </Card>
      <br />

    </>
  );
}

export default CardModal;