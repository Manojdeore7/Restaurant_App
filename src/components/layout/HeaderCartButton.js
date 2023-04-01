import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
function HeaderCartButton(props) {
  let cartXt = useContext(CartContext);
  let totalNumberOfItems = cartXt.items.reduce((currNo, item) => {
    return (currNo += item.amount);
  }, 0);
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalNumberOfItems}</span>
    </button>
  );
}
export default HeaderCartButton;
