// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import CustomButton from './CustomButton';
// import { useState } from 'react';



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomButton from './CustomButton';
import DataForm from './DataForm';
const Modaal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CustomButton title='Add new' variant="primary" onClick={handleShow} />


            <Modal scrollable centered show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Member Details</Modal.Title>
                </Modal.Header>
                <Modal.Body><DataForm /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Modaal;