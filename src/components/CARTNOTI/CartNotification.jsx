import React from 'react';
import './CartNotification.css';
import { useCart } from '../../context/CartContext';

const CartNotification = () => {
  const { showNotification } = useCart();

  return (
    <div className={`cart-notification ${showNotification ? 'show' : ''}`}>
      ✅ Product added to cart successfully!
    </div>
  );
};

export default CartNotification;
