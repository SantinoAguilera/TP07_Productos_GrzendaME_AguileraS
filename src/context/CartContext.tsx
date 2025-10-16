import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    category: string;
    quantity: number;
    thumbnail?: string;
    title: string;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getTotalItems: () => number;
};

type CartProviderProps = {
    children: ReactNode;    
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: CartProviderProps){
    const [cartItems, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'> & { id: number }) => {
        setCart((prevItems: CartItem[]) => {
          const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
      
          if (existingItemIndex !== -1) {
            const updatedItems = [...prevItems];
            const existingItem = updatedItems[existingItemIndex];
      
            if (!existingItem) return prevItems;
      
            updatedItems[existingItemIndex] = {
              ...existingItem,
              quantity: existingItem.quantity + 1
            };
      
            return updatedItems;
          } else {
            return [...prevItems, { ...newItem, quantity: 1 }];
          }
        });
      };

    const removeFromCart = (removedItemId: number) => {
        setCart((prevItems: CartItem[]) => prevItems.filter(item => item.id !== removedItemId));
    }

    const updateQuantity = (itemId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }
      
        setCart((prevItems: CartItem[]) =>
            prevItems.map(item =>
                item.id === itemId
                ? { ...item, quantity: newQuantity }
                : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    }

    const getTotal = () => {
        return cartItems.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
    }
      
    const getTotalItems = () => {
        return cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0);
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

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}