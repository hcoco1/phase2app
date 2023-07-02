
import React from "react";
import CarouselHome from "./CarouselHome";
import FooterHome from "./FooterHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SegmentHome from "./SegmentHome";


function Home() {

  return (
    <Container>
      <Row>
        <Col lg>
          <div className="home">
            <hr className="stylehr" />
            <h3 className="styleh3">Let’s find a home for you</h3>
            <hr className="stylehr" />
            <CarouselHome />
            <SegmentHome />
            <FooterHome />
          </div>
        </Col>
      </Row>
    </Container>


  );
}

export default Home;