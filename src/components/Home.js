import React from "react";
import CarouselHome from "./CarouselHome";
import FooterHome from "./FooterHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <hr className="style1" />
            <h2 className='filterFormh2'>Let’s find a home that’s perfect for you</h2>
            <hr className="style1" />
            <CarouselHome />
            <FooterHome />
          </div>
        </Col>

      </Row>
    </Container>


  );
}

export default Home;