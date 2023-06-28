import { useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardModal from './CardModal';


function ViewBtn({ properties }) {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-view' size="sm" variant="primary" onClick={handleShow}>
        View more images
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
             <strong>{properties[id - 1]?.property_type}</strong> For {properties[id - 1]?.operation_type}  ${properties[id - 1]?.listing_price}
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
          
          <CardModal properties={properties} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ViewBtn;