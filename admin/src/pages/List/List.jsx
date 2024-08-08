import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItems from '../../components/ListItems/ListItems';
import './List.css';

const List = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/api/product/list")
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit product with id: ${id}`);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log(`Delete product with id: ${id}`);
    // Implement delete functionality
  };

  return (
    <div className="list-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <ListItems
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            id={product._id}
            onEdit={() => handleEdit(product._id)}
            onDelete={() => handleDelete(product._id)}
          />
        ))
      )}
    </div>
  );
};

export default List;
