import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}
function Overlays(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
let element = document.getElementById("overlays");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, element)}
      {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, element)}
    </Fragment>
  );
}
export default Modal;
