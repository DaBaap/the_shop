import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

const CustomersPage = () => {
  const navigate = useNavigate();

    const navigateToOtherPage = (id) => {
      navigate('/customer/'+id);
    };
    const [customers, setCustomers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(10);

    useEffect(() => {
        // Fetch products from API
        setIsLoading(true);
        fetch('http://127.0.0.1:8000/api/customers/')
            .then(response => response.json())
            .then(data => {setCustomers(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, []);
  return (
    <div style={{padding: '20px'}}>
      <Table striped bordered  hover > 
                <thead>
                    <tr>
                        <th>Customer ID </th>
                        <th>Customer Name</th>
                        <th>Country</th>
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
                    :customers.slice(0,count).map(customer => 
                    (
                        <tr key={customer.customer_id}>
                            <td><a href={`/customer/${customer.customer_id}`} className="link" >{customer.customer_id}</a></td>
                            <td>{customer.customer_name}</td>
                            <td>{customer.country}</td>
                            
                            <td style={{textAlign: 'center'}}><a><Button variant="dark" onClick={() => {navigateToOtherPage(customer.customer_id)}}> <FaArrowRight /> </Button></a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button
                variant="outline-secondary"
                onClick={() => {
                    if (count+5 >= customers.length) {
                        setCount(customers.length);
                    }
                    
                    else{setCount(count + 5);}
                }}
                style={{ width: '100%' }}
                disabled={count >= customers.length}
            >
                See More
            </Button>
      
    </div>
  )
}

export default CustomersPage