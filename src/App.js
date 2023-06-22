import { Link, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Home from "./components/Home";
import Properties from './components/Properties'

import AddProperty from "./components/AddProperty";
import PropertyDisplay from "./components/PropertyDisplay";
import ListProperties from "./components/ListProperties";
import Spinner from 'react-bootstrap/Spinner';

export function App() {
  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);



  useEffect(() => {
    fetch("https://phase2-db.onrender.com/properties")
      .then((response) => response.json())
      .then((properties) => {
        setProperties(properties);
        setIsLoaded(true);

      });
  }, []);
  if (!isLoaded) return <h6 className="loadinmessage"><Spinner animation="border" /> Loading...Because this App is using a free web service as a database, there will
    be a delay in the response to the first request after a period of inactivity
    while the instance spins up.</h6>

  return (
    <Container>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="products/list"> Properties </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="products" element={<Properties properties={properties} />}>
          <Route path="list" element={<ListProperties properties={properties} />} />
          <Route path="add" element={<AddProperty properties={properties} />} />
          <Route path=":id" element={<PropertyDisplay properties={properties} />} />
        </Route>
      </Routes>
    </Container>


  );
}

export default App;
