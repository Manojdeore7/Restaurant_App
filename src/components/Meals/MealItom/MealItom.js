import classes from "./MealItom.module.css";
import MealItomForm from "./MealItomForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
function MealItom(props) {
  let price = `$${props.price}`;
  let cacrtcxt = useContext(CartContext);

  function total(amountValue, small, large, medium) {
    cacrtcxt.addItem({
      name: props.name,
      id: props.id,
      price: props.price,
      small: small,
      large: large,
      medium: medium,
      key: props.id,
      amount: amountValue,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <h5>Awailable Quantity</h5>
        <p>L {props.large}</p>
        <p>S {props.small}</p>
        <p>M {props.medium}</p>
      </div>

      <div>
        <MealItomForm fun={total} id={props.id} />
      </div>
    </li>
  );
}
export default MealItom;
