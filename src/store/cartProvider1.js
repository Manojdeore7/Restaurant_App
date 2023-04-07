import CartContext1 from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [
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
  ],
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updateItems = state.items.concat(action.item);

    return {
      items: updateItems,
    };
  }
  return defaultCartState;
};
function CartProvider1(props) {
  let [cartstate, dispatch] = useReducer(cartReducer, defaultCartState);

  let addItemToCartHandler = (item) => {
    console.log(item);
    dispatch({ type: "ADD", item: item });
  };

  let cartContext = {
    items: cartstate.items,

    addItem: addItemToCartHandler,
  };
  return (
    <CartContext1.Provider value={cartContext}>
      {props.children}
    </CartContext1.Provider>
  );
}
export default CartProvider1;
