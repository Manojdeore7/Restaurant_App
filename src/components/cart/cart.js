import classes from "./cart.module.css";

function Cart(props) {
  let cartItoms = (
    <ul>
      {[{ id: "1", name: "manoj", price: 45 }].map((e) => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItoms}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>67.78</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
export default Cart;
