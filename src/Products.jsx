import React, {useState, useContext} from 'react'
import {ProductsContext} from './ProductsContext'
export default function Products({setSinglePage,category, cart,addToCart, navigateTo, changeOrder, order}){
   
   /*import array of objects from productsContext */
    const [products]=useContext(ProductsContext);

    /* Sort by price*/
    if(order=='asc'){
      products.sort(function (a, b) {
        return b.cost - a.cost;
      });
    }
    else{
      products.sort(function (a, b) {
        return a.cost - b.cost;
      });
    }
   
    return (
      
      <div>
             <button className="orderBtn" onClick={()=>changeOrder('asc')}>Order By asc</button>
              <button className="orderBtn" onClick={()=>changeOrder('desc')}>Order By desc</button>
              <div className="products">
           
              {
              
              products.map((product, idx)=>{
                if(product.category===category){
                  if(product.discount){
                    return(
                      <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <div className="prices">
                          <h4 className="oldPrice">${product.cost}</h4>
                          <h4 className="newPrice">${(product.cost-product.cost*product.discount).toFixed(2)}</h4>
                        </div>
                        <h5 className="discount">-{product.discount*100}%</h5>
                        <img 
                        onClick={
                          ()=>{setSinglePage(product.id); navigateTo("single");}
                          } 
                          src={product.image} 
                          alt="stuff"/>
                        <button className="addToCart" onClick={()=>addToCart(product)}>Add to cart</button>
                    </div>
                    )
                  }
                  else{
                    return(
                      <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <img 
                        onClick={
                          ()=>{setSinglePage(product.id); navigateTo("single");}
                          } 
                          src={product.image} 
                          alt="stuff"/>
                        <button className="addToCart" onClick={()=>addToCart(product)}>Add to cart</button>
                    </div>
                    )
                  }
                
                }
          })}
        </div>
      </div>
     

   
 )
}