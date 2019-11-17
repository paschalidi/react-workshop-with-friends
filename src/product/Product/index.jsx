import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../../constants";

const Product = ({ title, price, id, dispatch }) => {
  return (
    <div>
      <h3>
        <Link to={`/product/${id}`}>{title}</Link>
      </h3>{" "}
      <span>{price}$</span> |{" "}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: ADD_TO_CART,
            payload: { title, price, id, quantity: 1 }
          })
        }
      >
        add to the cart
      </button>
      <hr />
    </div>
  );
};

export default connect()(Product);
