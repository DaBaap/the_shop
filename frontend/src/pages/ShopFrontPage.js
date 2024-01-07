import '../css/ShopFrontPage.css';

import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
// import myImage from '/images/category.png'; // Adjust the path as needed
import Spinner from 'react-bootstrap/Spinner';

const ShopFrontPage = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // Fetch categories from API
        fetch('http://127.0.0.1:8000/api/categories/')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setIsLoading(false);})
            .catch(error => console.log(error));
    }, []);
    // `/category/${category.id}`}
    return (
        <div className="cards-container">
            {isLoading ? 
            (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )
          :(categories.map(category =>
            (
                <a href={`/items/${category.category_id}`}  key={category.category_id} className="card-link">
                    <Card style={{ backgroundColor: '#ebebebf3' }}
                        key={category.category_id}
                        className="card-style"
                        onClick={() => console.log(`Clicked on ${category.name}`)}
                    >
                        <Card.Img variant="top" src={"/images/category.png"} />
                        <Card.Body>
                            <Card.Title>{category.category_name}</Card.Title>
                            <Card.Text>{category.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            ))
            )}
        </div>
    );
};

export default ShopFrontPage;

