import React,{useContext} from 'react'
import {ProductsContext} from './ProductsContext'
export default function SingleProduct({id, addToCart}) {
    const [products]=useContext(ProductsContext);
    return (
        <div>
             {products.map((product, idx)=>{
                 if(product.id==id){
                     return(
                         <div className="singleWrap">
                             <div>
                                <img src={product.image}/>
                            </div>
                            <div className="description">
                                <h4>{product.name}</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium architecto sapiente illo enim magnam amet! Odit reiciendis, eum beatae est praesentium, unde dolorem quidem omnis molestias possimus fugiat. Perferendis, porro?</p>
                                <h4>${product.cost}</h4>

                                <button className="addToCart" onClick={()=>addToCart(product)}>Add to cart</button>
                            </div>
                           
                         </div>
                        
                     )
                 }
             })}
        </div>
    )
}
