import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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
        return cart.reduce((total, item) => total + item.price, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);