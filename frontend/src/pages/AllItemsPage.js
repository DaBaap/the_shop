import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const ItemsPage = ( ) => {

    const { category_id} = useParams();

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [count, setCount] = useState(10);
    
    useEffect(() => {
        // Fetch products from API
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        // Fetch products from API
        fetch('http://localhost:8000/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div style={{padding: '20px'}}>
            {!category_id ? '' : <Button variant="outline-dark" onClick={() => window.history.back() } ><IoArrowBackSharp /> Back</Button>}
            
            <h3>{!category_id ? 'All Items' : categories.find(cat => cat.category_id === parseInt(category_id))?.category_name}</h3>
            <Table striped bordered  hover > 
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.filter(item => !category_id || item.category_id === parseInt(category_id)).slice(0,count).map(item => 
                    (
                        <tr key={item.product_id}>
                            <td><a href={`/item/${item.product_id}`} className="link"  >{item.product_id}</a></td>
                            <td><a href={`/item/${item.product_id}`} className="link"  >{item.product_name}</a></td>
                            <td>{item.unit}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button
                variant="outline-secondary"
                onClick={() => {
                    if (count+5 >= items.length) {
                        setCount(items.length);
                    }
                    
                    else{setCount(count + 5);}
                }}
                style={{ width: '100%' }}
                disabled={count >= items.filter(item => !category_id || item.category_id === parseInt(category_id)).length}
            >
                See More
            </Button>
            
        </div>
    );
}

export default ItemsPage