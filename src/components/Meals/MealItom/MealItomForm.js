import classes from "./MealItomForm.module.css";
import Input from "../../UI/Input";
import CartContext1 from "../../../store/cart-context";
import { useContext, useRef, useState } from "react";

function MealItomForm(props) {
  let addLRef = useRef();
  let addMRef = useRef();
  let addSRef = useRef();
  let cart = useContext(CartContext1);

  function submitHandler(e) {
    e.preventDefault();

    let small = addSRef.current.value;
    let large = addLRef.current.value;
    let medium = addMRef.current.value;
    let total = +(+small + +large + +medium);

    props.fun(total, small, large, medium);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={addLRef}
        input={{
          label: "L",
          type: "number",
          max: 5,
          min: 1,
          defaultValue: 1,
          step: 1,
        }}
      />
      <Input
        ref={addMRef}
        input={{
          label: "M",
          type: "number",
          max: 5,
          min: 1,
          defaultValue: 1,
          step: 1,
        }}
      />
      <Input
        ref={addSRef}
        input={{
          label: "S",
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
