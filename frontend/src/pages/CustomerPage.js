import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { IoArrowBackSharp } from "react-icons/io5";

const CustomerPage = () => {
    const { customer_id } = useParams();

    const navigate = useNavigate();

    const navigateToOtherPage = (id) => {
      navigate('/order/'+id);
    };

    const [orders, setOrders] = useState([]);
    const [customer, setCustomer] = useState(null);
    const [count, setCount] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        fetch('http://localhost:8000/api/orders')
            .then(response => response.json())
            .then(data => {setOrders(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }
    , []);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:8000/api/customers/${customer_id}`)
            .then(response => response.json())
            .then(data => {setCustomer(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, [customer_id]);


  return (

    <div>
        <Container > 
            <Button variant="outline-dark" onClick={() => window.history.back()}  ><IoArrowBackSharp /> Back</Button>

            <Row >
                <h3>Customer Details</h3>
                <Col md={4}>
                    <Row>
                        {customer && (
                            <Card className="cards-style text-center"
                                bg="dark"
                                key="Dark"
                                text='light'
                                >
                                <Card.Img variant="top" src={"/images/user-512.png"} alt={customer.name} />
                                <Card.Body>
                                    <Card.Title>Name: {customer.customer_name}</Card.Title>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>Contact Name: </span> {customer.contact_name}</Card.Text>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>Address: </span> {customer.address}</Card.Text>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>City: </span> {customer.city}</Card.Text>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>Postal Code: </span> {customer.postal_code}</Card.Text>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>Country: </span> {customer.country}</Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Col>
                <Col  md={8}>
                    <Row style={{paddingLeft:'10px'}}>
                        <Container style={{backgroundColor: 'white', borderRadius:'10px'}}>
                            <h3>Orders by the Customer</h3>
                            <hr />
                            <Table striped bordered  hover > 
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order Date</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? 
                                        (
                                            <div className="spinner-container">
                                                <Spinner animation="border" role="status" >
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </div>
                                        )
                                    :orders.filter(order => !customer_id || order.customer_id === parseInt(customer_id)).slice(0,count).map(order => 
                                    (
                                        <tr key={order.order_id}>
                                            <td><a href={`/order/${order.order_id}`} className="link"  >{order.order_id}</a></td>
                                            <td>{order.order_date}</td>
                                            <td style={{textAlign: 'center'}}><a><Button variant="dark" onClick={() => {navigateToOtherPage(order.order_id)}}> <FaArrowRight /> </Button></a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button
                                variant="outline-secondary"
                                onClick={() => {
                                    if (count+5 >= orders.length) {
                                        setCount(orders.length);
                                    }
                                    
                                    else{setCount(count + 5);}
                                }}
                                style={{ width: '100%' }}
                                disabled={count >= orders.filter(order => !customer_id || order.customer_id === parseInt(customer_id)).length}
                            >
                                See More
                            </Button>



                        </Container>
                    </Row>
                </Col>
            </Row>








        </Container>


    </div>
  )
}

export default CustomerPage