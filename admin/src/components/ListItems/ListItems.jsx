import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './ListItems.css';

const ListItems = ({ name, description, price, category, id, onEdit, onDelete }) => {
  return (
    <div className="product-box">
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ₹{price}</p>
        <p>Category: {category}</p>
        <small style={{
            color: '#aaa'
        }}>{id}</small>
      </div>
      <div className="product-actions">
        <FaEdit className="icon" onClick={onEdit} />
        <FaTrash className="icon" onClick={onDelete} />
      </div>
    </div>
  );
};

export default ListItems;
