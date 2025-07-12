import './CartSideBar.css';
import { MdClose } from "react-icons/md";
import { useCart } from '../../context/CartContext';
import { AiOutlineClose } from 'react-icons/ai'; // cross for items

function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart(); // include remove function

  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <MdClose className="close-icon" onClick={onClose} />
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-txt">
            <p>Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="cart-items-wrapper">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">Rs.{item.price.toLocaleString()}</p>
                </div>
                <AiOutlineClose 
                  className="cart-remove-icon"
                  onClick={() => removeFromCart(item.id)} // remove on click
                  title="Remove item"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
