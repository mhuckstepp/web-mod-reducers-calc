import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="flex flex-col justify-center align-center">
      <div class="w-full h-96 flex flex-col  justify-center align-center border-2 border-black">
        <h1 class="self-center">Your favorite food, delivered while coding</h1>
        <Link class="self-center" to="/pizza">
          <button class="w-24 self-center my-8 hover:bg-blue-700">
            {" "}
            Pizza?{" "}
          </button>
        </Link>
      </div>
      <div class="w-full flex flex-col justify-center align-center self-center">
        <h2 class="text-2xl m-8"> Food Delivery in Gotham City</h2>
        <div class="w-full h-3/6 flex flex-wrap  self-center">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
