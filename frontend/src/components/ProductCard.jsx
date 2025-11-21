import React from 'react'

import book2 from '../assets/book2.jpg'

const ProductCard = () => {
    return (
    <div className='product-card' style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
<div className='card' style={{width:'300px',margin:'20px',padding:'20px',border:'1px solid #ccc',borderRadius:'8px'}}>
        <img src={book2} alt='Product' style={{width:'100%',borderRadius:'8px'}} />
        <h3 style={{textAlign:'center'}}>Product Name</h3>
        <p style={{textAlign:'center'}}>This is a brief description of the product.</p>
        <button style={{display:'block',margin:'0 auto',padding:'10px 20px',backgroundColor:'#28a745',color:'#fff',border:'none',borderRadius:'4px'}}>Add to Cart</button>
      </div>
    </div>
      
 
    
  )
}

export default ProductCard