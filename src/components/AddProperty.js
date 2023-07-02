import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function AddProperty({ onhandleAddProperty }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    fetch(`https://phase2-db.onrender.com/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((r) => r.json())
    .then((property) => {
      onhandleAddProperty(property);
      navigate(`/properties/${property.id}`);
    })
    .catch((error) => {
      console.error('Error adding property:', error);
    });
    

  }
  console.log(errors);
  return (
    <Container>
      <Row>
        <Col lg>
          <hr className="stylehr" />
          <h3 className="styleh3">Let's Add a New Property</h3>
          <hr className="stylehr" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Address" {...register("address", { required: true })} />
            <input type="text" placeholder="City" {...register("city", { required: true })} />
            <input type="text" placeholder="State" {...register("state", { required: true, maxLength: 80 })} />
            <input type="number" placeholder="Zip code" {...register("zip_code", { required: true })} />
            <input type="number" placeholder="Listing Price" {...register("listing_price", { maxLength: 12 })} />
            <input type="number" placeholder="Bedrooms" {...register("bedrooms", { maxLength: 12 })} />
            <input type="number" placeholder="Bathrooms" {...register("bathrooms", { maxLength: 12 })} />
            <input type="number" placeholder="Square feet" {...register("square_feet", { maxLength: 12 })} />
            <select {...register("property_type")}>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Farm">Farm</option>
              <option value="Land">Land</option>
              <option value="Townhome">Townhome</option>
              <option value="House">House</option>
            </select>
            <input type="url" placeholder="URL Image" {...register("image", {})} />
            <select {...register("operation_type")}>
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </select>
            <input type="submit" />
          </form>
          <hr className="stylehr" />
        </Col>
      </Row>
    </Container>
  );
}


