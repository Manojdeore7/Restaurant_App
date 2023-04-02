import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateItems = state.items.concat(action.item);
    let updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updateItems = state.items.filter((e) => {
      return e.id !== action.id;
    });
    // let updateTotalAmount =
    //   state.totalAmount - action.item.price * action.item.amount;
    let updateTotalAmount = updateItems.reduce((sum, e) => {
      return (sum += e.price * e.amount);
    }, 0);
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};
function CartProvider(props) {
  let [cartstate, dispatch] = useReducer(cartReducer, defaultCartState);

  let addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  let removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  let cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
