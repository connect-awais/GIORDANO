import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const ProductCard = ({ image, title, price, colors, sizes, isNew, ...rest }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${encodeURIComponent(title)}`, { state: { image, title, price, colors, sizes, isNew, ...rest } });
  };
  return (
    <div className="product-card" data-aos="fade-up" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="image-wrapper">
        {isNew && <span className="badge">NEW ARRIVALS</span>}
        <img src={image} alt={title} />
      </div>
      <h4 className="title">{title}</h4>
      <p className="price">Rs.{price.toLocaleString()}.00</p>

      <div className="color-options">
        {colors.map((color, index) => (
          <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
        ))}
      </div>

      <div className="size-options">
        {sizes.map((size, index) => (
          <span key={index} className="size">{size}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
