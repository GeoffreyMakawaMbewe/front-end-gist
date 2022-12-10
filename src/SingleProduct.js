import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import myProducts from './myProducts'

const SingleProduct = () => {
    const {productId} = useParams()
    console.log(productId);
    
    const product = myProducts.find((product) => product.id === productId);
    //const {image , name} = product;
  return (
    < >
        <h1>{product.image}</h1>
        <p>{product.name}</p>
       <Link to='/products'>Products</Link>
    </>
  )
}

export default SingleProduct
