import React from 'react'

export default function Product(props) {


  return (
    <div className='Product' >

      <img src={props.allData.img} alt="Product Photo" /> 

      <p > <b> {props.allData.nameProduct} </b> </p>

      <p> Price: {props.allData.price} </p>

      <button onClick={() => {props.add(props.index)}} >+</button>
    

    </div>
  )
}
