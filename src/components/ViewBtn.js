import { useState } from 'react';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardModal from './CardModal';


function ViewBtn({properties}) {
    const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-view' size="sm" variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
           For {properties[id - 1].operation_type} <strong>{properties[id - 1].property_type}</strong>
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