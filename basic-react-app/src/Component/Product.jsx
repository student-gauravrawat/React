import React from 'react'
import "./Product.css"

function Product({title, price,features}){
  let isDiscount = price>30000;
  const styles = {backgroundColor:isDiscount ?"orange":"pink"};

//  if( price > 30000){
//    return (
//     <div className='product'>
//        <h3>Product {title}</h3>                                                                                      
//        <h5>Price : {price}</h5>
//        <p>Discount of 5%</p>
//     </div>
//   )
//  }
//  else{
//   return (
//     <div className='product'>
//        <h3>Product {title}</h3>                                                                                      
//        <h5>Price : {price}</h5>
       
//     </div>
//   )
//  }
return (
      <div className='product' style={styles}>
         <h3>Product {title}</h3>                                                                                      
         <h5>Price : {price}</h5>
        {price>30000 && <p>discount of 5%</p>}       
      </div>
    )
} 

export default Product
