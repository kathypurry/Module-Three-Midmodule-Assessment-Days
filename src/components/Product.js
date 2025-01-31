//display name photo and description
//display price formatted in dollars and cents 00.00
//each product has an add to cart button. button text= Add to Cart

import React from 'react'
import './Products.css'
import formatPrice from '../helpers/formatPrice'

function Product(props) {
    const {name, price, img, description, addToCart, product} = props
    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <img src={img} alt={name}/>
            <p>{description}</p>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    )
}

export default Product