import React from 'react'
import CartProd from './CartProd'
import { useNavigate } from 'react-router-dom';

export default function CartList(props) {

    const nav = useNavigate()

  //total product function
      const showTotal = () => {
      let totalProd = props.cartList.length;
      return totalProd
}

//total price function
    const showSum = () => {
    let sum = 0;
    props.cartList.forEach((val) => {
      sum += val.price
})
        return sum
}


  return (
    <div className='container' >

        <h2>Cart List</h2>
        
        {props.cartList.map((val,index) => {
          
            return <CartProd del = {props.del} 
                              allData = {val} 
                              key = {index} 
                              index = {index}/>
        })}


    <h2> Total Product: {showTotal()} </h2>
    <h2> Total Price:   {showSum()} </h2>

    <button style={{width: '200px', padding : '10px' , backgroundColor: '#BCA5AE'}} onClick={() => {nav('/')}} >Products </button><br />
    <button style={{width: '200px', padding : '10px'}} onClick={() => {nav('/'); props.buy() }}                >Buy      </button> 

    </div>
  )
}
