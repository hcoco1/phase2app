import React from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DeleteBtn from './DeleteBtn';
import ViewBtn from './ViewBtn';
import FooterHome from "./FooterHome";


function PropertyDisplay({ properties }) {
    const { id } = useParams();
    return (
        <div className="roomfac">
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={properties[id - 1].image}  />
                <Card.Body>
                    <Card.Text>
                        For {properties[id - 1].operation_type} <strong>{properties[id - 1].property_type}</strong>
                    </Card.Text>
                    <Card.Title> ${properties[id - 1].listing_price} </Card.Title>
                    <Card.Text>
                        <strong>{properties[id - 1].bathrooms}</strong> bath <strong>{properties[id - 1].bedrooms}</strong> bed <strong>{properties[id - 1].square_feet}</strong> sqft
                    </Card.Text>
                    <Card.Text>
                        {properties[id - 1].address},{properties[id - 1].city},  {properties[id - 1].state} {properties[id - 1].zip_code}
                    </Card.Text>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-0" aria-label="First group">
                            <ViewBtn properties={properties} />
                        </ButtonGroup>
                        <ButtonGroup className="me-0" aria-label="Second group">
                            <DeleteBtn properties={properties} />
                        </ButtonGroup>
                    </ButtonToolbar>
                </Card.Body>
            </Card>
            <FooterHome/>
        </div>
    );
}

export default PropertyDisplay;







