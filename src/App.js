import Cart from "./components/Cart/cart";
import logo from "./logo.png";
import "./App.css";
function App() {
  return (
    <div>
      <div className="header">
        <h2>ReactMeal</h2>
        <Cart />
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
}

export default App;
