import React, { useState, useEffect } from 'react'
import axios from "axios";

const product_url = 'http://localhost:8080/v1/product'

function ProductAddItem() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productImageUrl, setProductImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [product, setProduct] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const user_input = { 
        "productName" : productName, 
        "productDesc" : productDesc, 
        "productPrice": productPrice, 
        "productImageUrl" : productImageUrl,
        "categoryId": categoryId,
    };
    // send the username and password to the server
    const response = await axios.post(
        product_url,
        user_input
    );
    // set the state of the user
    setProduct(response.data)
    // store the user in localStorage
    localStorage.setItem('product', JSON.stringify(response.data))
    console.log(response.data)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">ProductName</label>
          <input 
            type="text" 
            value={productName}
            onChange={({ target }) => setProductName(target.value)}
            className="form-control" 
            id="productName" 
            placeholder="Enter Product Name" />
          <br/>
        </div>
        <div className="form-group">
          <label htmlFor="productDesc">ProductDesc</label>
          <input 
            type="text" 
            value={productDesc}
            onChange={({ target }) => setProductDesc(target.value)}
            className="form-control" 
            id="productDesc" 
            placeholder="Enter Product Description" />
          <br/>
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">ProductPrice</label>
          <input 
            type="number" 
            value={productPrice}
            onChange={({ target }) => setProductPrice(target.value)}
            className="form-control" 
            id="productPrice" 
            placeholder="Enter Product Price" />
          <br/>
        </div>
        <div className="form-group">
          <label htmlFor="productImageUrl">ProductImageUrl</label>
          <input 
            type="text" 
            value={productImageUrl}
            onChange={({ target }) => setProductImageUrl(target.value)}
            className="form-control" 
            id="productImageUrl" 
            placeholder="Enter Product Image Url" />
          <br/>
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">CategoryId</label>
          <input 
            type="text" 
            value={categoryId}
            onChange={({ target }) => setCategoryId(target.value)}
            className="form-control" 
            id="categoryId" 
            placeholder="Enter Category Id" />
          <br/>
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductAddItem;