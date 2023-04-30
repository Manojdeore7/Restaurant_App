import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const CartContext1 = React.createContext({
  items: [],

  addItem: (item) => {},
});
export default CartContext;
export { CartContext1 };
