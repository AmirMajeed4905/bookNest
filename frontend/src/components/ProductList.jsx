import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='product-list-container' style={{textAlign:'center',marginTop:'50px'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'20px'}}>Our Products</h2>
        <p style={{fontSize:'1.2rem',color:'#555'}}>Explore our wide range of products designed to meet your needs.</p>
    
    <div className='product-list' style={{justifyContent:'center',display:'flex',flexWrap:'wrap',marginTop:'50px'}}> 
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

    </div>
    </div>
  )
}

export default ProductList