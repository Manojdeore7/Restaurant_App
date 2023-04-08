import classes from "./AwailableMeals.module.css";
import Card from "../UI/card";
import MealItom from "./MealItom/MealItom";
import { CartContext1 } from "../../store/cart-context";
import { useContext } from "react";

function AwailableMeals() {
  const cartt = useContext(CartContext1);
  console.log(cartt.items);
  const Dummy_Meals = cartt.items.map((e) => (
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
