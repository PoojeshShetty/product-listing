import React from 'react'

function Product({product}) {
  return (
    <div className='product'>
        <div className="product__image">
            <img src={product.imageUrl} alt="" />
        </div>
        <div className="product__info">
            <div className="product__name">{product.name}</div>
            <div className="product__brand">{product.brand}</div>
            <div className="product__price">Rs {product.price}</div>
            <div className="product__sizes">
                Size : {product.size.map((sz, index) => (
                    <span key={index}>{sz}</span>
                ))}
            </div>
            <div className="product__gender">
                Gender : {product.gender[0].toUpperCase() + product.gender.slice(1)}
            </div>
        </div>
    </div>
  )
}

export default Product