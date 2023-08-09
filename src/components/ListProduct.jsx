import React  from 'react'
import Product from './Product'


export default function ListProduct(props) {
  return (
    <div className='container'>

        <h2>List Product</h2>

        {props.products.map((val,index) =>{
          
            return <Product add = {props.add} 
                            allData = {val} 
                            key={index}
                            index = {index} />
        })}
        
    </div>
  )
}
