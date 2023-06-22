import React from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterHome from './FooterHome';
import './AddProperty.css';

export default function AddProperty() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Container fluid>
      <Row className="roomfac">
        <Col>
        <h2 className='filterFormh2'>Add  Your Apartment, Hotel, Holiday Home or B&B</h2>
        <hr className="style1" />

          <form className='myform' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Address" {...register("Address", { required: true, max: 80, min: 3, maxLength: 80 })} />
            <input type="text" placeholder="City" {...register("City", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="State" {...register("State", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="number" placeholder="Zip code" {...register("Zip code", { required: true, maxLength: 12 })} />
            <input type="number" placeholder="Listing Price" {...register("Listing Price", {})} />
            <input type="number" placeholder="Bedrooms" {...register("Bedrooms", {})} />
            <input type="number" placeholder="Bathrooms" {...register("Bathrooms", {})} />
            <input type="number" placeholder="Square feet" {...register("Square feet", {})} />
            <input type="datetime" placeholder="Listing date" {...register("Listing date", {})} />
            <select {...register("Property Type")} className="agentForm">
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Farm">Farm</option>
              <option value="Land">Land</option>
              <option value="Townhome">Townhome</option>
              <option value="House">House</option>
            </select>
            <input type="url" placeholder="URL Image" {...register("image", {})} />
            <select {...register("Operation Type")} className="agentForm">
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </select>

            <input type="submit" />
            <input
        style={{ display: "block", marginTop: 2 }}
        type="reset"
        value="Standard Reset Field Values"
      />
          </form>
          <FooterHome/>
        </Col>
      </Row>
    </Container>

  );
}

