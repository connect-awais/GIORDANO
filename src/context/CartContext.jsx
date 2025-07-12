import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);

    // Show animated dropdown
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500); // hide after 2.5s
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, showNotification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
