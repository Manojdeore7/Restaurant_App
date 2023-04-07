import { Fragment } from "react";
import AwailableMeals from "./AwailableMeals";
import MealsSummary from "./MealsSummary";
import CartProvider1 from "../../store/cartProvider1";

function Meals() {
  return (
    <CartProvider1>
      <MealsSummary />
      <AwailableMeals />
    </CartProvider1>
  );
}
export default Meals;
