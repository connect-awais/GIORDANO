import './CartSidebar.css';
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";

function CartSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>Cart</h2>
          <MdClose className="close-icon" onClick={onClose} style={{color: 'black'}}/>
        </div>
        <div className="empty-txt">
        <p>Your cart is currently empty.</p>
        </div>
      </div>
    </>
  );
}


export default CartSidebar;
