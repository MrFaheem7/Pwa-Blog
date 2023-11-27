import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const DataForm = () => {
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
                .email('Invalid email address'),
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
        {},
         
       
    })
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control id='name' onChange={formik.handleChange} value={formik.values.name} type='text' placeholder="Enter name" />

                    {formik.touched.name && formik.errors.name ? (
                        <Form.Text className="text-muted">{formik.errors.name} </Form.Text>
                    ) : null}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id='email' type="email" onChange={formik.handleChange} placeholder="Enter email" value={formik.values.email} />

                    {formik.touched.email && formik.errors.email ? (
                        <Form.Text>{formik.errors.email}</Form.Text>
                    ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control id='city' onChange={formik.handleChange} value={formik.values.city} type="text" placeholder="Enter city name" />
                    {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control id='phoneNumber'onChange={formik.handleChange} value={formik.values.phoneNumber} type="number" placeholder="Enter phone number" />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div>{formik.errors.phoneNumber}</div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control id='userName' onChange={formik.handleChange} value={formik.values.userName} type="text" placeholder="Enter Username" />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div>{formik.errors.userName}</div>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Website </Form.Label>
                    <Form.Control id='website' onChange={formik.handleChange} value={formik.values.website} type="text" placeholder="Enter Website name" />
                    {formik.touched.website && formik.errors.website ? (
                        <Form.Text  >{formik.errors.website}</Form.Text>
                    ) : null}
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default DataForm