import React, { useEffect, useState } from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { IoArrowBackSharp } from "react-icons/io5";

const Order = () => {
    const { order_id } = useParams();

    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [order_details, setOrderDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Fetch products from API
        setIsLoading(true);

        fetch(`http://127.0.0.1:8000/api/orders/${order_id}/`)
            .then(response => response.json())
            .then(data => {setOrders(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, [order_id]);

    useEffect(() => {
      // Fetch products from API
      setIsLoading(true);
      fetch(`http://127.0.0.1:8000/api/customers/${orders.customer_id}/`)
          .then(response => response.json())
          .then(data => {setCustomers(data);
          setIsLoading(false);})
          .catch(error => console.log(error));
  }, [orders.customer_id]);

    useEffect(() => {
    // Fetch products from API
      setIsLoading(true);
      fetch(`http://127.0.0.1:8000/api/order_details/`)
          .then(response => response.json())
          .then(data => {
            setOrderDetails(data.find(ord => ord.order_id === parseInt(order_id)));
            setIsLoading(false);
          })
          .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        // Fetch products from API
        setIsLoading(true);
        fetch(`http://127.0.0.1:8000/api/products/${order_details.product_id}/`)
            .then(response => response.json())
            .then(data => {setProducts(data);
            setIsLoading(false);})
            .catch(error => console.log(error));
    }, [order_details.product_id]);
    
  return (
    
    isLoading ? 
          (
              <div className="spinner-container">
                  <Spinner animation="border" role="status" >
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
              </div>

          )
      :
    <Container style={{padding:'10px'}}>
      
      <Button variant="outline-dark" onClick={() => window.history.back() } ><IoArrowBackSharp /> Back</Button>
      <h1>Order Details</h1>
        <Row style={{padding:'10px', border: '1px solid', borderRadius: '5px', backgroundColor: '#ebebeb'}}>
            <Col>
              <h4>Order ID: </h4>
              <h4>Customer ID: </h4>
              <h4>Customer Name: </h4>
              <h4>Order Date: </h4>
              <h4>Order Address: </h4>
              <h4>Product ID: </h4>
              <h4>Product Name: </h4>
              <h4>Quantity: </h4>
              <h4>Unit Price: </h4>
              <hr />
              <h4>Total Price: </h4>

            </Col>
            <Col>
              <p style={{fontSize: '20px', lineHeight: "22px"}}>{order_id}</p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}><a href={`/customer/${orders.customer_id}`} className="link"  >{orders.customer_id}</a></p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}><a href={`/customer/${orders.customer_id}`} className="link"  >{customers.customer_name}</a></p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}>{orders.order_date}</p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}>{customers.address}, {customers.city}, {customers.postal_code}, {customers.country}</p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}><a href={`/item/${products.product_id}`} className="link"  >{products.product_id}</a></p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}><a href={`/item/${products.product_id}`} className="link"  >{products.product_name}</a></p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}>{order_details.quantity}</p>
              <p style={{fontSize: '20px', lineHeight: "22px"}}>${products.price}</p>
              <p style={{fontSize: '20px', lineHeight: "30px"}}>${products.price * order_details.quantity}</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Order