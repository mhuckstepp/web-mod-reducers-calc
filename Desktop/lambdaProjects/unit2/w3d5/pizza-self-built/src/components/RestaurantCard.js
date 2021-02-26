import React from "react";

const RestaurantCard = () => {
  return (
    <div class="w-1/4 flex flex-col align-start m-10">
      <img
        src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?cs=srgb&dl=pexels-nishant-aneja-2955819.jpg&fm=jpg"
        alt="Food Pic"
        class="w-full"
      />
      <h3> Restaurant Name</h3>
      <div class="flex text-xs ">
        <span>$$</span>
        <span> Type of Food</span>
        <span>Type of Restaurant</span>
        <span> Food Item </span>
      </div>
      <div>
        <button class="py-1 px-2 mr-4 text-m bg-gray-200 text-black">
          30 mins
        </button>{" "}
        <button class="py-1 px-2 text-m bg-gray-200 text-black">$5 Fee</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
