import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) {
    return <div>Product not found. <button onClick={() => navigate(-1)}>Go Back</button></div>;
  }

  


  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>Back</button>
      <div style={{ display: 'flex', gap: 32 }}>
        <img src={product.image} alt={product.title} style={{ width: 300, height: 300, objectFit: 'contain' }} />
        <div>
          {product.isNew && <span style={{ color: 'red', fontWeight: 'bold' }}>NEW ARRIVALS</span>}
          <h2>{product.title}</h2>
          <p style={{ fontSize: 24 }}>Rs.{product.price.toLocaleString()}.00</p>
          <div>
            <strong>Colors:</strong>
            <div style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
              {product.colors.map((color, idx) => (
                <span key={idx} style={{ display: 'inline-block', width: 24, height: 24, borderRadius: '50%', background: color, border: '1px solid #ccc' }}></span>
              ))}
            </div>
          </div>
          <div>
            <strong>Sizes:</strong>
            <div style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
              {product.sizes.map((size, idx) => (
                <span key={idx} style={{ padding: '4px 12px', border: '1px solid #ccc', borderRadius: 4 }}>{size}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 