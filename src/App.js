import { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/meals";
import Cart from "./components/cart/cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [show, setShow] = useState(false);
  function showPage() {
    setShow(true);
  }
  function hide() {
    setShow(false);
  }
  return (
    <CartProvider>
      {show && <Cart onClose={hide} />}
      <Header onOpen={showPage} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
