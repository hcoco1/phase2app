import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import Modal from 'react-bootstrap/Modal';
import CardModal from './CardModal';

function ViewBtn({ properties }) {
  const mystyle = {
    color: "white",
    padding: "5px",
    fontFamily: "Arial",
    textAlign:'center',
  };
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Button positive compact onClick={handleShow}>
        Images
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h4 style={mystyle}><strong>{properties[id - 1]?.property_type}</strong> For {properties[id - 1]?.operation_type}  ${properties[id - 1]?.listing_price}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardModal properties={properties} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>


  );
}
export default ViewBtn;