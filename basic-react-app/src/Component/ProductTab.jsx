import React from 'react'
import Product from './Product'

function ProductTab() {
  let option = ["hi-tech", "durable", "fast"]
 
  return (
    <div>
      {/* Hiarchy */}
        <Product title="phone" price={30000} features = {option} features2 = {{a: "hi-tech",
              b: "durable",
              c: "fast"}}/> 
        <Product title="phone" price={300000} /> 
        <Product title="Laptop" price={60000}/>       
        <Product title="pen" price={1}/>      
    </div> 
  )
}
 

export default ProductTab
