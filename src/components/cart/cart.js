import classes from "./cart.module.css";
import Modal from "../UI/modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import Card from "../UI/card";
function Cart(props) {
  let CartCXT = useContext(CartContext);
  let removeIte = (el) => {
    let id = el.target.id;
    CartCXT.removeItem(id);
  };
  let cartItoms = (
    <Card>
      <ul>
        {CartCXT.items.map((e) => (
          <li>
            <div className={classes.total}>
              <div>
                <h3>{e.name}</h3>
                <div>{e.price}</div>
              </div>
              <div>
                <div>Amount {e.amount}</div>
                <div className={classes.actions}>
                  <button
                    className={classes.button}
                    onClick={removeIte}
                    id={e.id}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItoms}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{CartCXT.totalAmount}</div>
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
