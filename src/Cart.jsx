import React, {useState} from 'react'
export default function Cart({ setCart,cart, removeFromCart}){
    const countTotal=(value)=>{
     let val = cart.reduce((sum, {cost, quantity})=>sum + cost*quantity,0);
      val=val.toFixed(2);
      return val;
    }
    const emptyCart=()=>{
        setCart([]);
     }
    return (
        <div className="cartWrap">
            <div className="cartPrice">
                 <h1>Cart</h1>
                <h3>Total cost:${countTotal()}</h3>
                <button className="addToCart" onClick={emptyCart}>Remove All</button>
            </div>
            <div className="productsCart">
             
                    {cart.map((product, idx)=>{
                        countTotal(product.cost);
                    return(
                    <div className="productCart product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                    <h4>Qunatity: {product.quantity}</h4>
                        <img src={product.image} alt="stuff"/>
                        <button className="addToCart" onClick={()=>removeFromCart(product)}>Remove from cart</button>
                    </div>
                    )
                })}
            </div>
    </div>
        
 )
}