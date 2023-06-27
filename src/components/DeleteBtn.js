import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import Properties from './Properties';


function DeleteBtn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();



  return (
    <>
      <Button className='btn-delete' size="sm" variant="primary" onClick={handleShow}>
       Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> Delete a property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Important: This property, and all the reporting views in the property, will be permanently deleted!</p>
            </Modal.Body>
            <Modal.Footer>
           <Button variant="danger" onClick={handleClose}>
          Understood
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteBtn;