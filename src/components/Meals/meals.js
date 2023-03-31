import { Fragment } from "react";
import AwailableMeals from "./AwailableMeals";
import MealsSummary from "./MealsSummary";
function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AwailableMeals />
    </Fragment>
  );
}
export default Meals;
