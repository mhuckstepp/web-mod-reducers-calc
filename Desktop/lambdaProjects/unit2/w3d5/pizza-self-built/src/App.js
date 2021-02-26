import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import SuccessPage from "./components/SuccessPage";

const App = () => {
  return (
    <>
      <header>
        <h3>Lambda Eats</h3>
        <button>Home</button>
        <button>Help</button>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/pizza" component={PizzaForm} />
      <Route path="/success" component={SuccessPage} />
    </>
  );
};
export default App;
