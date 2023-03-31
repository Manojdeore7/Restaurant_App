import { Fragment } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/meals";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
