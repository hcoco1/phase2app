import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PropertyCards from "./PropertyCards";
import Filter from "./Filter";

function ListProperties({ properties }) {

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


        <div className="roomfac">
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
                        <PropertyCards key={property.id} address={property.address} city={property.city} state={property.state} zip_code={property.zip_code} listing_price={property.listing_price} bedrooms={property.bedrooms} bathrooms={property.bathrooms} square_feet={property.square_feet} listing_date={property.listing_date} image={property.image} property_type={property.property_type} operation_type={property.operation_type} />{" "}
                    </div>
                );
            })}
        </div>
    );
}
export default ListProperties;