import { ADD_TO_CART, SAVE_PRODUCTS } from "../constants";

export default function productsReducer(state = null, action) {
  switch (action.type) {
    case SAVE_PRODUCTS: {
      const { products } = action.payload;
      return products.map(product => ({ ...product }));
    }
    case ADD_TO_CART: {
      const { id, quantity } = action.payload;

      return state.map(item => {
        if (item.id === id && quantity <= item.inventory) {
          return { ...item, inventory: item.inventory - quantity };
        }

        return item;
      });
    }
    default:
      return state;
  }
}
