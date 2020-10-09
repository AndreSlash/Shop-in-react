import React, {useState} from 'react';
import Products from './Products'
import Sidebar from './Sidebar'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import {ProductsProvide} from './ProductsContext'
import Cartimg from './shopping-cart.png'
import Santa from './santa.svg'

import './App.css';

const PAGE_PRODUCTS='products';
const PAGE_CART='cart';
const PAGE_SINGLE='single';
function App() {
  const [cart,setCart]=useState([

  ]);
  const [category,setCategory]=useState('Christmas Ball');
  const [page,setPage]=useState('products');
  const [order,setOrder]=useState('asc');
  const [singlePage,setSinglePage]=useState('1');

  const changeOrder=(order)=>{
    setOrder(order);
  }

  const removeFromCart=(productToRemove)=>{
    setCart(cart.filter(product => product!== productToRemove))
  }

  const getCartTotal=()=>{
    return cart.reduce((sum, {quantity})=>sum + quantity,0);
  }

  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  }

  const changeCategory=(category)=>{
    setCategory(category);
  }

  const addToCart=(product) =>{
   let newCart=[...cart];
   let itemInCart=newCart.find(
     (item)=>product.name ===item.name
   );
   if(itemInCart){
     itemInCart.quantity++;
   }
   else{
     itemInCart={
       ...product,
       quantity:1
     };
     newCart.push(itemInCart);
   }
   setCart(newCart);
  };


  return (
    <ProductsProvide>
        <div className="App">
        <header>
          <div className="logo-wrap">
            <h2 className="logo">ChristmasShop</h2>
            <img src={Santa}/>
          </div>
         
          <ul>
            <li className="headerBtn" onClick={()=>navigateTo(PAGE_CART)}>
              <img src={Cartimg}/> ({getCartTotal()})
            </li>
            <li className="headerBtn" onClick={()=>navigateTo(PAGE_PRODUCTS)}>
              View products 
            </li>
          </ul>
        
        </header>
        {
          page===PAGE_PRODUCTS &&
            <div className="wrapper">
              <Sidebar changeCategory={changeCategory}/>
              <Products order={order} changeOrder={changeOrder} setSinglePage={setSinglePage} navigateTo={navigateTo} category={category} addToCart={addToCart}/>
            </div>
          }

        {
          page===PAGE_SINGLE &&
            <div className="wrapper">
              <SingleProduct addToCart={addToCart} id={singlePage}/>
            </div>
          }   
          
        
        {page===PAGE_CART && <Cart setCart={setCart} cart={cart} removeFromCart={removeFromCart}/>}
      </div>

    </ProductsProvide>
    

  );
}

export default App;
