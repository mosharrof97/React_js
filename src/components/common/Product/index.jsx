import React, {useEffect} from 'react'
import './index.css'

export default function Product(Props) {
  const {image, title, category, price, rating} = Props.product;

  

  return (
    <div className='state'>
      <div className='img-div'>
      <img src={image} alt="" />
      </div>
      <div className='details-div'>
        <h2>{title}</h2>
        <h3>Category: {category}</h3>
        <p>Price: {price}$</p>
        <p>Rating: {rating.rate} </p>
        <button>Add to Card</button> 
      </div>
    </div>
  )
}
