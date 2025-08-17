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
        setCart(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
            
            if (existingItemIndex !== -1) {
                // Si el producto ya existe, incrementar la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
                return updatedItems;
            } else {
                // Si es un producto nuevo, añadirlo con cantidad 1
                return [...prevItems, { ...newItem, quantity: 1 }];
            }
        });
    }

    const removeFromCart = (removedItemId) => {
        setCart(prevItems => prevItems.filter(item => item.id !== removedItemId));
    }

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        
        setCart(prevItems => 
            prevItems.map(item => 
                item.id === itemId 
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateQuantity,
            clearCart, 
            getTotal,
            getTotalItems
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);