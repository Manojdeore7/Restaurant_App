import classes from "./Header.module.css";
import food from "../../assests/food.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMedicine</h2>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg" />
      </div>
    </Fragment>
  );
}
export default Header;
