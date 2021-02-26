import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

const App = () => {
  const [pizzaForm, setPizzaForm] = useState([]);

  return (
    <>
      <header class="flex justify-between items-center h-28 bg-gray-300">
        <h3 class="text-2xl text-red-500 mx-8">Lambda Eats</h3>
        <div>
          <button class="p-2 px-4 bg-gray-700 rounded border-1 border-gray-900">
            Home
          </button>
          <button class="mr-8 p-2  px-4 bg-gray-400 rounded">Help</button>
        </div>
      </header>
      <div></div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <PizzaForm setPizzaForm={setPizzaForm} pizzaForm={pizzaForm} />
      </Route>
      <Route path="/success">
        <SuccessPage />
      </Route>
    </>
  );
};
export default App;
