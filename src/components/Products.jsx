import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import '../Styles/Products.css';


export default function Products() {

    const {addToCart} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);
    const {cancelCart} = useContext(CartContext);
    
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
            {
                products.map(product => (
                    <section key={product.id}>
                        <figure>
                            <NavLink to={ "/productPage" }><img src= { product.photo } alt="" /></NavLink>
                        </figure>
                        <div className="product-info">
                            <p> {product.review} <img src="/images/estrela.svg" alt="" /> </p>
                            <div className="btn-Cart">                                
                                
                                <button type="button" onClick={() => removeFromCart(products)}>-</button>
                                <div>{product.stock}</div>
                                <button type="button" onClick={() => addToCart(products)}>+</button>
                                <button type="button" onClick={() => cancelCart(products)}>x</button>
                            </div>                            
                        </div>                        
                        <h3>{ product.name }</h3>                                           
                        <p>{product.price} €</p>
                    </section>
                ))
            }
            </div>
        </div>
    );
}