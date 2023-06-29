import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'semantic-ui-react'


function Search({filteredProperties, resetForm, handlePrice, price, handleType, type, handleOperation, operation }) {

  return (
    <>
     
        <DropdownButton
          className='p-4 text-muted'
          title={price}
          id="dropdown-menu-align-left"
          variant="primary"
          size="md"
          onSelect={handlePrice}
        >
          <Dropdown.Item eventKey="All">All Prices</Dropdown.Item>
          <Dropdown.Item eventKey="300000">- than $300K</Dropdown.Item>
          <Dropdown.Item eventKey="450000">+ than $450K</Dropdown.Item>
          <Dropdown.Item eventKey="600000">+ than $600K</Dropdown.Item>

        </DropdownButton>
         

        <DropdownButton
          className='p-4 text-muted'
          title={type}
          id="dropdown-menu-align-center"
          variant="primary"
          size="md"
          onSelect={handleType}
        >
          <Dropdown.Item eventKey="All">All Types</Dropdown.Item>
          <Dropdown.Item eventKey="Apartment">Apartment</Dropdown.Item>
          <Dropdown.Item eventKey="Condo">Condo</Dropdown.Item>
          <Dropdown.Item eventKey="Farm">Farm</Dropdown.Item>
          <Dropdown.Item eventKey="Land">Land</Dropdown.Item>
          <Dropdown.Item eventKey="Townhome">Townhome</Dropdown.Item>
          <Dropdown.Item eventKey="House">House</Dropdown.Item>
        </DropdownButton>
       
   

     
        <DropdownButton

          className='p-4 text-muted'
          title={operation}
          id="dropdown-menu-align-right"
          variant="primary"
          size="md"
          onSelect={handleOperation}
        >
          <Dropdown.Item eventKey="All">All Operations</Dropdown.Item>
          <Dropdown.Item eventKey="Sale">Sale</Dropdown.Item>
          <Dropdown.Item eventKey="Rent">Rent</Dropdown.Item>

        </DropdownButton>
       
 
      <Button compact onClick={() => resetForm()}>
        Reset values
      </Button>
      <div className='styleh3'>
      <h3 >Found <strong>{filteredProperties.length}</strong> matching properties</h3>
      </div>
      

    </>

  );
}

export default Search;