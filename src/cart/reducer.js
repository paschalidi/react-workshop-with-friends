import { ADD_TO_CART } from "../constants";

export default function cartReducer(
  state = { totalItems: 0, totalPrice: 0 },
  action
) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { title, id, price, quantity } = action.payload;
      const totalItems =
        state[action.payload.id] && state[action.payload.id].totalItems
          ? state[action.payload.id].totalItems + action.payload.quantity
          : action.payload.quantity;

      return {
        ...state,
        totalItems: state.totalItems + action.payload.quantity,
        totalPrice: state.totalPrice + price * quantity,
        [action.payload.id]: {
          title,
          id,
          price,
          quantity,
          totalItems,
          totalPrice: totalItems * price
        }
      };
    }
    default:
      return state;
  }
}
