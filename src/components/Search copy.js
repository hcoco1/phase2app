import React from 'react';
import './Search.css';
import { useForm } from 'react-hook-form';

export default function Search({ onFormSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit( onFormSubmit )}>
      <select {...register("prices")}>
        <option value="All">All</option>
        <option value="300000">300000</option>
        <option value="450000">450000</option>
        <option value="600000">600000</option>
      </select>
      <select {...register("types")}>
        <option value="Apartment">Apartment</option>
        <option value="Condo">Condo</option>
        <option value="Farm">Farm</option>
        <option value="Land">Land</option>
        <option value="Townhome">Townhome</option>
        <option value="House">House</option>
      </select>
      <select {...register("operations")}>
        <option value="sale">sale</option>
        <option value="rent">rent</option>
      </select>
       <input type="submit" className='submitBtn'/>
          </form>
    
  );
}