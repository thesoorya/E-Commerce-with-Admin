import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItems from "../../components/ListItems/ListItems";
import "./List.css";

const List = ({ url }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/api/product/list`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="list-container">
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ListItems
            key={product._id}
            name={product.name}
            price={product.price}
            category={product.category}
            id={product._id}
            url={url}
          />
        ))
      )}
    </div>
  );
};

export default List;
