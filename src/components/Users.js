import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';


const Users = () => {
    const [data, setData] = useState([])
    const [mode, setMode] = useState('online')
    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then((response) => {
            response.json().then((results) => {
                console.warn(results, 'results');
                setData(results);
                localStorage.setItem('users', JSON.stringify(results));
            })
        }).catch(error => {
            let collection = localStorage.getItem('users');
            setData(JSON.parse(collection));
            setMode('offline')

            // alert('Catch Block')
        }
        )
    }, [])
    return (

        <Container>
            {(mode === 'offline' ? <div class="alert alert-warning" role="alert">
                You Are in OFFline Mode or something Wrong with the Connection
            </div> : null)}

            <Table style={{ fontSize: 10, textAlign: 'center', }} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
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
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </Container>
    )
}

export default Users
