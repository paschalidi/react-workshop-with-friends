import React, { useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../../constants";

function ProductPage({ products, match: { params }, dispatch }) {
  const item = Object.values(products).filter(
    item => item.id === parseInt(params.id, 10)
  )[0];

  const [quantity, quantityCount] = useState(1);

  return (
    <div>
      <h3>{item.title}</h3> <span>{item.price}$</span> |{" "}
      <form
        onSubmit={event => {
          event.preventDefault();
          return dispatch({
            type: ADD_TO_CART,
            payload: {
              title: item.title,
              price: item.price,
              id: item.id,
              quantity
            }
          });
        }}
      >
        <input
          type="number"
          name="quantity"
          value={quantity}
          min={item.inventory === 0 ? 0 : 1}
          max={item.inventory}
          onChange={e => quantityCount(parseInt(e.target.value, 10))}
        />

        <button disabled={item.inventory === 0} type="submit">
          add to the cart
        </button>
        <div>items on stock: {item.inventory}</div>
      </form>
      <hr />
    </div>
  );
}

const mapStateToProps = ({ productsReducer }) => ({
  products: productsReducer
});

export default connect(mapStateToProps)(withRouter(ProductPage));
