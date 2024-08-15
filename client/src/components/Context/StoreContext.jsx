import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const url = 'http://localhost:5000';
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState('')
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) {
      console.error("URL is not defined in the context");
      return;
    }

    setLoading(true);
    axios.get(`${url}/api/product/list`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  })

  const addToCart = () => {

  }

  const removeFromCart = () => {

  }

  const contextData = {
    url,
    cartItems,
    addToCart,
    removeFromCart,
    token,
    setToken,
    products,
    loading
  };

  return (
    <StoreContext.Provider value={contextData}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
