import React from "react";

const PizzaForm = () => {
  return (
    <div class=" flex flex-col w-full h-screen border-2 border-black ">
      <div class=" flex flex-col w-4/6 h-full align-center border-2 border-black self-center ">
        <h1 class="text-2xl self-center w-full border-b-2 border-black text-center	">
          Build your Pizza
        </h1>{" "}
        <img
          class="w-full h-1/4 mt-2"
          src="https://images.pexels.com/photos/1596888/pexels-photo-1596888.jpeg?cs=srgb&dl=pexels-rodolfo-clix-1596888.jpg&fm=jpg"
          alt="pizza sign"
        />
        <h2 class="ml-8 mt-4"> Build your Pizza</h2>
        <h3 class="bg-gray-200 p-4">
          Choice of size <br /> Required
        </h3>
      </div>
    </div>
  );
};

export default PizzaForm;
