import React from "react";
import { connect } from "react-redux";
import Product from "./product/Product";
import products from "./products";
import { SAVE_PRODUCTS } from "./constants";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: SAVE_PRODUCTS, payload: { products } });
  }

  render() {
    return (
      <div>
        {products.map(item => (
          <Product
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    );
  }
}

export default connect()(App);
