
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Cards({ address, city, state, zip_code, listing_price, bedrooms, bathrooms, square_feet, listing_date, image, property_type, operation_type, likes, Property_details, amenities }) {
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    For {operation_type} <strong>{property_type}</strong>
                </Card.Text>
                <Card.Title> ${listing_price} </Card.Title>
                <Card.Text>
                    <strong>{bathrooms}</strong> bath <strong>{bedrooms}</strong> bed <strong>{square_feet}</strong> sqft
                </Card.Text>
                <Card.Text>
                    {address},{city},  {state} {zip_code}
                </Card.Text>
                


            </Card.Body>
        </Card>
    )
}
export default Cards;