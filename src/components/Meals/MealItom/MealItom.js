import classes from "./MealItom.module.css";
import MealItomForm from "./MealItomForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
function MealItom(props) {
  let price = `$${props.price.toFixed(2)}`;
  let cacrtcxt = useContext(CartContext);

  function total(amountValue) {
    console.log(amountValue);
    cacrtcxt.addItem({
      id: props.id,
      price: props.price,
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
        <MealItomForm fun={total} />
      </div>
    </li>
  );
}
export default MealItom;
