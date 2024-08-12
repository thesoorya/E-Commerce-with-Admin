import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const url = 'http://localhost:5000';
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const updatedItems = { ...prev };
      if (updatedItems[id]) {
        if (updatedItems[id] > 1) {
          updatedItems[id] -= 1;
        } else {
          delete updatedItems[id];
        }
      }
      return updatedItems;
    });
  };

  const contextData = {
    url,
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextData}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
