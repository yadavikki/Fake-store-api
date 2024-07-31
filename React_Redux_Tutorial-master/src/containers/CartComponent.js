import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartItem, removeFromCart,IncrementCartItem } from "../redux/reducers/cartSlice";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    dispatch(decrementCartItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement =(item) =>{
    dispatch(IncrementCartItem(item));
  }
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="cart-empty">Your cart is empty</div>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} className="cart-image" />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleRemove(item)}>Remove Item</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartComponent;
