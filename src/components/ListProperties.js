
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyCards from "./PropertyCards";
import FooterHome from './FooterHome';
import DropdownFilter from './DropdownFilter';

function ListProperties({ properties, onUpdate }) {
    //useState DropdownFilter component
    const [price, setPrice] = useState('All');
    const [type, setType] = useState('All');
    const [operation, setOperation] = useState('All');
    //Reset filter to all values using state
    const resetForm = () => {
        setPrice('All')
        setType('All')
        setOperation('All')
    }

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

    // Filter the data based on selected options
    const filteredProperties = properties.filter((property) => {
        const priceCondition = price === 'All' || (price === '300000' && property.listing_price < 300000) || (price === '450000' && property.listing_price > 450000) || (price === '600000' && property.listing_price > 600000);
        const typeCondition = type === 'All' || property.property_type === type;
        const operationCondition = operation === 'All' || property.operation_type === operation;
        return priceCondition && typeCondition && operationCondition;
    });
    return (
        <Container>
            <Row>
                <Col lg>
                    <hr className="stylehr" />
                    <div className="cardContainer">
                        <h6> <strong>Filter by:</strong></h6>
                        <DropdownFilter
                            filteredProperties={filteredProperties}
                            resetForm={resetForm}
                            handlePrice={handlePrice}
                            price={price}
                            handleType={handleType}
                            type={type}
                            handleOperation={handleOperation}
                            operation={operation}
                        />
                        <hr className="stylehr" />
                        {filteredProperties.map((property) => {
                            return (
                                <div
                                    key={property.id}
                                >
                                    <PropertyCards
                                        key={property.id}
                                        onUpdate={onUpdate}//handleCurrentProperty(App)
                                        id={property.id}
                                        property={property}
                                        address={property.address}
                                        city={property.city}
                                        state={property.state}
                                        zip_code={property.zip_code}
                                        listing_price={property.listing_price}
                                        bedrooms={property.bedrooms}
                                        bathrooms={property.bathrooms}
                                        square_feet={property.square_feet}
                                        listing_date={property.listing_date}
                                        image={property.image}
                                        property_type={property.property_type}
                                        operation_type={property.operation_type}
                                    />{" "}
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