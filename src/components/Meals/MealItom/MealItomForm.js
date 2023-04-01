import classes from "./MealItomForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

function MealItomForm() {
  return (
    <form className={classes.form}>
      <Input
        input={{
          label: "Amount",
          type: "number",
          max: 5,
          min: 1,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
export default MealItomForm;
