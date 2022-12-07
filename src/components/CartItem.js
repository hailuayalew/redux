import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-clice";
import "./Cart.css";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch=useDispatch();
const decrementCartItems=()=>{
dispatch(cartActions.removeFromCart(id));
}
const increementCartItems=()=>{
  dispatch(cartActions.addToCart({
    name,
    id,
    price
  }));
}
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItems} className="cart-actions">
        -
      </button>
      <button onClick={increementCartItems} className="cart-actions" >
        +
      </button>
    </div>
  );
};

export default CartItem;
