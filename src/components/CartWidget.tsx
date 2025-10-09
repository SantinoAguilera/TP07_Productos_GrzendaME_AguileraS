import React, { useEffect, useState } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Carrito from '../assets/carrito negro.png';
import './CartWidget.css';
import { useCart } from '../context/CartContext.jsx';

function CartWidget() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotal, getTotalItems } = useCart();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal((Math.round(getTotal() * 100) / 100));
  }, [cartItems, getTotal]);

  const cartItem = (item: {id: number, thumbnail: string, title: string, price: number, quantity: number}) => (
    <tr key={item.id} className="cart-item-row">
      <td className="cart-item-image">
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td className="cart-item-title">{item.title}</td>
      <td className="cart-item-price">${item.price}</td>
      <td className="cart-item-quantity">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="quantity-display">{item.quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="cart-item-actions">
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          ×
        </button>
      </td>
    </tr>
  );

  const popover = (
    <Popover className="popover">
      <Popover.Body className="popover-body">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="cart-table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(cartItem)}
                </tbody>
              </table>
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Vaciar Carrito
                </button>
                <button className="checkout-btn">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <button className="HeaderButton">
          <img src={Carrito} alt="Carrito" />
        </button>
      </OverlayTrigger>
      <div className="cart-badge">{getTotalItems()}</div>
    </>
  );
}

export default CartWidget;