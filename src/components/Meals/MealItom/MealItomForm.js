import classes from "./MealItomForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import { useContext, useRef, useState } from "react";

function MealItomForm(props) {
  let addRef = useRef();
  let [check, setCheck] = useState(false);
  function submitHandler(e) {
    e.preventDefault();

    let total = +addRef.current.value;
    if (total > 0) {
      setCheck(true);
    }
    props.fun(total);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={addRef}
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
