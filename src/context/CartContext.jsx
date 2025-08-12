import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }){
    const [cartItems, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem) => {
        setCart(prevItems => [...prevItems, newItem]);
        setTotal(getTotal());
    }

    const removeFromCart = (removedItemId) => {
        setCart(prevItems => prevItems.filter(item => item.id !== removedItemId));
        setTotal(getTotal());
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);