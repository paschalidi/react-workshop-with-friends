import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import createStore from "./infrastructure/store";
import ProductPage from "./product/ProductPage";
import Cart from "./cart";

const { store, persistor } = createStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Cart />
        <Switch>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);
