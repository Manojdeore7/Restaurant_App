import classes from "./MealItom.module.css";
import MealItomForm from "./MealItomForm";
function MealItom(props) {
  let price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItomForm />
      </div>
    </li>
  );
}
export default MealItom;
