import classes from "./Header.module.css";
import food from "../../assests/food.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={food} />
      </div>
    </Fragment>
  );
}
export default Header;
