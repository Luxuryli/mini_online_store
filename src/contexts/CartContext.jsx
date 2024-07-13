import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAddNotification, setShowAddNotification] = useState(false);
  const [showRemoveNotification, setShowRemoveNotification] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setShowAddNotification(true);
    setTimeout(() => {
      setShowAddNotification(false);
    }, 3000);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem !== item));
    setShowRemoveNotification(true);
    setTimeout(() => {
      setShowRemoveNotification(false);
    }, 3000);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, showAddNotification, showRemoveNotification }}>
      {children}
    </CartContext.Provider>
  );
};
