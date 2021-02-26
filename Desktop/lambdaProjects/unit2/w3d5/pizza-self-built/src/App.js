import { Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const App = () => {
  const [orderSuccess, setOrderSuccess] = useState({}); //store the response from endpoint order submit in state
  const [ordered, setOrdered] = useState(false); // used as toggle to show form or succes page

  // post request with full order form and store response
  const submitOrder = (pizzaObj) => {
    Axios.post("https://reqres.in/api/users", pizzaObj)
      .then((res) => {
        let orderRes = res.data;
        console.log(orderRes.name);
        setOrderSuccess({
          id: orderRes.id,
          name: orderRes.name.trim(),
          size: orderRes.size.trim(),
          sauce: orderRes.sauce.trim(),
          pepp: orderRes.pepp,
          saus: orderRes.saus,
          anchovies: orderRes.anchovies,
          redpepper: orderRes.redpepper,
          xtracheese: orderRes.xtracheese,
          garlic: orderRes.garlic,
          sub: orderRes.sub,
          specInst: orderRes.specInst,
        });
        setOrdered(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <header class="flex justify-between items-center h-28 bg-gray-300">
        <h3 class="text-2xl text-red-500 mx-8">Lambda Eats</h3>
        <div>
          <Link to="/">
            <button class="p-2 px-4 bg-gray-700 hover:bg-gray-400  rounded border-1 border-gray-900">
              Home
            </button>
          </Link>
          <button class="mr-8 p-2  px-4 bg-gray-400 hover:bg-gray-700  rounded">
            Help
          </button>
        </div>
      </header>
      <div></div>
      <Route exact path="/">
        <Home />
      </Route>
      {/* if ordered show success page otherwise show order form page */}
      <Route path="/pizza">
        {ordered ? (
          <SuccessPage orderSuccess={orderSuccess} />
        ) : (
          <PizzaForm submitOrder={submitOrder} />
        )}
      </Route>
    </>
  );
};
export default App;
