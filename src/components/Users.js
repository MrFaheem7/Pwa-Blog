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
                const result=response.data
                // const obj1=[...result,{
                //     id:11,
                //     name:'values.name',
                //     email:"values.email",
                //     address:{city:"values.city"},
                //     phone:"values.phoneNumber",
                //     username:"values.userName",
                //     website:"values.website"
                // }]
                
                setData(result)
            
            })
            
            .catch((error) => {
                console.error(error, "err");
            })
    }
    useEffect(() => {
        getUser();
    }, []);
  
    return (
        <>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container   >
                    <Row>

                        <h1>DATA TABLE</h1>
                    </Row>


                    <Row>
                        <Table style={{ textAlign: 'inherit', fontSize: 10, }} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Phone Number</th>
                                    <th>Username</th>
                                    <th>Website</th>
                                    <th><Modaal setData={setData} data={data}  /></th>

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

                                            <td><div class="dropdown ms-auto">
                            <i class="fas fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul class="dropdown-menu">
                              <li>
                                <span class="dropdown-item">
                                  <i class="fas fa-pen mx-2"></i> Update
                                </span>
                              </li>
                              <li>
                                <span class="dropdown-item">
                                    <i class="fas fa-trash mx-2"></i> Delete
                                </span>
                              </li>
                            </ul>
                        </div></td>
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
