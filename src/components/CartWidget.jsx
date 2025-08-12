import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Carrito from '../assets/carrito negro.png';
import './CartWidget.css';
import { useCart } from '../context/CartContext.jsx';

function MyPopoverComponent() {
  const {cartItems, removeFromCart, clearCart, total} = useCart();

  const cartItem = (item, index) => (
    <div key={index}>
      <img src={item.thumbnail}></img>
      <div>
        {item.title}
        {item.price}
      </div>
      <button onClick={() => removeFromCart(item.id)}>{"ELIMINAR >:)"}</button>
    </div>
  );

  const popover = (
    <Popover className="popover">
      <Popover.Body>
        {cartItems.map((item, index) => cartItem(item, index))}
        <button onClick={clearCart}>{"ELIMINAR TODO >:D"}</button>
        <div>{total}</div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <button className="HeaderButton"><img src={Carrito}></img></button>
      </OverlayTrigger>
      <div>{cartItems.length}</div>
    </>
  );
}

export default MyPopoverComponent;