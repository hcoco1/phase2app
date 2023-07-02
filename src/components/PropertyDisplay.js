import React from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { Button } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card';
import ViewBtn from './ViewBtn';
import Footer from "./Footer";



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
        <>
            <div className="displayCard">
                <hr className="stylehr" />
                <h4 >Let's take a closer look of this {properties[id - 1]?.property_type}</h4>
                <hr className="stylehr" />
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={properties[id - 1]?.image} />
                    <Card.Body>
                        <Card.Text>
                            For {properties[id - 1]?.operation_type} <strong>{properties[id - 1]?.property_type}</strong>
                        </Card.Text>
                        <Card.Title> ${properties[id - 1]?.listing_price} </Card.Title>
                        <Card.Text>
                            <strong>{properties[id - 1]?.bathrooms}</strong> bath <strong>{properties[id - 1]?.bedrooms}</strong> bed <strong>{properties[id - 1]?.square_feet}</strong> sqft
                        </Card.Text>
                        <Card.Text>
                            {properties[id - 1]?.address},{properties[id - 1]?.city},  {properties[id - 1]?.state} {properties[id - 1]?.zip_code}
                        </Card.Text>
                        <>
                            <ViewBtn properties={properties} />
                            <Button negative compact  onClick={handleDeleteClick}>Delete</Button>{' '}
                            <Link to="/properties/list"><Button compact floated='right'><FcSearch />List</Button></Link>
                        </>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>


    );
}

export default PropertyDisplay;







