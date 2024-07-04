import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import '../Styles/ShoppingCart.css'

export default function ShoppingCart() {

    const {cart, removeFromCart, totalCart} = useContext(CartContext);
    console.log(cart);

      

    return (
        <div className="shopCart">
            <p>Items do carrinho</p>

            {cart &&
                cart.map(product => (
                    <div className="shopitem" key={product.id}>
                        <img src={product.photo} alt="imagem do produto" className="shopitem-img" />
            
                        <div className="shopitem-content">
                            <h3 className="shopitem-title">{product.name}</h3>
                            <h3 className="shopitem-price">{product.price} €</h3>
                            <p className="shopitem-quantity">Qtd: {product.quantity}</p>
                            <button type="button" className="shopitem-remove" onClick={ () => removeFromCart(product)}>
                                -
                            </button>
                        </div>
                    </div>
                ))
            }            
                        
            <p className="shopCart-total">Total do carrinho</p>
            <p>{totalCart} €</p>
            
        
    </div>
    );
}