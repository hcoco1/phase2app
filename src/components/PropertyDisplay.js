import React from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { Button } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewBtn from './ViewBtn';
import FooterHome from "./FooterHome";



function PropertyDisplay({ properties, onhandleDeletedProperty, property }) {
    const { id } = useParams();
    const history = useNavigate();


    function handleDeleteClick() {
        // Call onDeleteItem, passing the deleted item
        fetch(`https://phase2-db.onrender.com/properties/${property.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onhandleDeletedProperty(property.id));
        history('/properties/list');

    }


    return (
        <Container>
            <hr className="style1" />
            <h4>Let's take a closer look of this {properties[id - 1]?.property_type}</h4>
            <hr className="style1" />
            <Row>
                <Col lg>

                    <div className="roomfac">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={properties[id - 1]?.image} />
                        <Card.Body>
                            <Card.Text>
                                For {properties[id - 1].operation_type} <strong>{properties[id - 1]?.property_type}</strong>
                            </Card.Text>
                            <Card.Title> ${properties[id - 1]?.listing_price} </Card.Title>
                            <Card.Text>
                                <strong>{properties[id - 1].bathrooms}</strong> bath <strong>{properties[id - 1].bedrooms}</strong> bed <strong>{properties[id - 1].square_feet}</strong> sqft
                            </Card.Text>
                            <Card.Text>
                                {properties[id - 1]?.address},{properties[id - 1].city},  {properties[id - 1].state} {properties[id - 1].zip_code}
                            </Card.Text>
                            <ViewBtn properties={properties} />
                            <Button negative compact onClick={handleDeleteClick}>Delete</Button>{' '}
                            <Link to="/properties/list">
                                <Button compact floated='right'>
                                    <FcSearch />List
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    
                      </div>
                </Col><FooterHome />
            </Row>
        </Container>
    );
}

export default PropertyDisplay;







