import classes from "./MealSummary.module.css";
import CartContext1 from "../../store/cart-context1";
import { useContext, useState } from "react";
const MealsSummary = () => {
  let cartcxt = useContext(CartContext1);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [desc, setDesc] = useState("");

  function add(e) {
    e.preventDefault();
    let obj = {
      id: "m6",
      name: name,
      description: desc,
      price: price,
    };

    cartcxt.addItem(obj);
    setDesc("");
    setName("");
    setPrice("");
  }
  return (
    <form className={classes.summary} onSubmit={add}>
      <label>Medicines Name</label>
      <input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label>Medicines Description</label>
      <input
        type="text"
        value={desc}
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      ></input>
      <label>Medicines Price</label>
      <input
        value={price}
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <button type="submit">Add in List</button>
    </form>
  );
};

export default MealsSummary;
