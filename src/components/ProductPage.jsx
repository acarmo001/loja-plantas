import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext";

import '../Styles/ProductPage.css'

export default function ProductPage () {

    const {addToCart} = useContext(CartContext);

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
                
                    <div  className="wrapper" key={product.id}>
                        <figure>
                            <img src={product.photo} alt="imagem do produto" />
                        </figure>
                        <dl>
                            <dt>Nome:</dt>
                            <dl>{product.name}</dl>
                            <dt>Ambiente:</dt>
                            <dl>{product.type}</dl>
                            <dt>Luminosidade:</dt>
                            <dl>{product.light}</dl>
                            <dt>Rega:</dt>
                            <dl>{product.rega}</dl>
                            <dt>Descrição:</dt>
                            <dl>{product.description}</dl>
                            <dt>Preço:</dt>
                            <dl>{product.price} €</dl>                
                        </dl>           
                        <button type="button" onClick={() => addToCart(product)}>+</button>
                        <p> {product.stock} </p>
                        <button>-</button>
                        <button>x</button>
                    </div>
                               
            }
        </div>
    );
}