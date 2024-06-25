import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextprovider(props) {

    const [Cart, setCart] = useState([]);

    function addToCart(product) {

        /*setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);

            if(existingProduct < 0){
                product.quantity = 1;                
                cartCopy.push( product );
            }
            else{
                cartCopy[existingProduct].quantity++;
            }
            return cartCopy;
        })*/
    }

    function removeFromCart(product) {

        /*setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);

            if(existingProduct < 0){
                product.quantity = 1;                
                cartCopy.push( product );
            }
            else{
                cartCopy[existingProduct].quantity++;
            }
            return cartCopy;
        })*/
    }

    function cancelCart(product) {

        /*setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);

            if(existingProduct < 0){
                product.quantity = 1;                
                cartCopy.push( product );
            }
            else{
                cartCopy[existingProduct].quantity++;
            }
            return cartCopy;
        })*/
    }
    return (
        <CartContext.Provider value = {{Cart, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}