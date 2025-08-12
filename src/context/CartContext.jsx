import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }){
    const [cartItems, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem) => {
        setCart(prevItems => [...prevItems, newItem]);
    }

    const removeFromCart = (removedItemId) => {
        setCart(prevItems => prevItems.filter(item => item.id !== removedItemId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);