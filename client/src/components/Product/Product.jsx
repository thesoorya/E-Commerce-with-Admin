import React, { useContext, useState, useEffect } from 'react';
import './Product.css';
import { StoreContext } from '../Context/StoreContext';

const Product = ({ product }) => {
    const { name, description, price, category, image, _id } = product;
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const [quantity, setQuantity] = useState(cartItems[_id] || 0);

    useEffect(() => {
        setQuantity(cartItems[_id] || 0);
    }, [cartItems, _id]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        addToCart(_id);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            removeFromCart(_id);
        }
    };

    return (
        <div className="product-card">
            <img src={`http://localhost:5000/images/${image}`} alt={name} className="product-image" />
            <div className="quantity-controls">
                <button className="quantity-button" onClick={handleDecrement}>-</button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-button" onClick={handleIncrement}>+</button>
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
