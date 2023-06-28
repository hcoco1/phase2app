import React from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ViewBtn from './ViewBtn';
import FooterHome from "./FooterHome";



function PropertyDisplay({ properties, onhandleDeletedProperty, property }) {

    const { id } = useParams();
    const history = useNavigate();
    console.log(property)

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
            <Row>
                <Col>

                    <div className="roomfac">
                        <hr className="style1" />
                        <h4>Let's take a closer look of this {properties[id - 1]?.property_type}</h4>

                        <hr className="style1" />
                        <Card style={{ width: '35rem' }}>
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
                                <ButtonToolbar aria-label="Toolbar with button groups">
                                    <ButtonGroup className="me-0" aria-label="First group">
                                        <ViewBtn properties={properties} />
                                                                            </ButtonGroup>
                                    <ButtonGroup className="me-1" aria-label="Second group">
                                        <Button className="deleteBtn" variant="primary" onClick={handleDeleteClick}>Delete Property</Button>{' '}
                                    </ButtonGroup>
                                    <ButtonGroup className="me-2" aria-label="Third group">
                                    <Link className="linkproperties1" to="/properties/list"><FcSearch /> List </Link>
                                    </ButtonGroup>

                                </ButtonToolbar>

                            </Card.Body>
                        </Card>
                    </div>
                    <>
                        <FooterHome />
                    </>
                </Col>
            </Row>
        </Container>
    );
}

export default PropertyDisplay;







