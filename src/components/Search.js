import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Search({resetForm, handlePrice, price, handleType, type, handleOperation, operation }) {
 
  return (
    <>
      <div className='drop-1'>
        <DropdownButton
          className='p-4 text-muted'
          title="Prices"
          id="dropdown-menu-align-left"
          variant="primary"
          size="sm"
          onSelect={handlePrice}
        >
          <Dropdown.Item eventKey="All">All Prices</Dropdown.Item>
          <Dropdown.Item eventKey="300000">- than $300K</Dropdown.Item>
          <Dropdown.Item eventKey="450000">+ than $450K</Dropdown.Item>
          <Dropdown.Item eventKey="600000">+ than $600K</Dropdown.Item>

        </DropdownButton>
        <p> <strong> {price} $</strong> </p>
      </div>

      <div className='drop-2'>

        <DropdownButton
          className='p-4 text-muted'
          title="Type"
          id="dropdown-menu-align-center"
          variant="primary"
          size="sm"
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
        <p> <strong>{type}</strong> </p>
      </div>

      <div className='drop-3'>
        <DropdownButton

          className='p-4 text-muted'
          title="Operation"
          id="dropdown-menu-align-right"
          variant="primary"
          size="sm"
          onSelect={handleOperation}
        >
          <Dropdown.Item eventKey="All">All Operations</Dropdown.Item>
          <Dropdown.Item eventKey="Sale">Sale</Dropdown.Item>
          <Dropdown.Item eventKey="Rent">Rent</Dropdown.Item>

        </DropdownButton>
        <p> <strong> {operation}</strong> </p>
      </div>
      <input className='resetBtn' type="button" value="Get All Properties" onClick={() => resetForm()}/>
      
    </>

  );
}

export default Search;