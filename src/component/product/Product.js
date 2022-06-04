import React, { useState, useEffect } from 'react'
import Loading from '../Loading'
import ProductItem from './ProductItem'
import Grid from '@mui/material/Grid';

const category_url = 'http://localhost:8080/v1/category'
const product_url = 'http://localhost:8080/v1/product'

function Product() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const fetchCategories = async () => {
    try {
      const response = await fetch(category_url)
      const categories_response = await response.json()
      setLoading(false)
      setCategories(categories_response)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch(product_url)
      const products_response = await response.json()
      setLoading(false)
      setProducts(products_response)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  function findCategoryName(categoryId) {
    var retCategory = "";

    if(categories.length === 0 || categories === null) {
      console.log("No Categories Found");
    } else {
      categories.forEach(function(element) { 
        if(element.categoryId === categoryId) {
          retCategory = element.categoryName;
        }
      });
    }
    return retCategory;
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (products.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no products left</h2>
          <button className='btn' onClick={() => fetchProducts()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <div className='mx-4 my-4'>
        <Grid container spacing={2}>
        {products.map((product) => {
            return <Grid item xs={3} key={product.productId}>
                <ProductItem productItem={product} categoryName={findCategoryName(product.categoryId)} />
            </Grid>
        })}
        </Grid>
    </div>
  )
}

export default Product;