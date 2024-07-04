import { NavLink, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import '../Styles/Products.css';


export default function Products() {

    const {cart, addToCart, removeFromCart, cancelCart} = useContext(CartContext);
        
    const [products, setProductlist] = useState ([]);

    useEffect(() => {
        fetch('/ProductList.json')
        .then(response => response.json())
        .then( product => setProductlist(product));
    }, []);


    return (
        <div>
            <h2>Produtos</h2>
            <div className="galery">
            {products &&
                products.map(product => (
                    <section key={product.id}>
                        <figure>
                            <NavLink to={ `/productPage` }><img className="fig-product" src= { product.photo } alt="" /></NavLink>
                        </figure>
                        <div className="product-info">
                            <p> {product.review} <img className="star-review" src="/images/estrela.svg" alt="" /> </p>
                            <div className="btn-Cart">                                
                                
                                <button type="button" onClick={() => removeFromCart(product)}>-</button>
                                
                                <button type="button" onClick={() => addToCart(product)}>+</button>
                                <button type="button" onClick={() => cancelCart(product)}>x</button>
                            </div>                            
                        </div>                        
                        <h3 className="product-name">{ product.name }</h3>                                           
                        <p>{product.price} €</p>
                    </section>
                ))
            }
            </div>
        </div>
    );
}