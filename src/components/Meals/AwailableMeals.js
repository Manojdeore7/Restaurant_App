import classes from "./AwailableMeals.module.css";
import Card from "../UI/card";
import MealItom from "./MealItom/MealItom";
const Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AwailableMeals() {
  const Dummy_Meals = Meals.map((e) => (
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
