import React from 'react'
import Product from '../product/Product'

function ProductList({products}) {
  return (
    <div className='productlist'>
        {
            products.map(product => (
                <Product key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default ProductList