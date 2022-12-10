import React from 'react'
import { Link } from 'react-router-dom'
import myProducts from './myProducts'

const Products = () => {
  return (
    < >
      <h1>Products</h1>
      {myProducts.map((product) => {
        return (
          <article key={product.id}>
                <h1>{product.name}</h1>
                <Link to={`/products/${product.id}`}>More Info</Link>
          </article>
        )
      })}
    </>
  )
}

export default Products
