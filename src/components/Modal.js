// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import CustomButton from './CustomButton';
// import { useState } from 'react';



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomButton from './CustomButton';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form';
const Modaal = ({data,setData}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            city: '',
            phoneNumber: '',
            userName: '',
            website: '',

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required !'),
            email: Yup.string()
                .required('Required !')
                .email('Invalid email address !'),
            city: Yup.string()
                .required('Required !'),
            phoneNumber: Yup.number()
                .required('Required !'),
            userName: Yup.string()
                .required('Required !'),
            website: Yup.string()
                .required('Required !'),
        }),
        onSubmit: 
        values => {
            localStorage.setItem(JSON.stringify(values, null, 2),'values');
             const obj=[...data,{
                id:data.length+1,
                name:values.name,
                email:values.email,
                address:{city:values.city},
                phone:values.phoneNumber,
                username:values.userName,
                website:values.website
            }]
            
            console.log(obj)
            setData(obj)
            setShow(false)
           
          },
          
})
const style={
    color:'red'
}
    return (
        <>
            <CustomButton title='Add new' variant="primary" onClick={handleShow} />


            <Modal scrollable centered show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Member Details</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control id='name' onChange={formik.handleChange} value={formik.values.name} type='text' placeholder="Enter name" />

                    {formik.touched.name && formik.errors.name ? (
                        <Form.Text style={style}>{formik.errors.name} </Form.Text>
                    ) : null}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id='email' type="email" onChange={formik.handleChange} placeholder="Enter email" value={formik.values.email} />

                    {formik.touched.email && formik.errors.email ? (
                        <Form.Text  style={style}>{formik.errors.email}</Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control id='city' onChange={formik.handleChange} value={formik.values.city} type="text" placeholder="Enter city name" />
                    {formik.touched.city && formik.errors.city ? (
                        <Form.Text  style={style}>{formik.errors.city}</Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control id='phoneNumber'onChange={formik.handleChange} value={formik.values.phoneNumber} type="number" placeholder="Enter phone number" />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <Form.Text  style={style}>{formik.errors.phoneNumber}</Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control id='userName' onChange={formik.handleChange} value={formik.values.userName} type="text" placeholder="Enter Username" />
                    {formik.touched.userName && formik.errors.userName ? (
                        <Form.Text  style={style}>{formik.errors.userName}</Form.Text>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Website </Form.Label>
                    <Form.Control id='website' onChange={formik.handleChange} value={formik.values.website} type="text" placeholder="Enter Website name" />
                    {formik.touched.website && formik.errors.website ? (
                        <Form.Text  style={style}  >{formik.errors.website}</Form.Text>
                    ) : null}
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
           
                </Form>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={formik.handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Modaal;