import classes from "./AwailableMeals.module.css";
import Card from "../UI/card";
import MealItom from "./MealItom/MealItom";
import CartContext1 from "../../store/cart-context1";
import { useContext } from "react";

function AwailableMeals() {
  let CartCxt = useContext(CartContext1);

  const Dummy_Meals = CartCxt.items.map((e) => (
    <MealItom
      key={e.id}
      id={e.id}
      name={e.name}
      description={e.description}
      price={e.price}
      item={e}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Dummy_Meals}</ul>
      </Card>
    </section>
  );
}

export default AwailableMeals;
