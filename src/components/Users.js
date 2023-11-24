import axios from 'axios';
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import CustomButton from './CustomButton';
import Modal from './Modal';
import Modaal from './Modal';


const Users = () => {
    const [data, setData] = useState([])

    let url = 'https://jsonplaceholder.typicode.com/users';
    const getUser = () => {
        axios.get(url)
            .then((response) => {

                console.log(response);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error, "err");
            })
    }
    useEffect(() => {
        getUser();
    }, []);
    console.log('ghfhgh')
    return (
        <>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container  >
                    <Row>

                        <h1>DATA TABLE</h1>
                    </Row>


                    <Row>
                        <Table style={{ textAlign: 'inherit', fontSize: 10 }} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Phone Number</th>
                                    <th>Username</th>
                                    <th>Website</th>
                                    <th><Modaal /></th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address.city}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.username}</td>
                                            <td>{item.website}</td>

                                            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                            </svg></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Users
