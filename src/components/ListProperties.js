import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropertyCards from "./PropertyCards";
import Filter from "./Filter";
import FooterHome from './FooterHome';


function ListProperties({ properties, setProperties }) {

    const navigate = useNavigate();
    const [priceCategory, setPriceCategory] = useState("All");
    const [typeCategory, setTypeCategory] = useState("All");
    const [operationCategory, setOperationCategory] = useState("All");

    const handlePriceChange = (value) => {
        setPriceCategory(value);
    };

    const handleTypeChange = (value) => {
        setTypeCategory(value);
    };

    const handleOperationChange = (value) => {
        setOperationCategory(value);
    };

    function handleDeleteItem(deletedItem) {
        const updatedItems = properties.filter((item) => item.id !== deletedItem.id);
        setProperties(updatedItems);
      }





    // Filter the property list based on the selected price category, type category, and operation category
    const filteredProperties = properties.filter((property) => {
        if (
            (priceCategory === "All" || property.listing_price < parseInt(priceCategory)) &&
            (typeCategory === "All" || property.property_type === typeCategory) &&
            (operationCategory === "All" || (operationCategory === "1" && property.operation_type === "Sale") || (operationCategory === "2" && property.operation_type === "Rent"))
        ) {
            return true;
        }
        return false;
    });










    console.log(filteredProperties.length);
    return (
        <Container>
            <Row>
                <Col>
                    <div className="roomfac">
                        <h2 className='filterFormh2'>Discover your perfect home</h2>
                        <hr className="style1" />
                        <Filter
                            priceCategory={priceCategory}
                            onPriceCategoryChange={handlePriceChange}
                            typeCategory={typeCategory}
                            onTypeCategoryChange={handleTypeChange}
                            operationCategory={operationCategory}
                            onOperationCategoryChange={handleOperationChange}
                            filteredProperties={filteredProperties}
                        />
                        {properties.map((property) => {
                            return (
                                <div
                                    key={property.id}
                                    onClick={() => {
                                        navigate(`/products/${property.id}`);
                                    }}
                                >
                                    <PropertyCards property={property} onDeleteItem={handleDeleteItem} key={property.id} address={property.address} city={property.city} state={property.state} zip_code={property.zip_code} listing_price={property.listing_price} bedrooms={property.bedrooms} bathrooms={property.bathrooms} square_feet={property.square_feet} listing_date={property.listing_date} image={property.image} property_type={property.property_type} operation_type={property.operation_type} />{" "}
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