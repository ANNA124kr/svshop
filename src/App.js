
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListProduct from './components/ListProduct'
import CartList from './components/CartList';
import computer from './components/images/computer.jpg'
import pen from './components/images/pen.jpg'
import notebook from './components/images/notebook.jpg'
import keyboard from './components/images/keybord.jpg'
import headphones from './components/images/lever.jpg'
import mouse from './components/images/mouse.jpg'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
//===================================================================================================================

//class Products
class Product{
  constructor(img, nameProduct, price ){
    this.img = img;
    this.nameProduct = nameProduct;
    this.price = price;
  }
}



function App() {

  
  let prod1 = new Product(computer,'Lenovo',2000)
  let prod2 = new Product(notebook,'notebook',10)
  let prod3 = new Product(pen,'pen',5)
  let prod4 = new Product(keyboard,'keyboard',75)
  let prod5 = new Product(headphones,'headphones',150)
  let prod6 = new Product(mouse,'mouse',50)
  
// product array 
  const [productArr , setProductArr] = useState([prod1,prod2,prod3,prod4,prod5,prod6])

//===================================================================================================================
// user card array 
const [cartArr , setCartArr] = useState([])

//===================================================================================================================

// array of products which user bought
const [buyArr,setBuyArr] = useState([])

//===================================================================================================================

// Add product function
const addProd = (index) => {
  
  setCartArr([...cartArr,productArr[index]])
  
}

//===================================================================================================================

// delete product function
const delProd = (i) => {
  let newArr = cartArr.filter((val, index) => (index !== i))
  setCartArr([...newArr])
}

//===================================================================================================================

// button buy // function
const buy = () => {
  setBuyArr([...cartArr])
  setBuyArr([...cartArr])
  setCartArr([])
}


//===================================================================================================================
  return (
    <div className="App">

      <BrowserRouter>

      <Header  countCart = {cartArr.length} />
      
      <Routes>

      <Route path='/' element ={ <ListProduct  add = {addProd} del = {delProd} products = {productArr}  />} />
      <Route path='/cart' element ={<CartList buy = {buy} del = {delProd} cartList = {cartArr} /> } />

      </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
