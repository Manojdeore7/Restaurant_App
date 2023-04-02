import classes from "./Input.module.css";
import { ForwardRef, forwardRef } from "react";
function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label>{props.input.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
}
export default forwardRef(Input);
