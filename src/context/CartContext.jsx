import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);

    const [totalCart, setTotalCart] = useState(0);

    function addToCart(product) {
        
        console.log(product);
        
        setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);
            
            if(existingProduct < 0){
                product.quantity = 1;                
                cartCopy.push( product );
            }
            else{
                cartCopy[existingProduct].quantity++;
            }
            console.log(cartCopy);
            return cartCopy;
        })
    }

    function removeFromCart(product) {

        setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);

            if(existingProduct >= 0){

                cartCopy[existingProduct].quantity--;
                console.log(cartCopy[existingProduct].quantity);
                if(cartCopy[existingProduct].quantity < 1) {
                    cartCopy.splice(existingProduct, 1)
                }                
            } 

            return cartCopy;
        })
    }

    function cancelCart(product) {
        setCart(prevState => {
            const cartCopy = [...prevState];
            
            const existingProduct = cartCopy.findIndex(item => item.id == product.id);
            
            cartCopy.splice(existingProduct, 1)
            
            console.log(cartCopy[existingProduct].quantity);
                

            return cartCopy;
        })
           
    }


    return (
        <CartContext.Provider value = {{cart, setCart, addToCart, removeFromCart, cancelCart}}>
            {props.children}
        </CartContext.Provider>
    )
}