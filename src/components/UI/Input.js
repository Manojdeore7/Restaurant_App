import classes from "./Input.module.css";
function Input(props) {
  return (
    <div className={classes.input}>
      <label>{props.input.label}</label>
      <input {...props.input} />
    </div>
  );
}
export default Input;
