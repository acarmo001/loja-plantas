import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext";

import '../Styles/ProductPage.css'

export default function ProductPage () {

    const {addToCart, removeFromCart, cancelCart} = useContext(CartContext);

    const params = useParams();    

    const [product, setProduct] = useState ({});    
    
    useEffect(() => {
        fetch('/ProductList.json')
        .then(response => response.json())
        .then( products => {
            const productFound = products.find(item => item.id == params.id);

            if(productFound) {
                setProduct(productFound);
                console.log(productFound);                
            }          
        });
    }, [params.id]);


    return (
        <div>
            
            {product &&
                
                    <div className="wrapper" key={product.id}>
                        <figure className="fig-productpage">
                            <img src={product.photo} alt="imagem do produto" />
                            <div>                            
                                <button type="button" onClick={() => removeFromCart(product)}>-</button>                                
                                <button type="button" onClick={() => addToCart(product)}>+</button>
                                <button type="button" onClick={() => cancelCart(product)}>x</button>
                        </div>
                        </figure>
                        <dl className="productpage-info">
                            <dt>Nome:</dt>
                            <dd>{product.name}</dd>
                            <dt>Ambiente:</dt>
                            <dd>{product.type}</dd>
                            <dt>Luminosidade:</dt>
                            <dd>{product.light}</dd>
                            <dt>Rega:</dt>
                            <dd>{product.rega}</dd>
                            <dt>Descrição:</dt>
                            <dd>{product.description}</dd>
                            <dt>Preço:</dt>
                            <dd>{product.price} €</dd>                
                        </dl> 
                        
                    </div>
                               
            }
        </div>
    );
}