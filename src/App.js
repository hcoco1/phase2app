import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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
  const history = useNavigate();
  const { id } = useParams();

  const [properties, setProperties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);//=> check

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


function handleAddProperty(newProperty) {
  setProperties([...properties, newProperty]);
}

function handleDeletedProperty(deleteProperty) {
   console.log("APP component:", deleteProperty);
  const updatedProperties = properties.filter((property) => property.id !== deleteProperty.id);
  setProperties(updatedProperties);
}

const handleArrayUpdate = (filteredProperties) => {//=> check
  //console.log("APP filteredProperties:", filteredProperties);
  const updatedProperties = [...filteredProperties];
 // console.log("APP copiedArray:", copiedArray);
 setProperties(updatedProperties)
  
  }
   return (
    <Container fluid>
<NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/*" element={<Properties properties={properties} />}>
          <Route path="list" element={<ListProperties properties={properties} onUpdate={handleArrayUpdate} filteredProperties={filteredProperties} />} />
          <Route path="add" element={<AddProperty onhandleAddProperty={handleAddProperty} setProperties={setProperties} />} />
          <Route path=":id" element={<PropertyDisplay properties={properties} onhandleDeletedProperty={handleDeletedProperty} />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Container>


  );
}

export default App;
