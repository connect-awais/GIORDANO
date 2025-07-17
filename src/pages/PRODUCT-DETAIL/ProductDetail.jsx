import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { useCart } from '../../context/CartContext';

import SizeChart from '../../assets/CHART/polosizechart.webp'



const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'Small');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#000');
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'instant' }); // prevents scroll flash
}, []);

const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: '32px' }}>
        Product not found. <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

    

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Purchase Completed ✅");
    }, 3000);
  };

  return (
    <div>
    <div className="product-detail-container">
      <div className="left-section">
        <img
          src={product.image}
          alt={product.title}
          className="main-product-image"
          loading="lazy"
        />
        <div className="carousel-arrow left">&#8249;</div>
        <div className="carousel-arrow right">&#8250;</div>
      </div>

      <div className="right-section">
        

        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">Rs.{product.price.toLocaleString()}.00</p>

        <p className="product-label">Size: <span>{selectedSize}</span></p>
        <div className="size-options">
          {(product.sizes || ['Small', 'Medium', 'Large', 'XL', 'XXL']).map(size => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <p className="product-label">Color:</p>
<div className="color-options">
  {product.colors?.map((color, index) => (
    <div
      key={index}
      className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    />
  ))}
</div>

<div className="quantity-product">
        <p className="product-label">Quantity</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        </div>

        <div className="stock-warning">
          <span className="dot"></span> Only {product.stock || 2} left!
        </div>

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to cart</button>
        <button
        className={`buy-now-btn ${loading ? "loading" : ""}`}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Operation is in process...
          </>
        ) : (
          "Buy it now"
        )}
      </button>
      </div>
      </div>

      <div className="chart">
      <img src={SizeChart} loading="lazy" alt='chart'/>
      </div>
    </div>
  );
};

export default ProductDetail;
