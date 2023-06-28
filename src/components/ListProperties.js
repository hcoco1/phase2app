import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyCards from "./PropertyCards";
import FooterHome from './FooterHome';
import Search from './Search';

function ListProperties({ properties, onUpdate }) {
    const [price, setPrice] = useState('All');
    const [type, setType] = useState('All');
    const [operation, setOperation] = useState('All');

    const handlePrice = (e) => {
         console.log(e);
        setPrice(e)
    }

    const handleType = (e) => {
        // console.log(e);
        setType(e)
    }

    const handleOperation = (e) => {
        //console.log(e);
        setOperation(e)
    }


    const filteredProperties = properties.filter((property) => {
        if (
            (price === "All" || property.listing_price < parseInt(price)) &&
            (type === "All" || property.property_type === type) &&
            (operation === "All" || (operation === "sale" && property.operation_type === "Sale") || (operation === "rent" && property.operation_type === "Rent"))
        ) {
            return true;
        }
        return false;
    });


    //console.log("ListProperties filteredProperties:", filteredProperties)

    return (
        <Container>
            <Row>
                <Col>
                    <div className="roomfac">
                        <hr className="style1" />

                        <h5>Found <strong>{filteredProperties.length}</strong> matching properties</h5>
                        <hr className="style1" />
                        <h6> <strong>Filter by:</strong></h6>
                        <Search handlePrice={handlePrice} price={price} handleType={handleType} type={type} handleOperation={handleOperation} operation={operation} />


                        <hr className="style1" />
                        {filteredProperties.map((property) => {
                            return (
                                <div
                                    key={property.id}

                                >
                                    <PropertyCards key={property.id} onUpdate={onUpdate} id={property.id} property={property} address={property.address} city={property.city} state={property.state} zip_code={property.zip_code} listing_price={property.listing_price} bedrooms={property.bedrooms} bathrooms={property.bathrooms} square_feet={property.square_feet} listing_date={property.listing_date} image={property.image} property_type={property.property_type} operation_type={property.operation_type} />{" "}
                                </div>
                            );
                        })}

                    </div>
                    <>
                        <FooterHome />
                    </>
                </Col>
            </Row>
        </Container>
    );
}
export default ListProperties;