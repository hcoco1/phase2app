import Card from 'react-bootstrap/Card';
import { Button } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";



function PropertyCards({
    onUpdate,
    property,
    address,
    city,
    state,
    zip_code,
    listing_price,
    bedrooms,
    bathrooms,
    square_feet,
    image,
    property_type,
    operation_type
}) {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    For {operation_type} <strong>{property_type}</strong>
                </Card.Text>
                <Card.Title> ${listing_price.toLocaleString()} </Card.Title>
                <Card.Text>
                    <strong>{bathrooms}</strong> bath <strong>{bedrooms}</strong> bed <strong>{square_feet}</strong> sqft
                </Card.Text>
                <Card.Text>
                    {address},{city},  {state} {zip_code}
                </Card.Text>
                <Button compact color='olive' onClick={() => {
                    onUpdate(property)
                    navigate(`/properties/${property.id}`);
                }} >View</Button>{' '}
            </Card.Body>
        </Card>
    )
}
export default PropertyCards;




