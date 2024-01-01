import '../css/Order.css';

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();

    const navigateToOtherPage = (id) => {
      navigate('/order/'+id);
    };


    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [count, setCount] = useState(10);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Fetch products from API
        setIsLoading(true);

        fetch('http://localhost:8000/api/orders')
            .then(response => response.json())
            .then(data => {setOrders(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        // Fetch products from API
        setIsLoading(true);
        fetch('http://localhost:8000/api/customers')
            .then(response => response.json())
            .then(data => {setCustomers(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, []);


    return (
        <div style={{padding: '20px'}}>
            
            {/* <h3>{!order_id ? 'All Items' : categories.find(cat => cat.category_id === parseInt(order_id))?.category_name}</h3> */}
            <Table striped bordered  hover > 
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer ID </th>
                        <th>Customer Name</th>
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
                    :orders.slice(0,count).map(order => 
                    (
                        <tr key={order.order_id}>
                            

                            <td><a href={`/order/${order.order_id}`} className="link"  >{order.order_id}</a></td>
                            <td><a href={`/customer/${order.customer_id}`} className="link" >{order.customer_id}</a></td>
                            <td>{customers.find(customer => customer.customer_id === parseInt(order.customer_id))?.customer_name}</td>
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
                disabled={count >= orders.length}
            >
                See More
            </Button>
            
        </div>
    );
}

export default Orders