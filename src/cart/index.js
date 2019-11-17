import React from "react";
import { connect } from "react-redux";

function Cart({ cartItems }) {
  console.log(cartItems.totalPrice);

  return (
    <div>
      <span style={{ color: "red" }}>{cartItems.totalPrice.toFixed(2)}</span> $
      |<span> {cartItems.totalItems}</span> items
    </div>
  );
}

const mapStateToProps = ({ cartReducer }) => {
  return { cartItems: cartReducer };
};

export default connect(mapStateToProps)(Cart);
