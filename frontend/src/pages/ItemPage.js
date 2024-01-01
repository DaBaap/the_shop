import '../css/ItemPage.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoArrowBackSharp } from "react-icons/io5";

const ItemPage = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/products/${product_id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => console.log(error));
    }, [product_id]);

    return (
        <Container className="d-flex card-container" style={{ minHeight: '100vh' , padding: '10px' }}>

            <Row style={{}}>
            
                <Col >
                    <Button variant="outline-dark" onClick={() => window.history.back()}  ><IoArrowBackSharp /> Back</Button>
                    {product && (
                        <Card className="cards-style text-center"
                            bg="dark"
                            key="Dark"
                            text='light'
                            >
                                
                            <Card.Img variant="top" src={"/images/food.jpg"} alt={product.name} />
                            <Card.Body>
                                <Card.Title>Name: {product.product_name}</Card.Title>
                                <Card.Text><span style={{fontWeight: 'bold'}}>Description: </span> {product.unit}</Card.Text>
                                <Card.Text><span style={{fontWeight: 'bold'}}>Price: </span> {product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ItemPage