import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
export default HeaderCartButton;
