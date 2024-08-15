import React, { useContext } from 'react';
import { StoreContext } from '../../components/Context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Placeholder for product fetching logic
  const getProductById = (id) => {
    // Replace with actual fetch logic or use a static list for demo
    return {
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 100,
      image: 'sample.jpg'
    };
  };

  const totalAmount = Object.entries(cartItems).reduce((total, [id, quantity]) => {
    const product = getProductById(id);
    return total + (product.price * quantity);
  }, 0);

  return (
    <div className="cart-container">
      {Object.entries(cartItems).map(([id, quantity]) => {
        const product = getProductById(id);
        return (
          <div key={id} className="cart-item">
            <img src={`http://localhost:5000/images/${product.image}`} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{product.name}</h3>
              <p className="cart-item-description">{product.description}</p>
              <p className="cart-item-price">₹{product.price}</p>
            </div>
            <div className="cart-item-actions">
              <button className="cart-item-button" onClick={() => removeFromCart(id)}>-</button>
              <span className="cart-item-quantity">{quantity}</span>
              <button className="cart-item-button" onClick={() => addToCart(id)}>+</button>
            </div>
          </div>
        );
      })}
      <div className="cart-total">
        <h2>Total Amount: ₹{totalAmount}</h2>
      </div>
    </div>
  );
};

export default Cart;
