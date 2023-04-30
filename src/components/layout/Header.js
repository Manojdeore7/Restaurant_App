import classes from "./Header.module.css";
import food from "../../assests/food.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>BuyGreatShoues</h2>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" />
      </div>
    </Fragment>
  );
}
export default Header;
