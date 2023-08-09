import React from 'react'
import homeico from './icons/homepage.svg'
import cart from './icons/card.svg'
import { useNavigate } from 'react-router-dom'


export default function Header(props) {

const nav = useNavigate()


  return (
    <div className='Header' >
    
    {/* home icon */}
    <img style = {{width: '48px', height: '48px' , cursor: 'pointer'} } 

              src= {homeico} alt="Home icon"
              onClick={() => {nav('/')}} />

    <h1>SV-SHOP</h1>

    {/* cart icon */}
    <div className='cart-icon' >
      
      <img style = {{width: '48px', height: '48px' , cursor: 'pointer'}}

              src= {cart} alt="Cart icon" 
              onClick={() => {nav('/cart')}} />


    <p style={{color: '#E860A3', fontWeight: 'bold' , fontSize:'18px'}} >{props.countCart}</p>

    </div>
      </div>
  )
}
