import React, { useContext, useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { StoreContext } from "../../components/Context/StoreContext";
import './Home.css';

const Home = () => {

  const {products, loading} = useContext(StoreContext)

  return (
    <div className="home-wrapper">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
