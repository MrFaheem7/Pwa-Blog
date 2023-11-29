import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import CustomButton from './CustomButton';

import Modaal from './Modal';


const Users = () => {
    const [data, setData] = useState([])
    const [newdata, setnewData] = useState(null)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    let url = 'https://jsonplaceholder.typicode.com/users';
    const getUser = () => {
        axios.get(url)
            .then((response) => {

                console.log(response);
                const result=response.data
                setData(result)
            
            })
            
            .catch((error) => {
                console.error(error, "err");
            })
    }
    useEffect(() => {
        getUser();
    }, []);
  const deleteArr=(id)=>{
    let arr = data.filter((i)=>i.id!=id)
    setData(arr)
    // let arr = [...data]
    // let index=arr.findIndex((i)=>i.id==id)
    // console.log(index,'index')
    // arr.splice(index,1)
    // setData(arr)
  }
  const updateArr=(id)=>{
   let arr = [...data]
    let index=arr.findIndex((i)=>i.id==id)
    console.log(arr[index])
    setShow(true)
    setnewData(arr[index])  }
    
    return (
        <>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container   >
                    <Row>

                        <h1>DATA TABLE</h1>
                    </Row>


                    <Row>
                        <Table style={{ textAlign: 'inherit', fontSize: 10, }}  striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Phone Number</th>
                                    <th>Username</th>
                                    <th>Website</th>
                                    <th>  <CustomButton title='Add ' variant="primary" onClick={handleShow} /></th>

                                   

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address.city}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.username}</td>
                                            <td>{item.website}</td>

                                            <td><div  className="dropdown ms-auto">
                            <i style={{cursor:'pointer',boxShadow:'0px 0px 10px darkblue'}} className="fas fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul className="dropdown-menu">
                              <li onClick={()=>updateArr(item.id)}>
                                <span className="dropdown-item">
                                  <i className="fas fa-pen mx-2"></i> Update
                                </span>
                              </li>
                              <li onClick={()=>deleteArr(item.id)
                            }>
                                <span className="dropdown-item">
                                    <i className="fas fa-trash mx-2" ></i> Delete
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
            <Modaal  setData={setData} data={data} newdata={newdata} handleClose={handleClose} show={show} setShow={setShow} />
        </>
    )
}

export default Users
