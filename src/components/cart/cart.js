import classes from "./cart.module.css";
import Modal from "../UI/modal";
function Cart(props) {
  let cartItoms = (
    <ul>
      {[{ id: "1", name: "manoj", price: 45 }].map((e) => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItoms}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>67.78</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
