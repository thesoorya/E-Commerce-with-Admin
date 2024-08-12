import React, { useContext, useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { StoreContext } from "../../components/Context/StoreContext";
import axios from 'axios';
import './Home.css'; // Add this import

const Home = () => {
  const { url } = useContext(StoreContext);

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
  }, [url]);

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
