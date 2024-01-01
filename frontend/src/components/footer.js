import {  CDBBtn, CDBBox, CDBIcon  } from 'cdbreact';
import React, { useEffect, useState } from 'react';

function Footer() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch categories from API
        fetch('http://localhost:8000/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
      // Fetch categories from API
      fetch('http://localhost:8000/api/products')
          .then(response => response.json())
          .then(data => setItems(data))
          .catch(error => console.log(error));
  }, []);
  return (
      <CDBBox  display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%', backgroundColor: '#d4d3d3' }}>
        <hr />
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ms-3 h5 font-weight-bold">The Shop</span>
            </a>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Items
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              {items.slice(0, 3).map(item => (
                    <p>{item.product_name}</p>
                ))}
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Categories
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              {categories.slice(0, 3).map(category => (
                  <p>{category.category_name}</p>
              ))}
            </CDBBox>
          </CDBBox>
          
        </CDBBox>
        <small className="text-center mt-5">&copy; The Shop, 2023. All rights reserved.</small>
      </CDBBox>
  );
};
export default Footer;
