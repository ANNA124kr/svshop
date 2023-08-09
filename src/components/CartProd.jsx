import React from 'react'
import del from './icons/bag.svg'

export default function CartProd(props) {



  return (
    <div className='Product'>

      <img src={props.allData.img} alt="Product Photo" />

        <p> <b> {props.allData.nameProduct} </b> </p>  

        <p>Price: {props.allData.price} </p>

        <p> {props.count} </p>

        {/* del icon */}
        <img onClick={() => {props.del(props.index)}} style={{width: '32px' ,height: '32px', cursor: 'pointer'}} src={del} alt="delete ico" />
    </div>
  )
}
