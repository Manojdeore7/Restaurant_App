import CartContext, { CartContext1 } from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const defaultCartState1 = {
  items: Meals,
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
const cartReducer1 = (state, action) => {
  if (action.type === "ADD") {
    let updateItems = state.items.concat(action.item);

    return {
      items: updateItems,
    };
  }
  return defaultCartState1;
};
function CartProvider(props) {
  let [cartstate, dispatch] = useReducer(cartReducer, defaultCartState);
  let [cartstate1, dispatch1] = useReducer(cartReducer1, defaultCartState1);

  let addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  let removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  let addItemToCartHandler1 = (item) => {
    dispatch1({ type: "ADD", item: item });
  };
  let cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  let cartContext1 = {
    items: cartstate1.items,

    addItem: addItemToCartHandler1,
  };
  return (
    <CartContext.Provider value={cartContext}>
      <CartContext1.Provider value={cartContext1}>
        {props.children}
      </CartContext1.Provider>
    </CartContext.Provider>
  );
}
export default CartProvider;
