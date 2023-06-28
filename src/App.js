import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";


import "./App.css";
import Container from 'react-bootstrap/Container';
import Home from "./components/Home";
import Properties from './components/Properties'
import AddProperty from "./components/AddProperty";
import PropertyDisplay from "./components/PropertyDisplay";
import ListProperties from "./components/ListProperties";
import Spinner from 'react-bootstrap/Spinner';
import NavigationBar from "./components/NavigationBar";
import { NoMatch } from "./components/NoMatch";


 function App() {
 
  const [currentProperty, setCurrentProperty] = useState({});
  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


   useEffect(() => {
    fetch(`https://phase2-db.onrender.com/properties`)
      .then((response) => response.json())
      .then((properties) => {
        setProperties(properties);
        setIsLoaded(true);

      });
  }, []);
  if (!isLoaded) return <h6 className="loadinmessage"><Spinner animation="border" /> Loading...Because this App is using a free web service as a database, there will
    be a delay in the response to the first request after a period of inactivity
    while the instance spins up.</h6>


function handleAddProperty(property) {
  setProperties([...properties, property]);
}

function handleDeletedProperty() {
   //console.log("APP component:", deleteProperty);
  const updatedProperties = properties.filter((property) => property.id !== currentProperty.id);
  setProperties(updatedProperties);
}

const handleCurrentProperty = (property) => {//=> check
  setCurrentProperty({...property})
  
  }
   return (
    <Container fluid>
<NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/" element={<Properties />}>
          <Route path="list/" element={<ListProperties properties={properties} onUpdate={handleCurrentProperty}  />} />
          <Route path="add" element={<AddProperty  onhandleAddProperty={handleAddProperty} setProperties={setProperties} />} />
          <Route path=":id" element={<PropertyDisplay properties={properties} property={currentProperty} onhandleDeletedProperty={handleDeletedProperty} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Container>


  );
}

export default App;
