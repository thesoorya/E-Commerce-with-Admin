import React, { useContext, useState, useEffect } from 'react';
import './Product.css';
import { StoreContext } from '../Context/StoreContext';

const Product = ({ product }) => {
    const { name, description, price, category, image, _id } = product;
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="product-card">
            <img src={`http://localhost:5000/images/${image}`} alt={name} className="product-image" />
            <div className="quantity-controls">
                <button className="quantity-button" onClick={removeFromCart}>-</button>
                <span className="quantity-display">{}</span>
                <button className="quantity-button" onClick={addToCart}>+</button>
            </div>
            <div className="product-details">
                <h3 className="product-title">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">₹{price}</p>
                <p className="product-category">{category}</p>
            </div>
        </div>
    );
};

export default Product;
