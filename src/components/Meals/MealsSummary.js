import classes from "./MealSummary.module.css";
import { CartContext1 } from "../../store/cart-context";
import { useContext, useState } from "react";
const MealsSummary = () => {
  let cartcxt = useContext(CartContext1);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [desc, setDesc] = useState("");
  let [L, setL] = useState("");
  let [M, setM] = useState("");
  let [S, setS] = useState("");

  function add(e) {
    e.preventDefault();
    let obj = {
      id: "m6",
      name: name,
      description: desc,
      price: price,
      long: L,
      small: S,
      medium: M,
    };

    cartcxt.addItem(obj);
    setDesc("");
    setName("");
    setPrice("");
    setM("");
    setS("");
    setL("");
  }
  return (
    <form className={classes.summary} onSubmit={add}>
      <label>Shoe Name</label>
      <input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label> Description</label>
      <input
        type="text"
        value={desc}
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      ></input>
      <label> Price</label>
      <input
        value={price}
        type="number"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      <label>
        Quantity awailable
        <br></br>L
      </label>

      <input
        value={L}
        type="number"
        onChange={(event) => {
          setL(event.target.value);
        }}
      ></input>
      <lable>M</lable>
      <input
        value={M}
        type="number"
        onChange={(event) => {
          setM(event.target.value);
        }}
      ></input>
      <lable>S</lable>
      <input
        value={S}
        type="number"
        onChange={(event) => {
          setS(event.target.value);
        }}
      ></input>
      <button type="submit">Add in List</button>
    </form>
  );
};

export default MealsSummary;
