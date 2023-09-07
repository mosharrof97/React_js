import React from 'react'
import Product from './index.jsx'
import Data from '../../../product.json'


export default function Product_list() {

  // const [ Products, setProduntsData ] = useState( Data )

  let products = [];
  products = Data.map((product) =>{
    return(<Product key={product.id} product={product} />)
  })

  return(
   <>
    {  products }
    </>
  )
}
