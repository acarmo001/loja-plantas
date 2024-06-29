import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartItem from "./CartItem";

export default function ShoppingCart() {

    const {cart} = useContext(CartContext);

    return (
        <CartContext.Consumer>
            <h2>Carrinho de compras</h2>
            <cartItem />
            {/*context => {
                return(
                    <div>                        
                        {cart.map(product => (
                            <div key={ProductPage.id}>
                                
                                {product.title}
                            </div>
                        ))}                            
                    </div>
                );
            }*/
            }
            <p>total do carrinho</p>
        </CartContext.Consumer> 
    );
}