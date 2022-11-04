import { createContext, useState } from "react";
import Store from "../pages/store";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeOneFromCart: () => {},
    removeFromCart: () => {},
    getTotalPrice: () => {},
});

export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    function getProductQuantity (id) {
        const quantity = cart.find((product) => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    };
    
    function addToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCart(
                [
                    ...cart,
                    {
                        id: id,
                        quantity: 1,
                    },
                ]
            )
        } else {
            setCart(
                cart.map(
                    product => 
                    product.id === id 
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
                )
            )
        }
    };
    
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity !== 1) {
            removeFromCart(id);
        } else {
            setCart(
                cart.map(
                    product => 
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    };

    function removeFromCart(id) {
        setCart(
            cart =>
            cart.filter(currentProduct => {
                return currentProduct.id !== id;
            })
        );
    }

    function getTotalPrice() {
        let total = 0;
        cart.map((cartItem) => {
            const productData = Store(cartItem.id);
            total += (productData.price * cartItem.quantity);
            return total;
        });
    }

    const contextValue = {
        items: cart,
        getProductQuantity,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        getTotalPrice,
    }
                
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}
