import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ShoppingCart() {

    const {cart} = useContext(CartContext);

    return (
        <CartContext.Consumer>
            <h2>Carrinho de compras</h2>
            {context => {
                return(
                    <div>                        
                        {cart.map(product => (
                            <div key={ProductPage.id}>
                                {product.title}
                            </div>
                        ))}                            
                    </div>
                );
            }}
        </CartContext.Consumer> 
    );
}