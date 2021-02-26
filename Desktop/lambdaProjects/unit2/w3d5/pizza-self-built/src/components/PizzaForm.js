import React from "react";
import { useState, useEffect } from "react";
import pizzaSchema from "../Validation";
import * as yup from "yup";

// blank object for form entry
const formTemp = {
  name: "",
  size: "",
  sauce: "",
  pepp: false,
  saus: false,
  anchovies: false,
  redpepper: false,
  xtracheese: false,
  garlic: false,
  sub: "",
  specInst: "",
};

// error form template to be populated by Yup responses
const formErrTemp = {
  name: "",
  size: "",
  sauce: "",
  pepp: "",
  saus: "",
  anchovies: "",
  redpepper: "",
  xtracheese: "",
  garlic: "",
  sub: "",
  specInst: "",
};

const PizzaForm = ({ submitOrder }) => {
  const [pizzaForm, setPizzaForm] = useState([formTemp]); //main form
  const [disabled, setDisabled] = useState(true); //disables the submit button dependent on yup validation
  const [formErrors, setFormErrors] = useState(formErrTemp); //Yup top send form errors to this state

  //   onsubmit - handled mostly in App component as 'submitOrder'
  const submitHandler = (evt) => {
    evt.preventDefault();
    submitOrder(pizzaForm);
    setPizzaForm(formTemp); //resets form
  };

  //   checks on form with yup
  useEffect(() => {
    pizzaSchema.isValid(pizzaForm).then((valid) => setDisabled(!valid));
  }, [pizzaForm]);

  //   standard form changehandles
  const changeHandler = (evt) => {
    const { name, value, type, checked } = evt.target;
    const realVal = type === "checkbox" ? checked : value;
    yup
      .reach(pizzaSchema, name)
      .validate(realVal)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setPizzaForm({ ...pizzaForm, [name]: realVal });
  };

  return (
    <div class=" flex flex-col w-full h-screen border-2 border-black ">
      <div class=" flex flex-col w-4/6 h-full align-center border-2 border-gray-400 self-center ">
        <h1 class="text-2xl self-center w-full border-b-2 border-gray-200 text-center	">
          Build your Pizza
        </h1>{" "}
        <img
          class="w-full h-1/4 mt-2"
          src="https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?cs=srgb&dl=pexels-rodolfo-clix-1596888.jpg&fm=jpg"
          alt="pizza sign"
        />
        <h2 class="ml-8 mt-4"> Build your Pizza</h2>
        <form onSubmit={submitHandler}>
          <label>
            Name:
            <input
              class="border-2 border-gray-500 rounded ml-4 my-8 focus:ring-2 focus:ring-blue-600"
              type="text"
              name="name"
              value={pizzaForm.name}
              onChange={changeHandler}
            />
          </label>
          <div class="flex align-center bg-gray-200 p-4 my-4">
            <h3 class="text-xl">Choice of size</h3>
            <label class="ml-8">
              <select
                value={pizzaForm.size}
                onChange={changeHandler}
                name="size"
              >
                <option value="0"> Please choose a size </option>
                <option value="small"> Small baby pizza </option>
                <option value="medium"> Medium Pizza </option>
                <option value="large"> Large Pizza</option>
              </select>
            </label>
          </div>
          <h3 class="text-xl">Choose your sauce</h3>
          <label>
            Red Sauce
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sauce"
              value="red"
              checked={pizzaForm.sauce === "red"}
              onChange={changeHandler}
            />
          </label>
          <label>
            BBQ
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sauce"
              value="bbq"
              checked={pizzaForm.sauce === "bbq"}
              onChange={changeHandler}
            />
          </label>
          <label>
            Garlic
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sauce"
              value="garlic"
              checked={pizzaForm.sauce === "garlic"}
              onChange={changeHandler}
            />
          </label>
          <div class="flex align-center flex-wrap bg-gray-200 p-4 my-4">
            <h3 class="text-xl">
              Choice of toppings <br /> choose up to 4
            </h3>
            <label class="ml-8">
              Pepporoni
              <input
                class="ml-2"
                name="pepp"
                type="checkbox"
                checked={pizzaForm.pepp}
                onChange={changeHandler}
              />
            </label>
            <label class="ml-8">
              Sausage
              <input
                class="ml-2"
                name="saus"
                type="checkbox"
                checked={pizzaForm.saus}
                onChange={changeHandler}
              />
            </label>
            <label class="ml-8">
              Anchovies
              <input
                class="ml-2"
                name="anchovies"
                type="checkbox"
                checked={pizzaForm.anchovies}
                onChange={changeHandler}
              />
            </label>
            <label class="ml-8">
              Red Pepper
              <input
                class="ml-2"
                name="redpepper"
                type="checkbox"
                checked={pizzaForm.redpepper}
                onChange={changeHandler}
              />
            </label>
            <label class="ml-8">
              xtracheese
              <input
                class="ml-2"
                name="xtracheese"
                type="checkbox"
                checked={pizzaForm.xtracheese}
                onChange={changeHandler}
              />
            </label>
            <label class="ml-8">
              garlic
              <input
                class="ml-2"
                name="garlic"
                type="checkbox"
                checked={pizzaForm.garlic}
                onChange={changeHandler}
              />
            </label>
          </div>
          <h3 class="mb-4 text-xl">Any Substitutes?</h3>
          <label>
            Pizza free (just air)
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sub"
              value="air"
              checked={pizzaForm.sub === "air"}
              onChange={changeHandler}
            />
          </label>
          <label>
            Gluten Free
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sub"
              value="NoGluten"
              checked={pizzaForm.sub === "NoGluten"}
              onChange={changeHandler}
            />
          </label>
          <label>
            No Substitutes
            <input
              class="ml-2 mr-4"
              type="radio"
              name="sub"
              value="No Subs"
              checked={pizzaForm.sub === "No Subs"}
              onChange={changeHandler}
            />
          </label>
          <div>
            <h3 class="text-xl mt-4"> Special Instructions:</h3>
            <label>
              <textarea
                class="border-2 border-gray-500 rounded ml-4 my-8 w-1/2"
                type="textarea"
                name="specInst"
                placeholder="Anything we need to know"
                value={pizzaForm.specInst}
                onChange={changeHandler}
              />
            </label>
          </div>
          <button
            class="self-center m-auto hover:bg-blue-700"
            type="submit"
            onSubmit={submitHandler}
            disabled={disabled}
          >
            Submit Order!
          </button>
          {disabled
            ? "Form is not ready to submit!"
            : "click submit to order your pizza"}
          <p>{formErrors.name}</p>
          <p>{formErrors.size}</p>
          <p>{formErrors.sauce}</p>
        </form>
      </div>
    </div>
  );
};

export default PizzaForm;
